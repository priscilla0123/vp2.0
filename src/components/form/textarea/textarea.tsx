/* src/components/form/textarea/textarea.tsx */
/* authed by sunjia032 2018-08-16 */

import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
    name: 'vpTextarea'
})
export default class Textarea extends Vue {
    @Prop({ default: null }) value!: any;
    @Prop({ default: false }) disable!: Boolean | '';
    @Prop({ default: '' }) placeholder!: string;
    @Prop({ default: true }) valid!: Boolean | Function;
    @Prop({ default: '' }) error!: string;
    @Prop({ default: '' }) label!: string;
    @Prop({ default: false }) require!: Boolean;
    @Prop({ default: '' }) width!: string;
    @Prop({ default: '' }) height!: string;
    @Prop({ default: null }) max!: Number | string;

    count: Number = this.value == null ? 0 : this.value.length;
    overflow(): Boolean {
        return this.count != null && this.count > parseInt(this.max + '');
    }


    get Disable(): Boolean {
        return Boolean(this.disable || this.disable === '');
    }
    get Valid(): Boolean {
        return Boolean(this.value === '' || (typeof this.valid === 'boolean' && this.valid) || (typeof this.valid === 'function' && this.valid()));
    }
    get Klass(): String {
        let classes = ['vp-textarea-text'];
        if (!this.Valid || this.overflow()) {
            classes.push('vp-error')
        }
        if (this.require) {

        }
        return classes.join(' ');
    }
    get LabelClass(): String {
        let classes = [];
        if (this.require || this.require === '') {
            classes.push('vp-require');
        }
        if (this.Disable) {
            classes.push('vp-disable');
        }
        return classes.join(' ');
    }
    get CountClass(): String {
        return this.overflow() ? 'vp-error' : '';
    }
    get WidthHeight(): Object {
        let w = '400px',
            h = '136px';
        if (this.width) {
            w = this.height;
        }
        if (this.width) {
            h = this.height;
        }
        return {
            width: w,
            height: h
        }
    }

    @Watch('value')
    onChangeValue(val: any) {
        this.$emit('input', val);
        this.count = val.length;
    }
}