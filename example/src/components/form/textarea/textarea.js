import {
    vpRow,
    vpCol,
    vpTextarea,
    vpIcon,
    vpBtn
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            Name:'Textarea',
            show: true,
            item1:'',
            item2:'',
            item3:'',
            item4:'disable',
            item5:'',
            errormsg:'max length is 1!'
        }
    },
    components: {
        vpRow,
        vpCol,
        vpTextarea,
        vpIcon,
        vpBtn
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })
        },
        valid(){
            return this.item2.length<=1;
        } 
    }
}