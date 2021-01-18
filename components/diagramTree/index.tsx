import React from 'react';
import { DiagramTreeDataType, createOrganizationalTree } from "./node"
import "./index.scss"

interface DiagramTreeType {
  type: string
  layer?: number
  enableExpand?: boolean
  treeData: Array<DiagramTreeDataType>
}
export const {Provider,Consumer} = React.createContext("default");
const DiagramTree: React.FC = (props: DiagramTreeType) => {
  const { type, enableExpand, treeData, layer  } = props
  const cacheTreeData = JSON.parse(JSON.stringify(treeData))
  let currentLayer = 0,
      quaee = [] // store level data
  
  cacheTreeData.forEach((data: DiagramTreeDataType) => quaee.push(data))
  while(layer > 0 && currentLayer < layer) {
    let newQuaee = []
    currentLayer++
    quaee.forEach((item: DiagramTreeDataType) => {
      if (currentLayer === layer) item.noExpand = true
      newQuaee = newQuaee.concat(item.children || [])
    })
    quaee = newQuaee
  }
  const className = type === 'verticle' ? 'is-verticle' : 'is-horizonal'
  return (
    <Provider value={enableExpand}>
      <div className={`jh-diagram-tree ${className}`}>
          {createOrganizationalTree(cacheTreeData, enableExpand)}
      </div>
    </Provider>
  )  
}

export default DiagramTree
