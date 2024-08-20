// server.js

import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { chat } from './chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// API endpoint to handle chat requests
app.post('/chat', async (req, res) => {
    const { input } = req.body;
    try {
        const response = await chat(input);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get response' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// const userInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
    
// async function main() {
//     userInterface.prompt();
//     userInterface.on("line", async input => {
//         const chatCompletion = await openai.chat.completions.create({
//             messages: [
//                 { role: 'system', content: systemPromptPaper },
//                 { role: 'user', content: userPromptPaper }], // content should be from input
//             model: 'gpt-3.5-turbo',
//         });
//         console.log(chatCompletion.choices[0].message.content); // gpt response
//         userInterface.close();
//     })
// }

// main();
