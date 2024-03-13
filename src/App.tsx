import './App.css'
import MeuComponente from './componentes/MeuComponente'
function App() {

    let nome = "Gabriela"
    let sobrenome = "Silva Palma"
    return (
      <div>
        <MeuComponente/>
     <h1 className="nome">Nome: {nome}</h1>    
     <p className="sobrenome">{sobrenome}</p>    
      </div>

  )// Retorna JSX - JavaScript XML
}

export default App
