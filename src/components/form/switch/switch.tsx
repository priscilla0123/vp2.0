/* src/components/form/switch/switch.tsx */
/* authed by sunjia032 2018-08-02 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name: 'vpSwitch'
})
export default class Switch extends Vue {
    @Prop({ default: 12 }) size!: String | Number; 
}