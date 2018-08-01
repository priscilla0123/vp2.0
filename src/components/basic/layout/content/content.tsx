/* src/components/basic/layout/content/content.tsx */
/* authed by sunjia032 2018-07-12 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Content extends Vue {
    @Prop() klass!: String;
}