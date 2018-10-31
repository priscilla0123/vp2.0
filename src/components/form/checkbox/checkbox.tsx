/* src/components/form/checkbox/checkbox.tsx */
/* authed by sunjia032 2018-08-02 */

import { Vue, Component, Prop } from "vue-property-decorator";
import { vpIcon } from '../../basic/icon';

@Component({
    name: 'vpCheckbox',
    model: {
        prop: 'modelValue',
        event: 'input'
    },
    components: {
        vpIcon
    }
})
export default class Checkbox extends Vue {
    @Prop() modelValue!: Array < string | number > ;
    @Prop() value!: string | number;
    @Prop({ default: '' }) id!: string | number;
    @Prop({ default: false }) checked!: boolean;
    @Prop({ default: false }) disable!: boolean | '';
    @Prop({ default: false }) part!: boolean | '';
    @Prop({ default: '' }) label!: string;
    @Prop({ default: '' }) text!: string;

    get Checked(): boolean {
        return this.modelValue && this.modelValue.indexOf(this.value) >= 0;
    }
    get Disable(): Boolean {
        return Boolean(this.disable || this.disable === '');
    }
    get Klass(): string {
        let classes = ['vp-checkbox'];
        if (this.Disable) {
            classes.push('vp-checkbox-disable')
        }
        return classes.join(' ');
    }

    onChange(e: any): void {
        let val: Array < string | number >= this.modelValue.slice(0);
        if (this.Checked) {
            val.splice(val.indexOf(this.value), 1);
        } else {
            val.push(this.value);
        }
        this.$emit('input', val);
        this.$emit('change', val, e);

    }
}