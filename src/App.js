import DisplayPanel from "./dictionary-components/displayPanel/DisplayPanel";
//import PoemTitles from "./poetry-components/poemTitles/PoemTitles";
import "./App.css";
import DisplayPanelPoetry from "./poetry-components/displayPanel-poetry/DisplayPanelPoetry";
//import DisplayHangmanWord from "./DisplayHangmanWord";

function App() {    

    return (
        <div className="app">            
            <h1 className="app-heading">Lisa's Variety Page</h1>
            {/* <DisplayHangmanWord /> */}
            <DisplayPanel />
            <DisplayPanelPoetry />
            <footer>Courtesy of Merriam-Webster Dictionary API 🧡 &#x26; thundercomb/poetrydb</footer>
        </div>
    );
}

export default App;