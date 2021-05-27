import DisplayPanel from "./components/displayPanel/DisplayPanel";

function App() {    

    return (
        <div className="app">            
            <h1 className="app-heading">Learner's Dictionary</h1>
            <DisplayPanel />
            <footer>Courtesy of Merriam-Webster Dictionary API 🧡</footer>
        </div>
    );
}

export default App;