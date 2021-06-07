import { useState, useEffect } from 'react';
import SearchBar from "../searchBar/SearchBar";
import DefinitionCard from "../definitionCard/DefinitionCard";
import "./DisplayPanel.css";

function DisplayPanel() {
    const [searchResults, setSearchResults] = useState([]);// store the state of search results
    const [query, setQuery] = useState("");// store the state of user input query

    const LEARNER_DICTIONARY_API_KEY = "3248df3e-261a-4346-bf3d-e4d8e4480e1e";
    const LEARNER_DICTIONARY_BASE_URL = "https://www.dictionaryapi.com/api/v3/references/learners/json/";
    
    useEffect( () => {
        fetch(`${LEARNER_DICTIONARY_BASE_URL}${query || "mere"}?key=${LEARNER_DICTIONARY_API_KEY}`)
            .then(r => r.json())
            .then((wordData) => {
                setSearchResults(wordData);
                console.log(wordData);
            });// update search results based on user input query, 
                                                            // i.e., setting the state of search results after every data fetch,
                                                            // whenever we update the state, React calls our component
                                                            // each render "sees" its own 'searchResults' value,
                                                            // which is a constant inside our function
     }, [query] );// dependency:  fetch every time query is changed, the hook depends on the data referenced by query
    
    return (
        <div className="display-panel">
            <SearchBar onSubmitQuery={setQuery} /> {/** pass the callback fn, that will update the user input query here, as a prop to the SearchBar component */}
            <DefinitionCard searchResults={searchResults} />
        </div>
    );
}

export default DisplayPanel;