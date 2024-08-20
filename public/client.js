// public/client.js

const userInput = document.getElementById('userInput'); // for input value
const submitBtn = document.getElementById('submitBtn'); // for event listener
const gptResponse = document.getElementById('gptResponse'); // paragraph element for response

submitBtn.addEventListener('click', async() => {
        const userText = userInput.value.trim(); // get value from input box (whtspace rmved)
        if (userText) {
            gptResponse.innerText = "Let me think..."; // Set placeholder text
            try {
                const response = await fetch('/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ input: userText })
                });
                const data = await response.json();
                // console.log(data.response); // gpt response
                gptResponse.innerText = data.response; // Set GPT response to paragraph
            } catch (error) {
                console.error("Error getting chat response:", error);
            }
        } else {
            console.log("Please submit your proposal");
            gptResponse.innerText = "Hmm...is there anything you'd like to discuss?"; // Set placeholder text
        }
    });