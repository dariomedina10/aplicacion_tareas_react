import { useState } from 'react'
import logo from './imagenes/freecodecamp.png';
import './App.css'
import Tarea from './componentes/Tareas.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className='freecodecamp-logo' alt='logo' />
        </div> 
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <Tarea texto='Aprender React' />
          </div>  
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
