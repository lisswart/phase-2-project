import { useState } from 'react';
import "./SearchBar.css";

function SearchBar({ onSubmitQuery }) {
    const [inputs, setInputs] = useState("");// store data that's entered into the input element
                                             // inputs state is updated with every keystroke
                                             // but since input state and query state are decoupled
                                             // fetch will not fire with every keystroke
    
    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(inputs);// when onSubmitQuery is invoked, setQuery is invoked
                              // so input string is passed as an argument to setQuery
                              // which updates the state of the query
                              // and since query is specified in the dependency list of
                              // the anonymous function inside our useEffect hook,
                              // every time query changes, the imperatives, inside the anonymous function
                              // inside our useEffect hook, fire.  In this case, fetch is activated
                              // which in turn, update the state of searchResults, which in turn
                              // calls our React component DisplayPanel to re-render with the latest searchResult.
    }

    function handleChange(event) {
        setInputs(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <div><label style={{color: "cornsilk"}}>Enter search word: </label></div>
                <input type="text" onChange={handleChange} value={inputs} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SearchBar;