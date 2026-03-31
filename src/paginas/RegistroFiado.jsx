import { useState } from "react";
import TopBar from "../componentes/TopBar";
import "./RegistroFiado.css";

function CreditRecordPage() {
  const [status, setStatus] = useState("Em Aberto");
  const [data, setData] = useState("");

  return (
    <>
      <TopBar />

      <main className="conteudo">
        <h1 className="titulo">Registro Fiado</h1>

        <div className="filtros">

          {/* Status */}
          <div className="statusFiado">
            {["Em Aberto", "Pagos", "Todos"].map((item) => (
              <button
                key={item}
                className={status === item ? "active" : ""}
                onClick={() => setStatus(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Data */}
          <div className="filtroData">
            <span>Período</span>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

        </div>
      </main>
    </>
  );
}

export default CreditRecordPage;