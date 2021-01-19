## react-diagram-tree
> React图树展示组件,如果需要Vue版本，请切换分支版本到```mian```

<br/>

### 运行效果
![垂直树Demo](./resource/verticle.png)
![水平树Demo](./resource/horizonal.png)

### 安装 
```shell
# for Vue 3.x
npm i react-diagram-tree
```

### 使用
```js
import { ReactDiagramTree } from 'react-diagram-tree'
<ReactDiagramTree
  type="horizonal"
  treeData={treeData}
  layer={3}
  enableExpand={true}
  style={{margin: "0 auto", padding: '20px'}}
  onNodeClick={nodeClick}
/>
```

### 组件属性参考
|参数               |   说明                     |类型                                 | 默认值   |
|----               |   -------                  |------                               | ----     |
|type               |  当前树图以水平/垂直展示   | String(``verticle``/``horizontal``) | verticle |
|treeData           |  treeNodes的数据           | Array<{ id: string, title: string, noExpand: boolean, children: Array: [] }> | [] |verticle |
|layer               |  当前树图展示多少级    | Number | 0(代表全部) |
|enableExpand        |  启用伸缩子节点按钮    | Boolean | false |

* 注具体使用可查看[Demo目录](https://github.com/JunhoChan/vue3-diagram-tree/tree/react-branch/demo)
