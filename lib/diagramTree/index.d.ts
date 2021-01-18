import { PropType } from "vue";
import { DiagramTreeDataType } from "./node";
import "./index.scss";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    layer: {
        type: NumberConstructor;
        default: () => number;
    };
    enableExpand: BooleanConstructor;
    treeData: PropType<DiagramTreeDataType[]>;
}, {
    cacheTreeData: {
        id: string;
        title: string;
        noExpand?: boolean;
        children?: any[];
        customRender?: (node: DiagramTreeDataType) => void | Node;
    }[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: string;
    layer: number;
} & {
    enableExpand?: boolean;
    treeData?: DiagramTreeDataType[];
}>, {
    type: string;
    layer: number;
}>;
export default _default;
