import { useEffect, useState, useRef } from 'react'
import './App.css'
import useTree from '../src/hooks/useTree'
import Subtree from '../src/components/subtree';

function App() {
  const [treeRenders, setTreeRenders] = useState(0)
  const usedFind = useRef(false)
  const { tree, createDefaultTree, insert, dell, find, clean} = useTree()

  useEffect( () => {
    createDefaultTree()
    setTreeRenders(1)
  },[])

  const getValue = () => {
    const inputNum = document.getElementById('new_node')
    let num = inputNum.value
    return num ? parseInt(num) : false
  }
  
  const cleanForm = () => {
    const inputNum = document.getElementById('new_node')
    inputNum.value = ''
  }

  const add = e => {
    e.preventDefault()
    const num = getValue()
    if(typeof num === 'number') insert(num)
    cleanForm()
    setTreeRenders(treeRenders + 1)
  }

  const deleteNode = e => {
    e.preventDefault()
    const num = getValue()
    if(typeof num === 'number') dell(num)
    if(usedFind.current) clean()
    cleanForm()
    setTreeRenders(treeRenders + 1)
  }

  const search = e => {
    e.preventDefault()
    if(usedFind.current) clean()
    const num = getValue()
    if(typeof num === 'number'){
      find(num)
      usedFind.current = true
    } 
    cleanForm()
    setTreeRenders(treeRenders + 1)
  }

  const draw = <Subtree tree={tree.current}/>

  return (
    <>
      <h1>Árboles binarios de búsqueda 🎄</h1>
      <form>
        <input id="new_node" type='number' placeholder='número' required></input>
        <button onClick={add}>Insertar ➕</button>
        <button onClick={search}>Buscar 🔍</button>
        <button onClick={deleteNode}>Eliminar 🗑</button>
      </form>
      {draw}
      by Camilo Arias and Javier Escobar
    </>
  )
}

export default App
