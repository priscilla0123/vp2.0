/* src/components/form/select/select.tsx */
/* authed by sunjia032 2018-08-02 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name: 'vpSelect'
})
export default class Select extends Vue {
    @Prop({ default: 12 }) size!: String | Number; 
}