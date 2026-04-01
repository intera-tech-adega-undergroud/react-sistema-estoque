import { useState } from "react";
import "../paginas/Colaboradores.css";

function EmployeesPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [permissoes, setPermissoes] = useState([]);

  const todasPermissoes = [
    "usuarios_ver",
    "usuarios_criar",
    "usuarios_editar",
    "usuarios_desativar",
    "usuarios_reset",

    "produtos_ver",
    "produtos_criar",
    "produtos_excluir",

    "estoque_ver",
    "estoque_entrada",
    "estoque_ajuste",
    "estoque_perdas",
    "estoque_historico",

    "vendas_registrar",
    "vendas_desconto",
    "vendas_cancelar",
    "vendas_historico"
  ];

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setPermissoes([...permissoes, value]);
    } else {
      setPermissoes(permissoes.filter(p => p !== value));
    }
  };

  const selecionarTudo = () => {
    if (permissoes.length === todasPermissoes.length) {
      setPermissoes([]);
    } else {
      setPermissoes(todasPermissoes);
    }
  };


  const perfis = {
    admin: todasPermissoes,

    gerente: [
      "usuarios_ver",
      "usuarios_criar",
      "usuarios_editar",
      "usuarios_desativar",
      "usuarios_reset",

      "produtos_ver",
      "produtos_criar",
      "produtos_excluir",

      "estoque_ver",
      "estoque_entrada",
      "estoque_ajuste",
      "estoque_perdas",
      "estoque_historico",

      "vendas_registrar",
      "vendas_desconto",
      "vendas_cancelar",
      "vendas_historico"
    ],

    atendente: [
      "produtos_ver",
      "estoque_ver",

      "vendas_registrar",
      "vendas_desconto",
      "vendas_historico"
    ]
  };

  const handlePerfil = (e) => {
    const perfilSelecionado = e.target.value;

    if (perfilSelecionado === "") {
      setPermissoes([]);
      return;
    }

    if (perfis[perfilSelecionado]) {
      setPermissoes(perfis[perfilSelecionado]);
    }
  };

  const handleCpf = (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
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
                <select className="quick" onChange={handlePerfil}>
                  <option value="">Selecione um Perfil</option>
                  <option value="admin">Admin</option>
                  <option value="gerente">Gerente</option>
                  <option value="atendente">Atendente</option>
                </select>
              </div>

              <button type="button" className="btn-link" onClick={selecionarTudo}>
                {permissoes.length === todasPermissoes.length
                  ? "Desmarcar Tudo"
                  : "Selecionar Tudo"}
              </button>
            </div>

            <div className="perm-grid">


              <fieldset>

                <legend>Usuários & Acessos</legend>

                <label className="check">
                  <input type="checkbox" value="usuarios_ver" checked={permissoes.includes("usuarios_ver")} onChange={handleCheckbox} />
                  <span>Visualizar Usuários</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="usuarios_criar" checked={permissoes.includes("usuarios_criar")} onChange={handleCheckbox} />
                  <span>Cadastrar Usuários</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="usuarios_editar" checked={permissoes.includes("usuarios_editar")} onChange={handleCheckbox} />
                  <span>Editar Usuários</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="usuarios_desativar" checked={permissoes.includes("usuarios_desativar")} onChange={handleCheckbox} />
                  <span>Desativar/Ativar Usuários</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="usuarios_reset" checked={permissoes.includes("usuarios_reset")} onChange={handleCheckbox} />
                  <span>Redefinir Senha</span>
                </label>

              </fieldset>



              <fieldset>

                <legend>Produtos</legend>
                <label className="check">
                  <input type="checkbox" value="produtos_ver" checked={permissoes.includes("produtos_ver")} onChange={handleCheckbox} />
                  <span>Visualizar Produtos</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="produtos_criar" checked={permissoes.includes("produtos_criar")} onChange={handleCheckbox} />
                  <span>Cadastrar Produtos</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="produtos_excluir" checked={permissoes.includes("produtos_excluir")} onChange={handleCheckbox} />
                  <span>Inativar/Excluir Produtos</span>
                </label>

              </fieldset>


              <fieldset>

                <legend>Estoque</legend>

                <label className="check">
                  <input type="checkbox" value="estoque_ver" checked={permissoes.includes("estoque_ver")} onChange={handleCheckbox} />
                  <span>Visualizar Estoque</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="estoque_entrada" checked={permissoes.includes("estoque_entrada")} onChange={handleCheckbox} />
                  <span>Entrada/Recebimento</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="estoque_ajuste" checked={permissoes.includes("estoque_ajuste")} onChange={handleCheckbox} />
                  <span>Ajuste Manual</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="estoque_perdas" checked={permissoes.includes("estoque_perdas")} onChange={handleCheckbox} />
                  <span>Perdas/Quebras</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="estoque_historico" checked={permissoes.includes("estoque_historico")} onChange={handleCheckbox} />
                  <span>Histórico de Movimentações</span>
                </label>

              </fieldset>


              <fieldset>

                <legend>Vendas</legend>

                <label className="check">
                  <input type="checkbox" value="vendas_registrar" checked={permissoes.includes("vendas_registrar")} onChange={handleCheckbox} />
                  <span>Registrar Venda</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="vendas_desconto" checked={permissoes.includes("vendas_desconto")} onChange={handleCheckbox} />
                  <span>Aplicar Desconto</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="vendas_cancelar" checked={permissoes.includes("vendas_cancelar")} onChange={handleCheckbox} />
                  <span>Cancelar Venda</span>
                </label>

                <label className="check">
                  <input type="checkbox" value="vendas_historico" checked={permissoes.includes("vendas_historico")} onChange={handleCheckbox} />
                  <span>Histórico de Vendas</span>
                </label>

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