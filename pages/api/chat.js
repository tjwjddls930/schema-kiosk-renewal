import OpenAI from "openai";

// Configure the OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    const { choices } = await openai.chat.completions.create({
      messages: req.body.messages, // Example: [{ role: 'user', content: 'Say this is a test' }],
      model: "gpt-4-1106-preview", // "gpt-3.5-turbo",
    });

    if (choices?.length > 0) {
      const newSystemMessage = {
        role: "assistant",
        content: choices[0].message.content || "",
      };
      res.json(newSystemMessage);
    } else {
      // send error
      res.status(500).send("No response from OpenAI");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send("Error processing request.");
  }
}
