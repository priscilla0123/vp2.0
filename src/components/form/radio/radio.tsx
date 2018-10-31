/* src/components/form/radio/radio.tsx */
/* authed by sunjia032 2018-08-02 */

import { Vue, Component, Prop } from "vue-property-decorator";
import { vpIcon } from '../../basic/icon';

@Component({
    name: 'vpRadio',
    model: {
        prop: 'modelValue',
        event: 'input'
    },
    components: {
        vpIcon
    }
})
export default class Radio extends Vue {
    @Prop() modelValue!: string | number;
    @Prop() value!: string | number;
    @Prop({ default: '' }) id!: string | number;
    @Prop({ default: '' }) name!: string | number;
    @Prop({ default: false }) disable!: boolean | '';
    @Prop({ default: '' }) label!: string;
    @Prop({ default: '' }) text!: string;

    get Checked(): boolean {
        return this.modelValue === this.value;
    }
    get Disable(): Boolean {
        return Boolean(this.disable || this.disable === '');
    }
    get Klass(): string {
        let classes = ['vp-radio'];
        if (this.Disable) {
            classes.push('vp-radio-disable')
        }
        return classes.join(' ');
    }

    onChange(e: any): void {
        this.$emit('input', this.value);
        this.$emit('change', this.value, e);
    }
}