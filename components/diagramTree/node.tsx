/**
 * 用于创建节点钩子组件
 */
import { inject } from "vue"
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
        <div class="tree-node-children">
            {childNodes}
        </div>
    )
}

/**
 * @description create single node
 */
const createNodeElement = (treeData: DiagramTreeDataType, isSingle: boolean, layer?: number) => {
  const toggleExpand = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
    treeData.noExpand = !treeData.noExpand
  }
  const enableExpand = inject("enableExpand", false)
  const broadcast: any = inject("Broadcast")
  const onNodeClick = () => {
    const newTreeData = JSON.parse(JSON.stringify(treeData))
    delete newTreeData.noExpand
    broadcast && broadcast.emit("node-click", newTreeData)
  }
    return (
        <div
          class={['diagram-tree-node', {
            'is-expand': !treeData.noExpand,
            'is-single': isSingle,
            'is-empty-child': !treeData.children || treeData.children.length === 0
          }]}
        >
            <div class="diagram-tree-node-label" onClick={onNodeClick}>
              {treeData.title}
              { enableExpand ?
                <button
                title={treeData.noExpand ? "展开" : "隐藏"}
                class="diagram-tree-node-btn" onClick={toggleExpand}>
                { treeData.noExpand ? "+" : "-" }
              </button> : null }
            </div>
            {renderValidChildNode(treeData.children, layer + 1)}
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