import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye } from 'lucide-react';
import logo from '../assets/logo.png';
import './Login.css'; // Certifique-se de que o CSS está na mesma pasta

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de pegar os dados dos inputs se desejar
    onLogin();
    navigate('/produtos', { replace: true });
  };

  return (
    <div className="login-container">
      <div className="bg-glow"></div>
      
      <div className="login-card">
        {/* Lado Esquerdo - Branding */}
        <div className="branding-section">
          <div className="logo-glow"></div>
          <img
            src={logo}
            alt="Adega Underground"
            style={{ width: '200px', height: '200px', objectFit: 'contain', position: 'relative', zIndex: 1, marginBottom: '-8px', alignSelf: 'center' }}
          />
          <h1>Adega <span>Underground</span></h1>
          <p>Controle total da sua adega, simples e eficiente.</p>
        </div>

        {/* Lado Direito - Formulário */}
        <div className="form-section">
          <div className="top-line-glow"></div>
          <h2>Entrar</h2>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>E-mail</label>
              <div className="relative-input">
                <Mail className="input-icon" size={20} />
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>
            </div>

            <div className="input-group">
              <label>Senha</label>
              <div className="relative-input">
                <Lock className="input-icon" size={20} />
                <input 
                  type="password" 
                  placeholder="*******" 
                  required 
                />
                <button type="button" className="eye-button">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Lembrar de mim</span>
              </label>
              <a href="#" className="forgot-password">Esqueci minha senha</a>
            </div>

            <button type="submit" className="btn-submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
