import { useState } from "react";
import styles from "../src/App.module.css";

import "./App.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Formulario</h1>
      <form className={styles.form}>
        <label className={styles.text}> Ingresa tu correo Electronico: </label>
        <input
          type="email"
          placeholder="tucorreo@Gmail.com"
          className={styles.input}
        ></input>
        <label className={styles.text}> Ingresa tu numero Celular: </label>
        <input
          type="text"
          placeholder="+57 310 1234567"
          className={styles.input}
        ></input>
        <button className={styles.submit} type="submit">
          Solicitar Cita
        </button>
      </form>
    </div>
  );
}
export default App;
