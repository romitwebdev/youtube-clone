import React from "react";
import Home from "./components/comp/Home";
import ContextProvider from "./ContextProvider";

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <Home />
            </ContextProvider>
        </div>
    );
}

export default App;
