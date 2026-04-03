import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye } from 'lucide-react';
import logo from '../assets/logo.png';
import './Login.css';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  // 1. ESTADOS: Aqui nós guardamos o que o usuário digita nos inputs
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroMensagem, setErroMensagem] = useState(''); // Para exibir erro na tela se a senha estiver errada

  const handleLogin = async (event) => {
    event.preventDefault();
    setErroMensagem(''); // Limpa mensagens de erro antigas

    // 2. PACOTE DE DADOS: Montamos o JSON com os nomes exatos que o Java espera
    const pacoteLogin = {
      email: email,
      senhaCripto: senha
    };

    try {
      // 3. COMUNICAÇÃO: O React bate na porta do Spring Boot
      const resposta = await fetch('http://localhost:8080/funcionarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pacoteLogin)
      });

      // 4. TRATANDO A RESPOSTA: O Java disse "sim" ou "não"?
      if (resposta.ok) {
        // Pega o token gigante que o Java enviou
        const tokenJWT = await resposta.text();

        // Guarda na mochila do navegador!
        localStorage.setItem('tokenAdega', tokenJWT);
        
        onLogin();
        navigate('/produtos', { replace: true });
      } else {
        // Falha! Status 401 (E-mail ou senha errados)
        const textoErro = await resposta.text();
        setErroMensagem(textoErro || 'E-mail ou senha incorretos!');
      }
    } catch (error) {
      // Se cair aqui, é porque o Spring Boot está desligado
      setErroMensagem('Erro de conexão com o servidor. O Back-end está rodando?');
    }
  };

  return (
    <div className="login-container">
      <div className="bg-glow"></div>
      
      <div className="login-card">
        <img src={logo} alt="Adega Underground" className="card-logo" />
        
        <div className="branding-section">
          <h1>Adega <span>Underground</span></h1>
          <p>Controle total da sua adega, simples e eficiente.</p>
        </div>

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
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} /* Atualiza o estado do email */
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
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)} /* Atualiza o estado da senha */
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

            {/* Mostra o erro em vermelho se algo der errado */}
            {erroMensagem && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>{erroMensagem}</p>}

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