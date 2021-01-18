import ReactDiagramTree from '@components/diagramTree'
import treeData from "./data"


import React from "react"

const App:React.Fc = () => (
  <div>
     <h2>horizonal Demo</h2>
      <ReactDiagramTree
        type="horizonal"
        treeData={treeData}
        layer={3}
        enableExpand={true}
        style={{margin: "0 auto", padding: '20px'}}
      />
     <h2>verticle Demo</h2>
     <ReactDiagramTree
        type="verticle"
        treeData={treeData}
        style={{margin: "0 auto", padding: '20px'}}
      />
  </div>
)


export default App
