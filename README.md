## vue3-diagram-tree
> Vue3图树展示组件

<br/>

### 运行效果
<div style="display: flex">
  <span style="margin-right:5%">
    <img src="./resource/verticle.png" width = "100%" height = "200" />
    <center>水平树demo</center>
  </span>
  <span style="margin-right:10%">
    <img src="./resource/horizonal.png" width = "100%" height = "200" />
    <center>垂直树demo</center>
  </span>
</div>
<br/>

### 安装 
```shell
# for Vue 3.x
npm i vue3-diagram-tree
```

### 使用
```js
// global
import vue3DiagramTree from 'vue3-diagram-tree'
app.use(vue3DiagramTree)

// single file
import { VueDiagramTree } from 'vue3-diagram-tree'
export default {
  components: {
    VueDiagramTree
  }
}
```

### 组件属性参考
|参数               |   说明                     |类型                                 | 默认值   |
|----               |   -------                  |------                               | ----     |
|type               |  当前树图以水平/垂直展示   | String(``verticle``/``horizontal``) | verticle |
|treeData           |  treeNodes的数据           | Array<{ id: string, title: string, noExpand: boolean, children: Array: [] }> | [] |verticle |
|layer               |  当前树图展示多少级    | Number | 0(代表全部) |
|enableExpand        |  启用伸缩子节点按钮    | Boolean | false |

* 注具体使用可查看Demo目录