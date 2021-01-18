import React, { Component } from 'react';
import { DiagramTreeDataType } from "./node"
import "./index.scss"

interface DiagramTreeType {
  type: string
  layer?: number
  enableExpand?: boolean
  treeData: Array<DiagramTreeDataType>
}
class DiagramTree extends Component<DiagramTreeType> {
  name: "ReactDiagramTree"
  
  
  render() {
    return (213
      // <div class={['jh-diagram-tree', type === 'verticle' ? 'is-verticle' : 'is-horizonal']}>
      //   {createOrganizationalTree(cacheTreeData, enableExpand)}
      // </div>
    )
  }
}

export default DiagramTree
