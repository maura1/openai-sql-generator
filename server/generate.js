import openaiClient from './api.js';

const generate = async (queryDescription) => {
    const daVinci = async (queryDescription) => {
        const response = await openaiClient.createCompletion({
            model: 'text-davinci-003',
            prompt: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`,
            max_tokens: 100,
            temperature: 0
        });
        return response.data.choices[0].text;
    };
    const chatGPT = async (queryDescription) => {
        const message = [
            {
                role: 'system',
                content: `You are a translator from plain English to SQL.`
            },
            {
                role: 'user',
                content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`
            }
        ];
        try {
            const response = await openaiClient.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: message
            });

            return response.data.choices[0].message.content;
        } catch (error) {
            console.error(error);
            throw error; // propagate the error up to the calling function
        }
    };

    try {
        const sqlQuery = await chatGPT(queryDescription);
        return sqlQuery;
    } catch (error) {
        console.error(error);
        throw error; // propagate the error up to the calling function
    }
};

export default generate;
