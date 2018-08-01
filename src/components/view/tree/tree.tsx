/* src/components/view/tree/tree.tsx */
/* created by sunjia032 2018-07-12 */

import { Vue, Component, Prop } from "vue-property-decorator";

enum NodeType { Branch, Leaf };
class Node {
    name: String = '';
    children ? : Array < Node > ;
    type ? : NodeType;
    data ? : Object;
    url ? : String;
    className ? : String;
}


@Component({
    name: 'vpTree'
})
export default class Tree extends Vue {
    //props
    @Prop() klass!: String;
    @Prop() data!: Array < any > ;

    //computed
    get Data(): Array < Node > {
        let nodeList: Array < Node > = [];
        this.data.forEach(function(ndata) {
            let node: Node = { name: ndata.name, url: ndata.url || 'javascript:;' };
            if (ndata.children) {
                node.children = ndata.children;
                node.type = NodeType.Branch;
            } else {
                node.type = NodeType.Leaf;
            }
            nodeList.push(node);
        })
        return nodeList;
    }
}