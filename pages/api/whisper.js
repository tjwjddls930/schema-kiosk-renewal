import OpenAI from "openai";
import { withFileUpload } from "next-multiparty";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Configure the OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default withFileUpload(async (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).send("No file uploaded");
    return;
  }
  // Rename the file to have a .wav extension
  const newFilePath = path.join(
    path.dirname(file.filepath),
    `${path.basename(file.filepath)}.wav`
  );
  fs.renameSync(file.filepath, newFilePath);

  // console.log("newFilePath: ", newFilePath);

  // Transcribe the audio
  try {
    const { text } = await openai.audio.transcriptions.create({
      file: fs.createReadStream(newFilePath), // fs.createReadStream(file.filepath),
      model: "whisper-1",
    });

    // Delete the temporary file
    fs.unlinkSync(newFilePath);

    // res.status(200).json({ text });

    // Check if the text is "Silence." and return an empty string if so
    const transcriptionText = text?.includes("Silence") ? "" : text;
    // console.log(text);
    // console.log("transcriptionText: ", transcriptionText);

    // If transcriptionText is an empty string, throw an error with status code 400
    if (transcriptionText === "") {
      res.status(400).send("The audio contains silence or was not recognized.");
      return;
    }

    res.status(200).json({ text: transcriptionText });
  } catch (error) {
    console.error(error);
    res.status(400).send(new Error());
  }
});
