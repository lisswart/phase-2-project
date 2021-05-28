import { useState, useEffect } from "react";
import SearchFormPoetry from "../searchForm-poetry/SearchFormPoetry";
import PoemTitles from "../poemTitles/PoemTitles";
import "./DisplayPanelPoetry.css";

function DisplayPanelPoetry() {
    const [titles, setTitles] = useState([]);
    const [lines, setLines] = useState("");
    const [poemCount, setPoemCount] = useState("");

    const POETRY_DB_BASE_URL = `https://poetrydb.org/lines,poemcount/`;

    useEffect( () => {
        fetch(`${POETRY_DB_BASE_URL}${lines};${poemCount}/title,author,linecount`)
            .then(r => r.json())
            .then(titleObjects => {
                setTitles(titleObjects);
            });
    }, [lines, poemCount, POETRY_DB_BASE_URL]);

    function handleClick() {
        alert("click");
        return true;
    }
    
    return (
        <div className="display-poetry">
            <SearchFormPoetry onLinesQuery={setLines} onPoemCountQuery={setPoemCount} />
            <PoemTitles titles={titles} handleClick={handleClick} />
        </div>
    );
}

export default DisplayPanelPoetry;
