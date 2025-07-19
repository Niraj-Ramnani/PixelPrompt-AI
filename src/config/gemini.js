import { GoogleGenAI } from '@google/genai';


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

async function main(prompt) {
  const ai = new GoogleGenAI({ apiKey });

  const tools = [{ googleSearch: {} }];

  const config = {
    thinkingConfig: { thinkingBudget: -1 },
    tools,
    generationConfig: {
      maxOutputTokens: 100,
      temperature: 0.5,
      topP: 1,
      topK: 40,
    },
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [{ text: `Answer concisely: ${prompt}` }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = '';

  for await (const chunk of response) {
    if (chunk.text) {
      fullText += chunk.text;
    }
  }

  console.log(fullText);
  return fullText;
}

export default main;
