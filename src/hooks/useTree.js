export default function useTree(){
    let tree = null

    function insertNode(node, newNode) {
      if (newNode.value < node.value) {
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
      const newNode = { value, left: null, right: null }
      if (tree === null) {
        tree = newNode
      } else {
        insertNode(tree, newNode);
      }
    }

    function test(){
        insert(8);
        insert(3);
        insert(10);
        insert(1);
        insert(6);
        insert(14);
        insert(4);
        insert(7);
        insert(13);
        console.log(tree)
    }

    return { tree, insert, test }
}
