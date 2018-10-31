/* src/components/form/input/input.tsx */
/* authed by sunjia032 2018-08-02 */

import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { vpIcon } from '../../basic/icon';


@Component({
    name: 'vpInput',
    components: {
        vpIcon
    }
})
export default class Input extends Vue {
    @Prop({ default: null }) value!: any;
    @Prop({ default: 'text' }) type!: string;
    @Prop({ default: false }) disable!: Boolean | '';
    @Prop({ default: false }) clearable!: Boolean | '';
    @Prop({ default: '' }) placeholder!: string;
    @Prop({ default: true }) valid!: Boolean | Function;
    @Prop({ default: '' }) error!: string;
    @Prop({ default: '' }) label!: string;
    @Prop({ default: false }) require!: Boolean;
    @Prop({ default: '' }) width!: string;

    onClear() {
        this.$emit('input', '');
    }
    onAdd() {
        this.cal(1);
    }
    onMinus() {
        this.cal(-1);
    }
    cal(flag: any) {
        let input: any = this.$refs.input;
        input.focus();
        if (isNaN(parseFloat(this.value))) {
            this.value = 0;
        }
        this.$emit('input', parseInt(this.value) + 1 * flag);
    }

    get Disable(): Boolean {
        return Boolean(this.disable || this.disable === '');
    }
    get Clearable(): Boolean {
        return Boolean(this.clearable || this.clearable === '');
    }
    get Valid(): Boolean {
        return Boolean(this.value === '' || (typeof this.valid === 'boolean' && this.valid) || (typeof this.valid === 'function' && this.valid()));
    }
    get Klass(): String {
        let classes = ['vp-input-text'];
        if (!this.Valid) {
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
    get Padding(): Object {
        let rpx = 8,
            lpx = 8;
        if (this.Clearable) {
            rpx = rpx + 10;
        }
        if (this.type === 'number') {
            rpx = rpx + 30;

        } else {
            if (this.$slots['appendin']) {
                rpx = rpx + 14;
            }
            if (this.$slots['prependin']) {
                lpx = lpx + 14;
            }
        }
        return {
            paddingLeft: lpx + 'px',
            paddingRight: rpx + 'px'
        }
    }
    get Width(): Object {
        let w = '200px';
        if (this.width) {
            w = this.width;
        }
        return {
            width: w
        }
    }

    @Watch('value')
    onChangeValue(val: any) {
        this.$emit('input', val);
    }
}