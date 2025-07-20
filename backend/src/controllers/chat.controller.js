import 'dotenv/config';
import OpenAI from 'openai';
import { AUTO_GURU_SYSTEM_PROMPT } from '../utils/systemPropt.js';

const apiKey = process.env.DEEPSEEK_API_KEY;

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: apiKey,
});

let messages = [{ role: 'system', content: AUTO_GURU_SYSTEM_PROMPT }];

export const chat = async (req, res) => {
  const userInput = req.body.message;
  messages.push({ role: 'user', content: userInput });

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const stream = await openai.chat.completions.create({
    messages,
    model: 'deepseek-chat',
    stream: true,
  });

  const assistant = { role: 'assistant', content: '' };

  try {
    for await (const chunk of stream) {
  const token = chunk.choices?.[0]?.delta?.content;
  if (!token) continue;
  console.log('[Token]', JSON.stringify(token));
  res.write(`data:${JSON.stringify(token)}\n\n`);   // <-- no space, JSON encoded
}
res.write('event: done\ndata: "[DONE]"\n\n');

  } catch (err) {
    console.error('Streaming error:', err);
  } finally {
    res.write('event: done\ndata: [DONE]\n\n');
    res.end();

    // ✅ Add assistant message to history
    messages.push(assistant);
  }
};
