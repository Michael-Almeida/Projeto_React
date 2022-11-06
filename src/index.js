import React, { Component } from "react";
import ReactDOM from "react-dom";

import Multi,{BoaNoite} from "./componentes/multiplos";

ReactDOM.render(
  <div>
    <Multi.BoaTarde nome="Michael" />
    <BoaNoite nome="Elisa" />
  </div>,
  document.getElementById("root")
);
