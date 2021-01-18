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

const renderValidChildNode = (childData: DiagramTreeDataType[], layer: number) => {
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
const createNodeElement = (treeData: DiagramTreeDataType, isSingle: boolean, layer?: number) => {
  const [data, setData] = useState(treeData)
  const toggleExpand = () => {
    data.noExpand = !data.noExpand
    setData({...data})
  }
    return (
        <div
          key={data.id}
          className={`diagram-tree-node
          ${!data.noExpand ? 'is-expand' : ''}
          ${isSingle ? 'is-single' : ''}
          ${!data.children || data.children.length === 0 ? 'is-empty-child' : '' }
        `}>
            <div className="diagram-tree-node-label">
              {data.title}
              <Consumer>
                {(enableExpand: boolean) => (
                    enableExpand ?
                  <button
                    title={data.noExpand ? "展开" : "隐藏"}
                    className="diagram-tree-node-btn" onClick={toggleExpand}>
                     { data.noExpand ? "+" : "-" }
                  </button> : null
                )}
              </Consumer>
            </div>
            {renderValidChildNode(data.children, layer + 1)}
        </div>
    )
}

export const createOrganizationalTree = (treeData: DiagramTreeDataType[], enableExpand?: boolean) => {
    return (
      treeData.map((node: DiagramTreeDataType, index: number, self: DiagramTreeDataType[]) => {
        return createNodeElement(node, self.length === 1, 0)
      })
    )
}