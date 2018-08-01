/* src/components/basic/grid/row/row.tsx */
/* authed by sunjia032 2018-07-19 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name: 'vpRow'
})
export default class Row extends Vue {
    @Prop({ default: 12 }) size!: String | Number;
    @Prop({ default: 'left' }) justify!: String;
    @Prop({ default: 0 }) gap!: Number;

    Gap: String = (+this.gap / 2) + 'px';

    mounted() {
        this.setGap();
    }
      
    setGap() {
        let children: any = this.$el.childNodes;
        if (this.gap && this.gap > 0 && this.gap <= 100) {
            for (let index in children) {
                if (children[index].className && children[index].className.indexOf('vp-col') > -1) {
                    children[index].style.padding = '0px ' + (+this.gap / 2) + 'px';
                }
            }
        }
    }

    get Klass(): String {
        return ('vp-row-' + this.size) + ' vp-row-' + this.justify;
    }
}