import { useState } from 'react';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChangeLines} value={inputLines} name="lines" />
                <input type="text" onChange={handleChangePoemCount} value={poemCount} name="poemCount" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SearchFormPoetry;
