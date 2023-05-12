import styles from './index.module.css';
import sqlServer from './assets/sql-logo.png';
import { useState } from 'react';
import { generateQuery } from './utilities/Api';

export default function App() {
    const [userPrompt, setUserPrompt] = useState('');
    const [sqlQuery, setSqlQuery] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setUserInput(userPrompt);
        setUserPrompt('');
        const query = await generateQuery(userPrompt);
        setSqlQuery(query);
        setIsLoading(false);
    };

    return (
        <main className={styles.main}>
            <img src={sqlServer} className={styles.icon} alt="SQL server" />
            <h3>Generate SQL with AI</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor="query-description">Query</label>
                <input
                    type="text"
                    id="query-description"
                    name="query-description"
                    placeholder="Describe your query"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                />
                <input
                    type="submit"
                    value={isLoading ? 'Generating...' : 'Generate query'}
                    disabled={isLoading || !userPrompt} // Button is disabled when isLoading is true or userPrompt is empty
                />
            </form>
            <p>
                Your query description: <span>{userInput}</span>
            </p>
            <pre> {sqlQuery}</pre>
        </main>
    );
}
