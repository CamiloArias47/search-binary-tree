import { useEffect } from 'react'
import './App.css'
import useTree from '../src/hooks/useTree'
function App() {

  const { test } = useTree()

  useEffect( () => {
    test()
  },[])

  return (
    <>
      <h1>Árboles binarios de búsqueda 🎄</h1>
      <form>
        <input type='number' placeholder='número' required></input>
        <button>Insertar ➕</button>
        <button>Buscar 🔍</button>
        <button>Eliminar 🗑</button>
      </form>
      <canvas width="800" height="400" ></canvas>
      by Camilo Arias and Javier Escobar
    </>
  )
}

export default App
