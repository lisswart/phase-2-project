import { useState, useEffect } from "react";

function DisplayHangmanWord() {
    const [words, setWords] = useState("drill");
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://hidden-harbor-11546.herokuapp.com/words")
            .then(r => r.json())
            .then(setWords);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 5e3);
    }, [count]);

    function selectWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    // const currentWord = useCallback(function() {
    //     selectWord(words); 
    // }, [words]);

    useEffect(() => {
        selectWord();
    }, [count, selectWord]);

    return (
        <div style={{color: "cornsilk", marginLeft: "2em"}}>
            {selectWord()}
        </div>
    );
}

export default DisplayHangmanWord;
