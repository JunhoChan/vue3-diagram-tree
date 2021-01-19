import { ReactDiagramTree } from './../lib'
// import { ReactDiagramTree } from '@components/main'
import treeData from "./data"


import React from "react"

const style = {
  backgroundColor: "#fff",
  margin: "50px",
  padding: "20px",
}

const App:React.Fc = () => {
  const nodeClick = (node: any) => {
    console.log(node)
  }

  return (
    <div style={style}>
      <h2 style={{marginBottom: '20px'}}>horizonal Demo</h2>
      <ReactDiagramTree
        type="horizonal"
        treeData={treeData}
        layer={3}
        enableExpand={true}
        style={{margin: "0 auto", padding: '20px'}}
        onNodeClick={nodeClick}
      />
      <h2 style={{lineHeight: "100px"}}>verticle Demo</h2>
      <ReactDiagramTree
        type="verticle"
        treeData={treeData}
        style={{margin: "0 auto", padding: '20px'}}
      />
    </div>
  )
}


export default App
