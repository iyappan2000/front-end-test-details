import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
    </div>
  );
}

export default App;
