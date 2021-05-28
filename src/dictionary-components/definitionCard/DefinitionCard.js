import DefinitionList from "../definitionList/DefinitionList";
import "./DefinitionCard.css";

function DefinitionCard({ searchResults }) {
   
    return (
        <ol className="definition-card">{/** searchResults reference an array of response objects */}
            {searchResults 
                .map((wordObject) => (
                    <li className="definition-list" key={wordObject.meta.uuid}><DefinitionList 
                        className="definition-list"
                        key={wordObject.meta.id} 
                        wordObject={wordObject} 
                    /></li>
                ))
            } {/** extract desired string endpoints inside each iteration of the Array.map method */}
        </ol>
    );
}

export default DefinitionCard;