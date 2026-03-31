import { useState } from "react";
import "../paginas/Colaboradores.css";

function EmployeesPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleCpf = (e) => {
    let v = e.target.value.replace(/\D/g,'').slice(0,11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    e.target.value = v;
  };

  return (
    <section className="wrap">

      <div className="head">
        <div className="title">
          <h1>Cadastrar Novo Usuário</h1>
          <p>Crie o acesso de seu colaborador</p>
        </div>
      </div>

     
      <form className="card">
        <div className="grid">

         
          <div className="col">
            <p className="section-title">Dados do Usuário</p>

            <div className="row">
              <div>
                <label>Nome</label>
                <input placeholder="Ex: João" />
              </div>

              <div>
                <label>Sobrenome</label>
                <input placeholder="Ex: Souza" />
              </div>
            </div>

            <div className="row">
              <div>
                <label>CPF</label>
                <input placeholder="000.000.000-00" onChange={handleCpf} />
                <div className="hint">Somente números</div>
              </div>

              <div className="pwd">
                <label>Senha</label>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Crie uma senha forte"
                />
                <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </button>
                <div className="hint">Mínimo de 8 caracteres</div>
              </div>
            </div>

            <div className="row one">
              <div>
                <label>Turno</label>
                <select>
                  <option>Selecione</option>
                  <option>Manhã</option>
                  <option>Tarde</option>
                  <option>Noite</option>
                </select>
              </div>
            </div>
          </div>

         
          <div className="col">
            <p className="section-title">Permissões de Ações</p>

            <div className="perm-top">
              <div className="pill">
                <label>Perfil Rápido</label>
                <select className="quick">
                  <option>Selecione um Perfil</option>
                  <option>Admin</option>
                  <option>Gerente</option>
                  <option>Atendente</option>
                </select>
              </div>

              <button type="button" className="btn-link">
                Selecionar Tudo
              </button>
            </div>

            <div className="perm-grid">

              
              <fieldset>

                <legend>Usuários & Acessos</legend>

                <label className="check"><input type="checkbox" /><span>Visualizar Usuários</span></label>
                <label className="check"><input type="checkbox" /><span>Cadastrar Usuários</span></label>
                <label className="check"><input type="checkbox" /><span>Editar Usuários</span></label>
                <label className="check"><input type="checkbox" /><span>Desativar/Ativar Usuários</span></label>
                <label className="check"><input type="checkbox" /><span>Redefinir Senha</span></label>

              </fieldset>

              
              <fieldset>

                <legend>Produtos</legend>

                <label className="check"><input type="checkbox" /><span>Visualizar Produtos</span></label>
                <label className="check"><input type="checkbox" /><span>Cadastrar Produtos</span></label>
                <label className="check"><input type="checkbox" /><span>Inativar/Excluir Produtos</span></label>

              </fieldset>

             
              <fieldset>

                <legend>Estoque</legend>

                <label className="check"><input type="checkbox" /><span>Visualizar Estoque</span></label>
                <label className="check"><input type="checkbox" /><span>Entrada/Recebimento</span></label>
                <label className="check"><input type="checkbox" /><span>Ajuste Manual</span></label>
                <label className="check"><input type="checkbox" /><span>Perdas/Quebras</span></label>
                <label className="check"><input type="checkbox" /><span>Histórico de Movimentações</span></label>

              </fieldset>

              
              <fieldset>

                <legend>Vendas/PDV</legend>

                <label className="check"><input type="checkbox" /><span>Registrar Venda</span></label>
                <label className="check"><input type="checkbox" /><span>Aplicar Desconto</span></label>
                <label className="check"><input type="checkbox" /><span>Cancelar Venda</span></label>
                <label className="check"><input type="checkbox" /><span>Histórico de Vendas</span></label>

              </fieldset>

            </div>
          </div>
        </div>

        
        <div className="foot">
          <div className="hint">Dados sensíveis protegidos</div>

          <div className="actions">
            <button type="button" className="btn">Cancelar</button>
            <button type="submit" className="btn primary">Salvar usuário</button>
          </div>
        </div>

      </form>
    </section>
  );
}

export default EmployeesPage;