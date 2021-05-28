import { useState } from 'react';
import "./SearchFormPoetry.css";

function SearchFormPoetry({ onLinesQuery, onPoemCountQuery }) {
    const [inputLines, setInputLines] = useState("");
    const [poemCount, setPoemCount] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onLinesQuery(inputLines);
        onPoemCountQuery(poemCount);
    }

    function handleLinesChange(event) {
        setInputLines(event.target.value);        
    }

    function handlePoemCountChange(event) {
        setPoemCount(event.target.value);
    }

    return (
        <div className="poetry-search">
            <form onSubmit={handleSubmit}>
                <div><label id="title-label" style={{color: 'cornsilk'}}>Enter words: </label></div>
                <input type="text" onChange={handleLinesChange} value={inputLines} name="lines" required />
                <div><label id="poem-count-label" style={{color: 'cornsilk'}}>    Enter # of titles to display: </label></div>
                <input type="text" onChange={handlePoemCountChange} value={poemCount} name="poemCount" required />
                <button type="submit">Submit</button>
                
            </form>
        </div>
    );
}

export default SearchFormPoetry;
