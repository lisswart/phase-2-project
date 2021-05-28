import React from 'react';
import "./Lines.css";
import { v4 as uuidv4 } from "uuid";

function Lines({ showLines }) {
    
    return (
        <div key={title}>
            {showLines.map((lines) => {
                <span><h2>{lines.title}</h2><h4>{lines.author}</h4></span>
                lines === ""?
                <br key={uuidv4()}></br> :
                <p key={uuidv4()} className="lines">{line}</p>
            })} 
        </div>
    );
}

export default Lines;
