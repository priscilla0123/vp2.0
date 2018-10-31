import {
    vpRow,
    vpCol,
    vpInput,
    vpIcon,
    vpBtn
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            Name:'Input',
            show: true,
            item1:'',
            item2:'clearable',
            item3:'',
            item4:'disable',
            item5:'',
            item6:'',
            item7:'i am very complex',
            item8:'',
            item9:'',
            item10:'',
            item11:'',
            errormsg:'max length is 1!'
        }
    },
    components: {
        vpRow,
        vpCol,
        vpInput,
        vpIcon,
        vpBtn
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })
        },
        valid(){
            return this.item3.length<=1;
        },
        valid7(){
            return this.item7.length<=10;
        },
        search(){
            alert('search');
        },
        hot(){
            alert('hot');
        }
    }
}