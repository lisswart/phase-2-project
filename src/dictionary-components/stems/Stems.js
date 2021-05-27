import React from 'react';

function Stems({ wordObject }) {
    const stems = wordObject.meta.stems;
    
    return (
        <ul>
            {stems.map(element => {
                return <li className={element} key={element}>{element}</li>
            })}
        </ul>
    );     
}

export default Stems;