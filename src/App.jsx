import { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './paginas/Login'
import EmployeesPage from './paginas/Colaboradores'
import ProductsPage from './paginas/Produtos'
import CreditRecordPage from './paginas/RegistroFiado'
import SystemLayout from './componentes/NavBar'
import ProtectedRoute from './routes/ProtectedRoute'
import TopBar from './componentes/TopBar'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
  setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }



  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/produtos" replace />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }
      />
      

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route element={
          <SystemLayout 
            onLogout={handleLogout}  
          />
        }>
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/colaboradores" element={<EmployeesPage />} />
          <Route path="/registrofiado" element={<CreditRecordPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

    <TopBar/>
    </>
  )
}

export default App
