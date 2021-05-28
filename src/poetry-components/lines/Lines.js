import React from 'react';
import "./Lines.css";
import { v4 as uuidv4 } from "uuid";

function Lines({ lines, title }) {
    
    return (
        <div key={title}>
            {lines.map((line) => (
                line === ""?
                <br key={uuidv4()}></br> :
                <p key={uuidv4()} className="lines">{line}</p>
            ))} 
        </div>
    );
}

export default Lines;
