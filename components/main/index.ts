import { App } from 'vue'
import VueDiagramTree from '@components/DiagramTree'

const components = [
  VueDiagramTree,
]

// import ElIcon from '@element-plus/icon'
const install = (app: App): void => {
  components.forEach((component: any) => {
    app.use(component)
  })
}

export {
  VueDiagramTree,
}

export default {
  install,
}
