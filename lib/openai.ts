import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function generateAIChatResponse(messages: ChatMessage[], personalityPrompt?: string): Promise<string> {
  const systemMessage: ChatMessage = {
    role: 'system',
    content: personalityPrompt || 'You are a helpful cooking assistant. Provide accurate cooking advice and always prioritize food safety.',
  };
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [systemMessage, ...messages],
    temperature: 0.8,
    max_tokens: 1000,
  });
  return response.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
}

export async function parseRecipeFromText(text: string): Promise<any> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Extract recipe info and return JSON' },
      { role: 'user', content: text },
    ],
    temperature: 0.3,
  });
  return JSON.parse(response.choices[0]?.message?.content || '{}');
}
