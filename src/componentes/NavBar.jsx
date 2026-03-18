import { Link, Outlet } from 'react-router-dom'

function SystemLayout({ onLogout }) {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>Sistema</h2>
        <nav className="sidebar-nav">
          <Link to="/produtos">Produtos</Link>
          <Link to="/colaboradores">Cadastro de colaboradores</Link>
        </nav>
        <button type="button" onClick={onLogout}>
          Sair
        </button>
      </aside>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default SystemLayout
