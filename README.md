## vue3-diagram-tree
> Vue3图树展示组件

### 安装 
```shell
# for Vue 3.x
npm i mint-ui -S
```

### 使用
```js

```

### 组件属性参考
|参数               |   说明                     |类型                                 | 默认值   |
|----               |   -------                  |------                               | ----     |
|type               |  当前树图以水平/垂直展示   | String(``verticle``/``horizontal``) | verticle |
|treeData           |  treeNodes的数据           | Array<{ id: string, title: string, noExpand: boolean, children: Array: [] }> | [] |verticle |
|layer               |  当前树图展示多少级    | Number | 0(代表全部) |
|enableExpand        |  启用伸缩子节点按钮    | Boolean | false |