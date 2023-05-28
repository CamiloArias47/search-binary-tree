import './subtree.css'

export default function Subtree({tree}) {

    function buildBinaryTree(obj) {
        if (!obj) {
          return <li></li>;
        }
      
        const { value, left, right } = obj;

        const subtreeLeft = buildBinaryTree(left)
        const subtreeRight = buildBinaryTree(right)

        const leftLine = left ? <span className='left-line'></span> : null
        const rightLine = right ? <span className='right-line'></span> : null
      
        const html = <ul className="subtree">
            <li className="parent-node">
              {leftLine}
              <span className='circle'>{value}</span>
              {rightLine}
            </li>
            <li className="left-child">{subtreeLeft}</li>
            <li className="right-child">{subtreeRight}</li>
          </ul>

      
        return html;
    }

    return <div className='draw-tree'>{buildBinaryTree(tree)}</div>
}