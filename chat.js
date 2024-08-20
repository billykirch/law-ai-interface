// chat.js

import { systemPrompt, userPrompt, systemPromptPaper, userPromptPaper, calePrompt } from './prompts.js';
import { OpenAI } from "openai";
import { config } from "dotenv";
config();

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
  });
    
export async function chat(input) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: systemPromptPaper },
            { role: 'user', content: input }], // content should be from user input
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion.choices[0].message.content; // gpt response
}