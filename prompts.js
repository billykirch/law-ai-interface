export const systemPrompt = `
The user will give a legal argument which uses the United States Constitution in its justification.
In your output, write "Your argument:", then rewrite or paraphrase the user's argument.
Then, write "Constitutional basis:", and write which part of the Constitution the user is citing.
Finally, evaluate whether you think the argument is sound, given the user's Contitution citation and their argument. 
Make sure to explain why you think the user's argument is correct or incorrect.
Limit your evaluation to a maximum of 150 words.
`;

export const userPrompt = `
Because of the 2nd amendment, Jacob can face no retribution for saying he wants everyone to vote for a certain presidential candidate.
`;

export const systemPromptPaper = `
The user is going to give you a potential research topic for a paper that is set to be 2000 words,
written at an undergraduate level. The topic will be about some intersection between the law and technology.
Using your knowledge, you should look for these issues in proposed topics:
(1) The proposed topic has been written about extensively and already has a definite answer.
(2) The proposed topic is too broad to explore in depth in 2000 words or less.
(3) The proposed topic is unrelated to the intersection of law and digital technologies.
Explain to the user how their topic proposal is strong or weak, centering your explanation on the issue above.
If the proposal is weak, direct the user toward a topic which is related to their proposal, but may be more fruitful when it
comes to writing their 2000 word paper.
Limit your response to 200 words.
`

export const userPromptPaper = `
I want to explore how artificial intelligence is used during surgeries.
`