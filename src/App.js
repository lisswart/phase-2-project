import DisplayPanel from "./dictionary-components/displayPanel/DisplayPanel";
import PoemTitles from "./poetry-components/PoemTitles";

function App() {    

    return (
        <div className="app">            
            <h1 className="app-heading">Learner's Dictionary</h1>
            <DisplayPanel />
            <PoemTitles />
            <footer>Courtesy of Merriam-Webster Dictionary API 🧡</footer>
        </div>
    );
}

export default App;