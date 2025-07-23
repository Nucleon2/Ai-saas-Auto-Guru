export async function streamChat(userMessage, onToken) {
  const resp = await fetch('http://localhost:5000/api/chat/Deepseek', {
    method: 'POST',
    body: JSON.stringify({ message: userMessage }),
    headers: { 'Content-Type': 'application/json' }
  });

  const reader = resp.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split('\n\n');
    buffer = chunks.pop();          // keep incomplete piece

    for (const chunk of chunks) {
      if (chunk.startsWith('data:')) {
        const data = chunk.slice(5); // no .trim()
        if (data === '"[DONE]"') return;
        onToken(JSON.parse(data));
      }
    }
  }
}
