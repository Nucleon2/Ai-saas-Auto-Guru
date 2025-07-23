import { useState } from "react";
import Header from "../components/Header";
import { streamChat } from "../utils/chatStream";
import ReactMarkdown from "react-markdown";

const ChatPage = () => {
  const [answer, setAnswer] = useState("");
  const [userInput, setUserInput] = useState({
    message: "",
  });
  const [chatHistory, setChatHistory] = useState([]);

  const handleAsk = async () => {
  const prompt = userInput.message.trim();
  if (!prompt) return;

  setUserInput({ message: "" });

  let fullAnswer = "";

  await streamChat(prompt, (chunk) => {
    // 🔑 keep only the part we haven't seen yet
    const addition = chunk.startsWith(fullAnswer)
      ? chunk.slice(fullAnswer.length)
      : chunk;          // (fallback if chunking ever changes)

    fullAnswer += addition;

    // ❯ live‑update the last history entry (streaming)
    setChatHistory((prev) => {
      // first chunk → create the “pending” item
      if (!prev.length || prev[prev.length - 1].userInput !== prompt) {
        return [...prev, { userInput: prompt, aiOutput: fullAnswer }];
      }
      // later chunks → update the same item
      const updated = [...prev];
      updated[updated.length - 1].aiOutput = fullAnswer;
      return updated;
    });
  });
};


  function handleQuestionChange(e) {
    const { name, value } = e.target;
    console.log(name);

    setUserInput({ [name]: value });
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen justify-between">
        <div className=" mt-24">
          {/* {answer} */}
          {chatHistory.map((item, index) => (
            <div className="flex flex-col normal-case text-xl" key={index}>
              <p className="self-end m-4 bg-blue-900 p-2 rounded-2xl" >{item.userInput}</p>
              <div className="bg-blue-900 w-fit p-2 m-4 rounded-2xl" ><ReactMarkdown>{item.aiOutput}</ReactMarkdown></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="flex h-[50px] justify-center w-full text-[14px] text-white/60">
            <input
              className="input w-2/3 bg-[#09090b] text-[#f4f4f5] px-3 py-1
               rounded-l-lg border border-white/10 focus:outline-none focus:ring-2
                focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b]
                 transition-all duration-150 ease-in-out"
              type="text"
              required
              name="message"
              placeholder="Ask Anything"
              onChange={handleQuestionChange}
              value={userInput.message}
            />
            <button
              className="text-[#f4f4f5] px-3 py-1 rounded-r-lg border-y border-r
               border-r-white/10 border-y-white/10 hover:bg-zinc-800/40
                transition-all duration-150 easy-in-out"
              onClick={handleAsk}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
