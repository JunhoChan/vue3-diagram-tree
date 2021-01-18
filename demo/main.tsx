import { defineComponent } from 'vue'
// import { VueDiagramTree } from '@components/main/index'
import { VueDiagramTree } from './../lib'
import treeData from "./data"
export default defineComponent({
    name: 'demo',
    components: {
      VueDiagramTree
    },
    setup() {
      return () => (
        <div style={{width: "100%", height: "100%", display: 'flex', flexWrap: 'wrap'}}>
          <div style={{ flex: 1, margin: "20px", backgroundColor: "#fff", border: "1px solid #eee", boxShadow: "0px 0px 8px 1px rgba(153, 153, 153, 0.1)"  }}>
            <div style="text-align:center">verticle Example</div>
            <vue-diagram-tree treeData={treeData} style={{width: "750px", height: "500px", margin: "0 auto"}} />
            <div style="text-align:center;margin-top:50px">horizontal Example</div>
            <vue-diagram-tree
              type="horizontal"
              treeData={treeData}
              layer={2}
              enableExpand={true}
              style={{margin: "0 auto", padding: '20px'}}
            />
          </div>
        </div>
      )
    }
})