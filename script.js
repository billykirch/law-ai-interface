import { config } from "dotenv";
config();

import OpenAI from "openai";
import readline from "readline"
import { systemPrompt, userPrompt, systemPromptPaper, userPromptPaper } from './prompts.js';

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
async function main() {

    // const userInput = document.getElementById('userInput'); // for input value
    // const submitBtn = document.getElementById('submitBtn'); // for event listener

    userInterface.prompt();
    userInterface.on("line", async input => {
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: systemPromptPaper },
                { role: 'user', content: userPromptPaper }], // content should be from input
            model: 'gpt-3.5-turbo',
        });
        console.log(chatCompletion.choices[0].message.content); // gpt response
        userInterface.close();
    })

    // submitBtn.addEventListener('click', async() => {
    //     const userTopic = userInput.value.trim(); // get value from input box
    //     if (userTopic) { // openai request if user wrote something in prompt
    //         const chatCompletion = await openai.chat.completions.create({
    //             messages: [
    //                 { role: 'system', content: systemPromptPaper },
    //                 { role: 'user', content: userPromptPaper }], // content should be from input
    //             model: 'gpt-3.5-turbo',
    //         });
    //         console.log(chatCompletion.choices[0].message.content) // gpt response
        
    //     } else { // otherwise nothing
    //         console.log("Please sumbit your proposal")
    //     }
    // })
}

main();
