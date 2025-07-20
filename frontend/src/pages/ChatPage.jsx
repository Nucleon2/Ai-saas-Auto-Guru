import { useState } from 'react';
import Header from '../components/Header';
import { streamChat } from '../utils/chatStream';
import ReactMarkdown from 'react-markdown';

const ChatPage = () => {
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    setAnswer(""); // Reset answer
    await streamChat("How does an engine work?", token => {
      setAnswer(prev => prev + token); // Just append each token
    });
  };

  return (
    <div>
      <Header />
      {/* <button className='mt-40 text-2xl' onClick={handleAsk}>click</button>
      <p className="whitespace-pre-wrap normal-case px-4"><ReactMarkdown>{answer}</ReactMarkdown></p> */}
      
    </div>
  );
};

export default ChatPage;
