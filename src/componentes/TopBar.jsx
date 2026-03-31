import iconSino from '../assets/iconSino.svg'
import iconLupa from '../assets/iconLupa.svg'
import './TopBar.css'

function TopBar(nome, cargo) {

  const nome = "Junior Adm"
  const cargo = "Administrador"

  return (
    <>
      <header className="topBar">
        <div className="searchBox">
          <img src={iconLupa} alt="Buscar" />
          <input type="text" placeholder="Pesquisar..." />
        </div>
       
        <div className='infoUser'> 
          <img src={iconSino} alt="Sino" />

          <div className='perfil'>
            <h4>{nome}</h4>
            <p>{cargo}</p>
          </div>
        </div>
       
        
      </header>
    </> 
   
  )
}

export default TopBar