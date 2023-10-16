import { useState } from "react";
import styles from "../src/App.module.css";

import "./App.css";

function App() {
  // const whatsapp = "https://api.whatsapp.com/send/";   por si vamos a colocar contactanos al wahtsapp
  const [input, setInput] = useState({ Email: "", Tlf: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:6000/ClientData`,
        input
      );

      if (response) {
        alert("Se enviaron tus datos de contacto");
      }
    } catch (error) {
      alert("Hubo un error ");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Solicitar</h1>
      <form className={styles.form}>
        <label className={styles.text}> Ingresa tu correo Electronico: </label>
        <input
          name="Email"
          onChange={handleChange}
          type="email"
          placeholder="tucorreo@Gmail.com"
          className={styles.input}
        ></input>
        <label className={styles.text}> Ingresa tu numero Celular: </label>
        <input
          name="Tlf"
          onChange={handleChange}
          type="text"
          placeholder="+57 310 1234567"
          className={styles.input}
        ></input>
        <button onClick={handleSubmit} className={styles.submit} type="submit">
          Solicitar Cita
        </button>
      </form>
    </div>
  );
}
export default App;
