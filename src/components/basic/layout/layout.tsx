/* src/components/basic/layout/layout.tsx */
/* aythed by sunjia032 2018-07-12 */

import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
    @Prop({ default: '' }) klass!: String;
    @Prop({ default: false }) collapse!: Boolean;

    hasSide: Boolean = false;

    get Klass(): String {
        return (this.klass+' ' || '') + (this.hasSide ? 'vp-layout-withSide' : '');
    }
    get aaa(): Boolean {
        return this.hasSide && this.collapse !== false;
    }

    mounted() {
        this.hasSide = this.findSide();
    }

    findSide(): Boolean {
        return !!this.$slots.right || !!this.$slots.left;
    }
}