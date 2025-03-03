import React from 'react';
import '../hoja-de-estilos/Tareas.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );    
}

export default Tarea;


// import React from 'react';
// import '../hoja-de-estilos/tareas.css'
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// function Tarea ( {texto,completada}){

//     return (
//       <div className= {completada  ? 'tarea-contenedor completada' : 'tarea-contenedor' }> 
//         <div className='tarea-texto' >
//           {texto}
//         </div>
//         <div className='tarea-contenedor-iconos'   >
//        < AiOutlineCloseCircle className='tarea-icono'/>
//         </div>

//       </div>

//     );
// }

// export default Tarea;