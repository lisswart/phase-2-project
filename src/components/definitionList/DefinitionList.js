import React from 'react';
import "./DefinitionList.css";
import Stems from "../stems/Stems";
import ShortDef from '../shortDefinitions/ShortDef';

function DefinitionList({ wordObject }) {
    
    return (
        <div key={wordObject.meta.uuid}>
            { (wordObject.shortdef).length !== 0 ?
                <div className="definition-div" >
                    <strong>id: </strong>{wordObject.meta.id}<br></br>
                    <strong>headword: </strong>{wordObject.hwi.hw}<br></br>
                    <strong>functional label: </strong>{wordObject.fl}<br></br>
                    <strong>stems: </strong><Stems wordObject={wordObject} />
                    <i><strong>short definition</strong></i>: <ShortDef wordObject={wordObject} />
                </div> :
                <div className="not-available definition-div">
                    id: {wordObject.meta.id}<br></br>
                    headword: {wordObject.hwi.hw}<br></br>
                    stems: <Stems wordObject={wordObject} />
                    short definition not available
                </div>
            }
        </div>
    );
}

export default DefinitionList;
