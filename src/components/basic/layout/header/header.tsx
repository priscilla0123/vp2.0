/* src/components/basic/layout/header/header.tsx */
/* authed by sunjia032 2018-07-12 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
    //props
    @Prop() klass!: String; 
    @Prop() n!:Number;

    //computed
    get Height():String{
        return 48+10*(+this.n)+'px';
    } 
}