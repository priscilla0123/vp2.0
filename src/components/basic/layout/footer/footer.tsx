/* src/components/basic/layout/footer/footer.tsx */
/* authed by sunjia032 2018-07-12 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
    @Prop() klass!: string; 
}