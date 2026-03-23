import { NavLink, Outlet } from 'react-router-dom'
import iconProduto from "../assets/iconProdutos.svg";
import logo from '../assets/logoChapelAdega.svg';
import iconColaboradores from "../assets/iconColaboradores.svg";
import iconVendaFiada from "../assets/iconVendaFiada.svg"
import './NavBar.css'

function SystemLayout({ onLogout}) {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="tituloNav"><img className='logo' src={logo} alt="Logo de chapel de leprechaum" /> Adega Underground</h2>
        <nav className="sidebar-nav">
          <NavLink 
            className={({ isActive }) => isActive ? 'link active' : 'link'} 
            to="/produtos"
          > 
            <img src={iconProduto} alt="Ícone de Produto" /> Produtos
          </NavLink>

          <NavLink 
            className={({ isActive }) => isActive ? 'link active' : 'link'} 
            to="/registrofiado"
          >
            <img src={iconVendaFiada} alt="Ícone de Venda Fiada" /> Registro Fiado
          </NavLink>
          
          <hr />
          <br />
          
          <NavLink 
            className={({ isActive }) => isActive ? 'link active' : 'link'} 
            to="/colaboradores"
          >
            <img src={iconColaboradores} alt="Ícone de Colaboradores" /> Registro de novo colaborador
          </NavLink>
        </nav>
        <br/>
        <div className='botoes'>
            <button type="button" onClick={onLogout}>
              Sair
            </button>
        </div>
      

      </aside>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default SystemLayout
