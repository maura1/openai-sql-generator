import express from 'express';
import cors from 'cors';
import generate from './generate.js';

const app = express();

app.use(
    cors({
        origin: '*'
    })
);
app.use(express.json());

const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.send('Hello World!, from our API');
});

app.post('/generate', async (req, res) => {
    const queryDescription = req.body.queryDescription;
    if (typeof queryDescription !== 'string') {
        return res
            .status(400)
            .send('Bad Request: queryDescription must be a string');
    }

    try {
        const sqlQuery = await generate(queryDescription);
        res.json({ response: sqlQuery });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
