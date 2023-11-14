import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import clsx from "clsx";
import { useRouter } from "next/router";

const systemPrompt = `
1. You are a gentle AI museum curator at 쉐마미술관(Schema Art Museum).
2). All your response should be very short and concise in less than 3 sentences.
3). You explain about 쉐마미술관(Schema Art Museum) as if an art curator were explaining to high school students. 
4). You provide concise, accurate, easily understandable information about the museum. 
5). DO NOT INCLUDE any numbered lists, bullet points, or enumeration in your response. 
6). If a user pronounces "쉐마미술관" spelling WRONGLY, you must still use correct "쉐마미술관" as pronouns in your response.
`;
const context = `[쉐마미술관(Schema Art Museum) 소개]
- 쉐마미술관은 그동안 대학 강단에서 30여 년간 교수로서의 길을 걸었던 서양화가 김재관 교수가 예술과 교육자로서의 열정과 지역 예술인들과 지역민들의 예술적 교감의 필요성을 인지하고, 고향 청주 근교에 2009년 6월 26일 설립한 사립미술관으로 충청북도 제2011-01호 제1종 미술관이며, 한국박물관협회, 한국과학창의재단, 교육과학기술부로부터 박물관 ․ 미술관 창체프로그램 우수 운영기관으로 선정되기도하였다.

- SCHEMA는 “격”, “짜임”, “계획” 이라는 의미로 기하학적 구성요소로 이루어진 김재관 교수의 작품과 그 맥을 같이하며, 미학적, 종교적 의미로서의 SCHEMA는 “하나님께 모든 것을 바친다.”는 의미와 ‘창조의 샘’이라는 의미를 함축하고 있습니다. 이는 미술관의 지역사회, 미술계에 봉사하고자 하는 열망으로 청주지역 뿐만 아니라 현대미술의 격(格)이 시대정신에 걸 맞는 창작 예술의 연구와 실천을 위한 공간이 되고자 합니다.

- 특히 우리 지역의 젊은 작가들에게 다양하고 새로운 현대미술의 정보를 제공하고 국내․외 현대미술의 창의적인 작품들로 구성된 기획전시를 통하여 지역 국제 교류센터로서의 역할을 하고자 합니다. 예술인뿐만 아니라 지역의 시민들에게 좋은 작품을 감상할 수 있는 기회를 제공하고자 합니다. 아동·청소년, 그 가족, 직장인, 신중년, 노인 등 다양한 연령을 위한 맞춤 문화예술교육과 어린이들을 위한 예술체험 교육을 통하여 상상력을 풍부하게하여 창의력을 배양시키게하고 지역사회와 함께 문화 공동체로서 프로젝트를 개발하고 실천함으로써 지역 문화예술을 선도하는 역할을 하고자 합니다.

- 쉐마미술관의 전시와 교육 운영현황(2009년~2022년)을 살펴보면 전시 총 144회 진행. 소장 작품전시 13회, 국제교류전 18회, 초대전 36회, 기획전시 77회가 진행되었으며 전시 참여 작가는 총 1,469명이 참여, 해외 작가는 202명 참여하였다. 2009년~2022년까지의 누적 관람객 수는 총 46,662명을 기록하고 있다. 문화예술교육 운영현황은 지금까지 총 35개의 문화예술교육프로그램을 진행하였고 문화소외계층 프로그램 12, 영유아 교육프로그램 8, 가족프로그램 9개, 어린이 프로그램 24개, 청소년 프로그램 7개, 성인 프로그램 7개의 프로그램으로 구성되었다. 지금까지 교육 누적 참여 명수는 5,123명이며 문화소외계층 765명, 영유아 2,630명, 가족프로그램 527명, 어린이(초등학생) 480명, 청소년 461명, 성인 260명이 현대미술 연계 창작, 표현 교육에 참여하여 문화예술공간으로 거듭나고 있다. 
향후 예술가뿐만 아니라 문화시민을 위한 문화예술교육, 어린이 예술체험교육 등 다양한 프로그램 개발과 독창적인 전시기획으로 내실을 다지고, 지역사회와 함께하는 사업을 추진하는 공공미술관으로서의 역할을 하고자 합니다.

[쉐마미술관 공간 구조]
- 야외공간: 주변 야산으로 둘러싸여 아늑하게 자리 잡은 쉐마미술관은 정문에서부터 미술관 현관에 이르기까지 약 80m 정도에 이르는 야외공간에 입체 또는 설치 작품을 보실 수 있는 공간입니다. 또한 쉐마미술관은 아름다운 경치를 자랑하며 사계절의 변화와 자연을 느낄 수 있는 공간입니다.

- 로비: 쉐마미술관의 로비는 약 20평의 공간으로 또 다른 전시공간으로도 사용 가능한 공간입니다.

- 대전시실: 쉐마미술관의 가장 큰 전시실인 대전시실은 약 40평의 공간으로 12.4×10.6m로 설계되어있습니다.

- 소전시실: 쉐마미술관의 두 번째 전시실인 소전시실은 약 10평의 공간으로 6.3×5.4m로 설계되어있습니다.

- 교육실: 쉐마미술관의 교육실은 약 13평의 공간으로 8×5.4m로 설계되어있습니다

[쉐마미술관 위치]
- 주소: 충북 청주시 청원구 내수읍 내수로 241번지
`;

const promptTemplate = `
${systemPrompt}\n\nUse the following context to provide an precise, very short answer in Korean:
<context>
${context}
</context>`;

export default function VoiceGPTButton({ isChatModalOpen }) {
  const router = useRouter();

  const defaultContextSchema = {
    role: "system",
    content: promptTemplate,
  };

  const { language, setLanguage } = useContext(LanguageContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([defaultContextSchema]);
  const [isVoiceSynthesis, setIsVoiceSynthesis] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef(null);
  const recordedChunks = useRef([]);
  const endOfMessagesRef = useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom every time messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const gptRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const gptResponse = await response.json();
      setLoading(false);
      if (gptResponse.content && gptResponse.content.length > 0) {
        setMessages((prevState) => [...prevState, gptResponse]);
        setIsVoiceSynthesis(true);
      } else {
        setError("No response returned from server.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updatemessages = (newMessage) => {
    const newMessageSchema = {
      role: "user",
      content: newMessage,
    };
    // console.log({ messages });
    setMessages((prevState) => [...prevState, newMessageSchema]);
  };

  // whisper request
  const whisperRequest = async (audioFile) => {
    console.log("AUDIO: ", audioFile);
    setError(null);
    setLoading(true);
    const formData = new FormData();
    formData.append("file", audioFile, "audio.wav");
    try {
      const response = await fetch("/api/whisper", {
        method: "POST",
        body: formData,
      });

      const { text, error } = await response.json();
      if (text && text?.trim().length > 10) {
        // console.log("response: ", response);
        updatemessages(text);
        setLoading(false);
      } else {
        console.log("ERROR: ", error.message);
        setLoading(false);
        setError(error.message);
      }
    } catch (error) {
      console.log({ error });
      setLoading(false);
      if (typeof error === "string") {
        setError(error);
      }
      if (error instanceof Error) {
        setError(error.message);
      }
      console.log("Error:", error);
    }
  };

  // MediaStream Recording API
  const startRecording = async () => {
    // Create a new Audio object and set its source to the location of your beep sound file
    const beep = new Audio("/audio/click.wav");

    // Play the beep sound
    await beep.play();

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    mediaRecorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.current.push(event.data);
      }
    };
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(recordedChunks.current, { type: "audio/wav" });
      whisperRequest(audioBlob);
      recordedChunks.current = [];
    };
    mediaRecorder.current.start();
    setIsRecording(true);
  };

  // const stopRecording = () => {
  //   if (mediaRecorder.current) {
  //     mediaRecorder.current.stop();
  //     setIsRecording(false);
  //   }
  // };
  // release the media stream to free up system resources
  const stopRecording = async () => {
    // Create a new Audio object and set its source to the location of your beep sound file
    const beep = new Audio("/audio/click.wav");

    // Play the beep sound
    await beep.play();
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      mediaRecorder.current.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  useEffect(() => {
    if (
      isVoiceSynthesis &&
      messages[messages.length - 1]?.role === "assistant"
    ) {
      if ("speechSynthesis" in window) {
        // Fetch all available voices
        const voices = window.speechSynthesis.getVoices();

        // Filter for only ko-KR voices
        const koVoices = voices.filter(
          (voice) =>
            voice.lang === "ko-KR" &&
            (voice.name.includes("SunHi") ||
              voice.name.includes("Yuna") ||
              voice.name.includes("유나"))
        );

        // Log the ko-KR voices to the console
        // console.log(koVoices);

        // Create a new instance of SpeechSynthesisUtterance
        const utterance = new window.SpeechSynthesisUtterance();
        utterance.text = messages[messages.length - 1]?.content; // Use the GPT response as the text to be spoken

        // Set the voice to the first ko-KR voice available (or any other voice you prefer)
        if (koVoices.length > 0) {
          utterance.voice = koVoices[0];
        }

        utterance.lang = "ko-KR";
        utterance.rate = 1.05;
        window.speechSynthesis.speak(utterance);
      } else {
        console.log("Your browser does not support speech synthesis.");
      }
      setIsVoiceSynthesis(false);
    }
  }, [isVoiceSynthesis]);

  useEffect(() => {
    if (messages) {
      console.log("MESSAGES: ", messages);
    }
  }, [messages]);

  useEffect(() => {
    const latestMessage = messages[messages.length - 1];

    if (
      messages.length > 1 &&
      latestMessage.role === "user" &&
      latestMessage.content.trim().length > 0 // Check if there's actual text
    ) {
      // Implement a threshold to determine if the text is likely to be valid
      const MINIMUM_TEXT_LENGTH = 10; // Set a minimum text length threshold
      if (latestMessage.content.trim().length >= MINIMUM_TEXT_LENGTH) {
        gptRequest();
      }
    }
  }, [messages]);

  useEffect(() => {
    setMessages([defaultContextSchema]);
  }, [router.pathname]);

  return (
    <div className="z-[999] flex justify-center items-center">
      <div
        className={clsx(
          "z-[999] animate-opacitySlow backdrop-blur-2xl border-2 border-white rounded-2xl mb-0 mr-3 py-3 pl-5 pr-3 absolute flex flex-col gap-3 justify-start items-start bottom-[200px] right-0 w-1/2 max-w-[500px] h-[250px] screen-w:max-w-[900px] screen-w:h-[500px] overflow-y-auto text-Ablack screen-w:text-3xl",
          (!isChatModalOpen || messages.length < 2) && "hidden"
        )}
      >
        {messages?.map((message, index) => {
          if (message.role === "system") return null;
          if (message.role === "assistant") {
            return <p key={index}>AI: {message.content}</p>;
          } else {
            return <p key={index}>방문자: {message.content}</p>;
          }
        })}
        {/* <p>AI: Hello</p>
        <p>User: What is your name?</p>
        <p>AI: I am a museum curator.</p>
        <p>User: What is fun facts about Museum?</p>
        <p>AI: Nothing.</p>
        <p>User: What is fun facts about Museum?</p>
        <p>
          User: What is fun facts about Museum? What is fun facts about Museum?
          What is fun facts about Museum? What is fun facts about Museum?
        </p>
        <p>User: What is fun facts about Museum?</p>
        <p>AI: Nothing.</p>
        <p>User: What is fun facts about Museum?</p>
        <p>
          User: What is fun facts about Museum? What is fun facts about Museum?
          What is fun facts about Museum? What is fun facts about Museum?
        </p>
        <p>AI: What is your question?</p> */}

        {/* Invisible element at the end of your messages */}
        <div ref={endOfMessagesRef} />
      </div>
      {!loading ? (
        <div>
          {!isRecording ? (
            <button
              className="ml-4 bg-white rounded-full px-2 py-0"
              onClick={startRecording}
            >
              <div className="flexjustify-center items-center gap-[0.3rem]">
                <div className="text-gray-700 p-2 gap-[0.3rem] flex justify-center items-center text-base screen-w:text-2xl whitespace-nowrap">
                  {language === "KOR" ? "AI음성안내" : "AI Voice Guide"}{" "}
                  <div className="bg-gray-100 rounded-full flex justify-center items-center">
                    <span className="text-white bg-blue rounded-full font-light text-2xs px-2 py-2 whitespace-nowrap">
                      {language === "KOR" ? "시작" : "Start"}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <button
              className="ml-4 bg-rose-600 rounded-full pl-2 pr-4 py-0"
              onClick={stopRecording}
            >
              <div className="flex justify-center items-center gap-[0.3rem]">
                <div className="bg-white rounded-full text-sm p-3 gap-[0.3rem] flex justify-center items-center whitespace-nowrap">
                  <span>
                    {language === "KOR"
                      ? "음성 녹음 후 종료하기"
                      : "End after voice recording"}
                  </span>
                  <div className="bg-gray-100 rounded-full flex justify-center items-center">
                    <span className="rounded-full text-white bg-red font-light text-2xs px-2 py-2 whitespace-nowrap">
                      {language === "KOR" ? "종료" : "End"}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          )}
        </div>
      ) : (
        <button className="ml-4 bg-indigo-700 rounded-full pl-2 pr-4 py-1">
          <div className="flex justify-center items-center gap-[0.3rem]">
            <span className="p-3 text-white text-base whitespace-nowrap">
              {language === "KOR"
                ? "인공지능이 답변 중..."
                : "AI is answering..."}
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
