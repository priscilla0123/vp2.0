/* src/components/basic/layout/side/side.vue */
/* created by sunjia032 2018-07-12 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name:'vpSide'
})
export default class Side extends Vue {
    //props
    @Prop() klass!: String;
    @Prop() width!: Number; 
    
    //computed
    get Width(): String {
        return (this.width || 180) + 'px';
    }

    //hooks
    mounted() {
        // this.$options.name='vpSide'; 
    } 
}