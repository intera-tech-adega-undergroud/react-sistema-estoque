import { useState } from "react";
import "./RegistroFiado.css";

function CreditRecordPage() {
  const [status, setStatus] = useState("Em Aberto");
  const [data, setData] = useState("");

  return (
    <>

      <main className="conteudo">
        <h1 className="titulo">Registro Fiado</h1>

        <div className="filtros">

          
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
            <span>Período :</span>
            <p>01/04/2026</p>
            <span>-</span>
            <p>20/04/2027 </p>
            
          </div>

          <div className="valorAberto">
            <p className="totalAberto">Total em Aberto</p>
            <div className="valor">
              <span>R$</span>
              <p>00,00</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default CreditRecordPage;