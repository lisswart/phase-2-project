import DisplayPanel from "./dictionary-components/displayPanel/DisplayPanel";
import PoemTitles from "./poetry-components/PoemTitles";
import "./App.css";

function App() {    

    return (
        <div className="app">            
            <h1 className="app-heading">Lisa's Variety Page</h1>
            <DisplayPanel />
            <PoemTitles />
            <footer>Courtesy of Merriam-Webster Dictionary API 🧡 &#x26; thundercomb/poetrydb</footer>
        </div>
    );
}

export default App;