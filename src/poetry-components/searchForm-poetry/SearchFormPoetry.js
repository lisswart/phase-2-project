import { useState } from 'react';
import "./SearchFormPoetry.css";

function SearchFormPoetry({ onLinesQuery, onPoemCountQuery }) {
    const [inputLines, setInputLines] = useState("");
    const [poemCount, setPoemCount] = useState("");

    let form = document.querySelector("form");


    function handleSubmit(event) {
        event.preventDefault();
        onLinesQuery(inputLines);
        onPoemCountQuery(poemCount);
    }

    function handleChangeLines(event) {
        setInputLines(event.target.value);        
    }

    function handleChangePoemCount(event) {
        setPoemCount(event.target.value);
    }

    return (
        <div className="poetry-search">
            <form onSubmit={handleSubmit}>
                <label id="title-label" style={{color: 'cornsilk'}}>Enter words: </label>
                <input type="text" onChange={handleChangeLines} value={inputLines} name="lines" /><br></br>
                <label id="poem-count-label" style={{color: 'cornsilk'}}>Enter # of titles to display: </label>
                <input type="text" onChange={handleChangePoemCount} value={poemCount} name="poemCount" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SearchFormPoetry;
