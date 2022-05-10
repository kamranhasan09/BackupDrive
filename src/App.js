import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import "./index.css";
import Data from "./Data";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
        <Data></Data>
      </div>
    </>
  );
}

export default App;
