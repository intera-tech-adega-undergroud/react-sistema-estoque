import { useNavigate } from 'react-router-dom'

function LoginPage({ onLogin }) {
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    onLogin()
    navigate('/produtos', { replace: true })
  }

  return (
    <main className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}

export default LoginPage
