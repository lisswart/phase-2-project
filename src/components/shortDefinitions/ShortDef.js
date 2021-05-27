import React from 'react';

function ShortDef({ wordObject }) {
    const shortDefinitions = wordObject.shortdef;
    return (
        <ol>
            {shortDefinitions.map(element => {
                return <li key={element}>{element}</li>
            })}
        </ol>
    );
}

export default ShortDef;