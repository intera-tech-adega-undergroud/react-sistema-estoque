import { useState } from "react";
import "./Buscar.css";

function Buscar({ placeholder = "Buscar...", onSearch }) {
  const [texto, setTexto] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setTexto(value);
    onSearch(value);
  }

  return (
    <input
      type="text"
      value={texto}
      onChange={handleChange}
      placeholder={placeholder}
      className="buscar-input"
    />
  );
}

export default Buscar;