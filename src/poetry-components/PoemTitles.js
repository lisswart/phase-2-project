import React from 'react';
import "./PoemTitles.css";
import Lines from "./Lines";

function PoemTitles() {
    const [titles, setTitles] = React.useState([]);
    const POETRY_DB_BASE_URL = "https://poetrydb.org/author/Shakespeare";

    React.useEffect( () => {
        fetch(`${POETRY_DB_BASE_URL}`).then(r => r.json()).then(titleObjects => {
            console.log(titleObjects);
            setTitles(titleObjects);            
        });
    }, []);

    return (
        <div>
            <h1 className="poetry-coll-heading">Poetry Collection</h1>
            <ol className="poem-titles">
                {titles.map(title => (
                    <li className="poem-container" key={title}>
                        <h2 className="title"><i>{title.title}</i></h2>
                        <h3 className="author">{title.author}</h3>
                        <Lines lines={title.lines} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PoemTitles;

