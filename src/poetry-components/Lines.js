import React from 'react';
import { v4 as uuidv4 } from "uuid";

function Lines({ lines }) {
    
    return (
        <div>
            {lines.map(line => (
                <p>{line}</p>
            ))} 
        </div>
    );
}

export default Lines;
