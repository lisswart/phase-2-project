import { useState, useEffect } from "react";

function DisplayHangmanWord() {
    const [words, setWords] = useState("drill");
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        fetch("https://hidden-harbor-11546.herokuapp.com/words")
            .then(r => r.json())
            .then(setWords);
    }, [time]);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 18e3);
        //return clearInterval(timerID);
    }, []);

    function selectWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    return (
        <div style={{color: "cornsilk", marginLeft: "2em"}}>
            {selectWord()}
        </div>
    );
}

export default DisplayHangmanWord;
