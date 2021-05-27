import DefinitionList from "../definitionList/DefinitionList";
import "./DefinitionCard.css";

function DefinitionCard({ searchResults }) {
    console.log(searchResults);
    return (
        <ul className="definition-card">{/** searchResults reference an array of response objects */}
            {searchResults 
                .map((wordObject) => (
                    <DefinitionList 
                    key={wordObject.meta.uuid} 
                    wordObject={wordObject} />
                ))
            } {/** extract desired string endpoints inside each iteration of the Array.map method */}
        </ul>
    );
}

export default DefinitionCard;