import 'dotenv/config'
import OpenAI from "openai";

const apiKey = process.env.DEEPSEEK_API_KEY;

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: apiKey,
});

let messages = [];

export const chat = async (req, res) => {
   const userInput = req.body.message

   messages.push({ role: "user", content: userInput })

  const { choices } = await openai.chat.completions.create({
    messages: messages,
    model: "deepseek-chat",
  });

  messages.push(choices[0].message)


  console.log(messages);
  console.log(choices[0].message);
  res.json({
    message: choices[0].message.content
  })
};
