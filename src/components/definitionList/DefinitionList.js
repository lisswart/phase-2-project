import React from 'react';
import "./DefinitionList.css";
import Stems from "../stems/Stems";
import ShortDef from '../shortDefinitions/ShortDef';

function DefinitionList({ wordObject }) {
    
    return (
        <li className="definition-list" key={wordObject.meta.uuid}>
            { (wordObject.shortdef).length !== 0 ?
                <div>
                    id: {wordObject.meta.id}<br></br>
                    headword: {wordObject.hwi.hw}<br></br>
                    functional label: {wordObject.fl}<br></br>
                    <strong>stems: </strong><Stems wordObject={wordObject} />
                    <i>short definition</i>: <ShortDef wordObject={wordObject} />
                </div> :
                <div className="not-available">
                    id: {wordObject.meta.id}<br></br>
                    headword: {wordObject.hwi.hw}<br></br>
                    stems: <Stems wordObject={wordObject} />
                    short definition not available
                </div>
            }
        </li>
    );
}

export default DefinitionList;
