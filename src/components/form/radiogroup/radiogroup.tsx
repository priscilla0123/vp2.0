/* src/components/form/radiogroup/radiogroup.tsx */
/* authed by sunjia032 2018-08-02 */

import { Vue, Component, Prop } from "vue-property-decorator";
import { vpIcon } from '../../basic/icon';
import { vpRadio } from '../radio';

@Component({
    name: 'vpRadiogroup',
    components:{
        vpIcon,
        vpRadio
    }
})
export default class Radiogroup extends Vue {
    @Prop() value!: string | number;
    @Prop() data!: Array<any>; 
    @Prop({ default: '' }) name!: string | number;  
    @Prop({ default: '' }) label!: string; 

    get Checked(): any { 
        return this.value; 
    }
    get Disable(): Array<boolean> {
        return this.data.map((item)=> {
            return !!item.disable;
        });
    } 

    onChange(val:any,e: any): void { 
        this.$emit('input', val);
        this.$emit('change', e);
    } 
}