import ReactDiagramTree from '@components/diagramTree'
import treeData from "./data"


import React from "react"

let App = () => (
  <div>
     <h1>水平树</h1>
      <ReactDiagramTree
        type="horizontal"
        treeData={treeData}
        layer={2}
        enableExpand={true}
        style={{margin: "0 auto", padding: '20px'}}
      />
     
  </div>
)


export default App
