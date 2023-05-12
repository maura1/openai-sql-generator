// api.js

const generateQuery = async (userPrompt) => {
    try {
        const response = await fetch('http://localhost:3005/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ queryDescription: userPrompt })
        });

        if (!response.ok) {
            throw new Error('Server Error');
        }

        const data = await response.json();
        return data.response.trim();
    } catch (error) {
        console.error(error);
        return 'An error occurred while generating the query.';
    }
};

export { generateQuery };
