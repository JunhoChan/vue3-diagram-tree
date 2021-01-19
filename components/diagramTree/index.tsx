import { defineComponent, inject, onUnmounted, PropType, provide, reactive, toRaw } from "vue"
import { DiagramTreeDataType, createOrganizationalTree } from "./node"
import Broadcast from "./../utils/broadcast"
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
  setup(props, { emit }) {
    provide("enableExpand", props.enableExpand)
    const bcEvent = new Broadcast()
    provide("Broadcast", bcEvent)
    bcEvent.on("node-click", (val: DiagramTreeDataType) => {
      emit("nodeClick", val)
    })
    onUnmounted(() => {
      inject("nodeClick")
    })

    // 广度优先遍历找对对应层级节点
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