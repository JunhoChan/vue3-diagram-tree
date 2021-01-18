import { defineComponent, PropType, provide, reactive, toRaw } from "vue"
import { DiagramTreeDataType, createOrganizationalTree } from "./node"
import "./index.scss"


export default defineComponent({
  name: 'DiagramTree',
  props: {
    type: {
      type: String,
      default: "verticle"// verticle horizontal
    },
    layer: {
      type: Number,
      default: () => -1
    },
    enableExpand: Boolean,
    treeData: Array as PropType<DiagramTreeDataType[]>,
  },
  setup(props) {
    provide("enableExpand", props.enableExpand)
    const cacheTreeData = reactive(props.treeData)
    let currentLayer = 0,
    quaee = [] // store level data
    cacheTreeData.forEach((data: DiagramTreeDataType) => quaee.push(data))
    while(props.layer > 0 && currentLayer < props.layer) {
      let newQuaee = []
      currentLayer++
      quaee.forEach((item: DiagramTreeDataType) => {
        if (currentLayer === props.layer) item.noExpand = true
        newQuaee = newQuaee.concat(item.children || [])
      })
      quaee = newQuaee
    }
    return {
      cacheTreeData
    }
  },
  render() {
    const { type, enableExpand, cacheTreeData } = this
    
    return (
      <div class={['jh-diagram-tree', type === 'verticle' ? 'is-verticle' : 'is-horizonal']}>
        {createOrganizationalTree(cacheTreeData, enableExpand)}
      </div>
    )
  }
})