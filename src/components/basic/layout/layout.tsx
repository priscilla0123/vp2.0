/* src/components/basic/layout/layout.tsx */
/* aythed by sunjia032 2018-07-12 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
    @Prop() klass!: String;

    hasSide: Boolean = false;

    get Klass(): String { 
        return this.klass || '' + (this.hasSide ? 'vp-layout-withSide' : '');
    }

    mounted() {
        this.hasSide = this.findSide();
    }

    findSide() {
        let children:any=this.$el.childNodes; 
        for (let index in children) { 
            if (children[index].className && children[index].className.indexOf('vp-side') > -1)
                return true;
        }  
        return false;
    }
}