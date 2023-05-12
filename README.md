# AI SQL Generator

This is a web application that converts natural language into SQL queries using OpenAI's GPT-3.

## Features

-   Convert natural language descriptions into SQL queries.
-   Easy to use: just type your description and click the button to generate a query.

## Tech Stack

-   Frontend: React.js
-   Backend: Express.js, OpenAI's GPT-3

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

-   [NodeJS](https://nodejs.org/en/download/)
-   [npm](https://www.npmjs.com/get-npm)

### Steps

1. Clone the repository from a terminal `git clone https://github.com/maura1/openai-sql-generator`.
2. Navigate into the cloned repository directory `cd ai-sql-generator`.
3. Install the project dependencies by running `npm install`.
4. Start the application by running `npm start`.
5. The application should start on `http://localhost:300`.

## API Keys

This application requires an API key from OpenAI. If you don't already have one, you can create an account on the [OpenAI website](https://beta.openai.com/signup/).

Once you have your API key:

1. Create a new file at the root of the project named `.env`.
2. Add the following line to the `.env` file, replacing `your_openai_api_key_here` with your actual API key:

```env
OPENAI_API_KEY=your_openai_api_key_here

## Usage

1. Enter a description of the SQL query you want to generate in the input field.
2. Click the 'Generate Query' button.
3. The generated SQL query will be displayed below the button.

## Note

This project is intended for educational and demonstration purposes. It should not be used for generating SQL queries in a production environment without proper sanitization and validation.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
```
