export declare interface DiagramTreeDataType {
    id: string;
    title: string;
    noExpand?: boolean;
    children?: DiagramTreeDataType[];
    customRender?: (node: DiagramTreeDataType) => void | undefined | Node;
}
export declare const createOrganizationalTree: (treeData: DiagramTreeDataType[], enableExpand?: boolean) => JSX.Element[];
