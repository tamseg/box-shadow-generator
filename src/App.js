import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BoxShadowGenerator from "./BoxShadowGenerator/BoxShadowGenerator";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-center mt-3 mainHeader">Box Shadow Generator</h1>
      <BoxShadowGenerator />
    </div>
  );
}

export default App;
