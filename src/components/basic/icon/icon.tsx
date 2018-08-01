/* src/components/basic/grid/icon/icon.tsx */
/* authed by sunjia032 2018-07-24 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name: 'vpIcon'
})
export default class Icon extends Vue {
    @Prop({ default: '', required: true }) name!: String;
    @Prop({ default: 14 }) size!: String | Number;
    @Prop({ default: null }) color!: String;
}