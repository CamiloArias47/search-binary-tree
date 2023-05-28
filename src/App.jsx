import { useEffect, useState } from 'react'
import './App.css'
import useTree from '../src/hooks/useTree'
import Subtree from '../src/components/Subtree';

function App() {
  const [treeRenders, setTreeRenders] = useState(0)
  const { tree, createDefaultTree, insert, getSubtree } = useTree()

  useEffect( () => {
    createDefaultTree()
    setTreeRenders(1)
  },[])

  const add = e => {
    e.preventDefault()
    const inputNum = document.getElementById('new_node')
    let num = inputNum.value
    if(num) {
      num = parseInt(num)
      insert(num)
    }
    inputNum.value = ''
    setTreeRenders(treeRenders + 1)
  }

  const draw = <Subtree tree={tree.current}/>

  return (
    <>
      <h1>Árboles binarios de búsqueda 🎄</h1>
      <form>
        <input id="new_node" type='number' placeholder='número' required></input>
        <button onClick={add}>Insertar ➕</button>
        <button>Buscar 🔍</button>
        <button>Eliminar 🗑</button>
      </form>
      {draw}
      by Camilo Arias and Javier Escobar
    </>
  )
}

export default App
