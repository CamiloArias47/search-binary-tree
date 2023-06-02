 import { useRef } from "react";
 export default function useTree(){
    let tree = useRef(null)

    function insertNode(node, newNode) {
      if(newNode.value === node.value){
        alert(`el ${node.value} ya esta en el árbol`)
      }
      else if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }

    function insert(value) {
      const newNode = { value, left: null, right: null, selected: false }
      if (tree.current === null) {
        tree.current = newNode
      } else {
        insertNode(tree.current, newNode);
      }
    }

    function createDefaultTree(){
        insert(8);
        insert(3);
        insert(10);
        insert(1);
        insert(6);
        insert(14);
        insert(4);
        insert(7);
        insert(13);
    }

    function dell(deleteValue) {
      const newTree = deleteNode(tree.current, deleteValue)
      tree.current = newTree
    }

    function deleteNode(tree, value) {
      if (tree === null) {
        return tree;
      }
    
      if (value < tree.value) {
        tree.left = deleteNode(tree.left, value);
      } else if (value > tree.value) {
        tree.right = deleteNode(tree.right, value);
      } else {
        if (tree.left === null && tree.right === null) {
          tree = null;
        } else if (tree.left === null) {
          tree = tree.right;
        } else if (tree.right === null) {
          tree = tree.left;
        } else {
          let sucesor = findMin(tree.right);
          tree.value = sucesor.value;
          tree.right = deleteNode(tree.right, sucesor.value);
        }
      }
    
      return tree;
    }
    
    function findMin(tree) {
      let current = tree;
    
      while (current.left !== null) {
        current = current.left;
      }
    
      return current;
    }

    function findNode(node, value) {
      if(node.value === value){
        node.selected = true
      }
      else if (value < node.value) {
        if (node.left === null) {
          alert(`${value} no esta en el arbol`)
        } 
        else{
          findNode(node.left, value);
        }
      } else {
        if (node.right === null) {
          alert(`${value} no esta en el arbol`)
        } else {
          findNode(node.right, value);
        }
      }
    }

    function find(value){
      findNode(tree.current, value)
    }

    function clean() {
      cleanNode(tree.current)
    }

    function cleanNode(node){
      if(node.selected) node.selected = false
      if(node.left !== null) cleanNode(node.left)
      if(node.right !== null) cleanNode(node.right)
    }

    return { 
      tree, 
      insert, 
      createDefaultTree,
      dell,
      find,
      clean
     }
}
