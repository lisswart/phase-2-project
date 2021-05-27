import React from 'react';
import "./PoemTitles.css";
import Lines from "./Lines";

function PoemTitles() {
    const [titles, setTitles] = React.useState([]);
    const POETRY_DB_BASE_URL = "https://poetrydb.org/author/Edgar Allan Poe";

    React.useEffect( () => {
        fetch(`${POETRY_DB_BASE_URL}`).then(r => r.json()).then(titleObjects => {
            console.log(titleObjects);
            setTitles(titleObjects);
            
        });
    }, []);

    //const lines = titles.map(title => title.lines);

    return (
        <ol className="poem-titles">
                {titles.map(title => (
                    <li key={title}>
                        <h3>{title.title}</h3>
                        <h5>{title.author}</h5>
                        <Lines lines={title.lines} />
                    </li>
                ))}
            </ol>
    )
}

export default PoemTitles;

