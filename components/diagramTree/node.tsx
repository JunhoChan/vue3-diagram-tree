/**
 * 用于创建节点钩子组件
 */
import React, { useState } from 'react'
export declare interface DiagramTreeDataType {
  id: string
  title: string
  noExpand?: boolean
  children?: DiagramTreeDataType[]
  customRender?: (node: DiagramTreeDataType) => void | undefined | Node
}

const renderValidChildNode:React.FC = (childData: DiagramTreeDataType[], layer: number) => {
        // you can use optionChannel
    const childNodes = childData && childData.length
      ? childData.map((child: DiagramTreeDataType, index: number, self: DiagramTreeDataType[]) => {
            return createNodeElement(child, self.length === 1, layer)
        })
      : null
    return (
        <div className="tree-node-children">
            {childNodes}
        </div>
    )
}

/**
 * @description create single node
 */
import { Consumer } from "./index"
const createNodeElement:React.FC = (treeData: DiagramTreeDataType, isSingle: boolean, layer?: number) => {
  const [data, setData] = useState(treeData)
  const toggleExpand = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
    data.noExpand = !data.noExpand
    setData({...data})
  }
  const onNodeClick = (bcEvent: any) => {
    const newTreeData = JSON.parse(JSON.stringify(treeData))
    delete newTreeData.noExpand
    bcEvent.emit && bcEvent.emit("node-click", newTreeData)
  }
  const renderNodeLabel:React.FC = () => (
    <Consumer>
      {({ enableExpand, bcEvent }) => (
        <div className="diagram-tree-node-label" onClick={() => onNodeClick(bcEvent)}>
          {data.title}
          {
              enableExpand ?
                <button
                  title={data.noExpand ? "展开" : "隐藏"}
                  className="diagram-tree-node-btn" onClick={toggleExpand}>
                    { data.noExpand ? "+" : "-" }
                </button> : null
          }
        </div>
       )}
    </Consumer>
  )

    return (
        <div
          key={data.id}
          className={`diagram-tree-node
          ${!data.noExpand ? 'is-expand' : ''}
          ${isSingle ? 'is-single' : ''}
          ${!data.children || data.children.length === 0 ? 'is-empty-child' : '' }
        `}>
            {renderNodeLabel()}
            {renderValidChildNode(data.children, layer + 1)}
        </div>
    )
}

export const createOrganizationalTree:React.FC = (treeData: DiagramTreeDataType[]) => {
    return (
      treeData.map((node: DiagramTreeDataType, index: number, self: DiagramTreeDataType[]) => {
        return createNodeElement(node, self.length === 1, 0)
      })
    )
}