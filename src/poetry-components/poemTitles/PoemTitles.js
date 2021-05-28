import React from 'react';
import "./PoemTitles.css";
import Lines from "../lines/Lines";
import {v4 as uuidv4} from "uuid";

function PoemTitles() {
    const [titles, setTitles] = React.useState([]);
    const POETRY_DB_BASE_URL = "https://poetrydb.org/lines,poemcount/lightning;100/title,author,linecount";

    React.useEffect( () => {
        fetch(`${POETRY_DB_BASE_URL}`).then(r => r.json()).then(titleObjects => {
            setTitles(titleObjects);         
        });
    }, []);

    return (
        <div>
            <h1 className="poetry-coll-heading">Poetry Collection</h1>
            <ol className="poem-titles">
                {titles.map((title, index) => (
                    <li className={`poem-container ${title.title}`} key={index}>
                        <h2 className="title"><i>{title.title}</i></h2>
                        <h3 className="author">{title.author}</h3>
                        <p>linecount: {title.linecount}</p>
                        {/* <Lines key={uuidv4()} lines={title.linecount} title={title.title} /> */}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PoemTitles;

