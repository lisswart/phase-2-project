import React from 'react';
import "./Lines.css";
//import { v4 as uuidv4 } from "uuid";

function Lines({ lines }) {
    
    return (
        <div>
            {lines.map(line => (
                line === ""?
                <br></br> :
                <p className="lines">{line}</p>
            ))} 
        </div>
    );
}

export default Lines;
