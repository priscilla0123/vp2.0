/* src/components/basic/grid/col/col.tsx */
/* authed by sunjia032 2018-07-19 */

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name: 'vpCol'
})
export default class Col extends Vue {
    @Prop({ default: 12 }) size!: String | Number;
    @Prop({ default: 0 }) offset!: String | Number;
    @Prop({ default: false }) center!: String | Boolean;

    get Klass(): String { 
        return ('vp-col-' + this.size) + (this.offset > 0 ? ' vp-col-offset-' + this.offset : '') +
            (this.center || this.center === '' ? ' vp-center' : '');
    }
}