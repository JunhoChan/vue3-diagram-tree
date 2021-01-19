declare interface DiagramTreeDataType {
  id: string
  title: string
  noExpand?: boolean
  children?: DiagramTreeDataType[]
  customRender?: (node: DiagramTreeDataType) => void | undefined | Node
}

declare interface DiagramTreeType {
  type: string
  layer?: number
  enableExpand?: boolean
  treeData: Array<DiagramTreeDataType>
  onNodeClick?: (node: DiagramTreeDataType) => any
}

declare class broadcast {
  protected _events: Map<string, unknown>
  constructor()
  off(type: string):void
  on(type: string, fn: (val: any) => void):void
  emit(type: string, ...args: any[]):void
}