import React, { Component } from "react";
import logo from "./logo.svg";
import inforgrafia from "./images/imagen.png";
import imagenGatito from "./images/gatito.jpg";
import "./App.css";

class App extends Component {
  render() {
    const gatitos = [
      { titulo: "Gato 1" },
      { titulo: "Gato 2" },
      { titulo: "Gato 3" }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">hola estoy aprendiendo front</p>

        {gatitos.map(gato => (
          <div className="publicacion">
            <img style={{ width: "100%" }} src={imagenGatito} />
            <div>
              <h2>{gato.titulo}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
