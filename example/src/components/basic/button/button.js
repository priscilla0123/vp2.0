import {
    vpRow,
    vpBtngroup,
    vpCol,
    vpBtn
} from '../../../../../dist/vp';

export default {
    data:function() {
        return {
            show:true,
            type: '',
            color: '',
            size: '[35,120,16]',
            shape: '',
            disable: '',
            icon:'',
            iconafter:'',
            shapeG:'round',
            vertical:''
        }
    },
    mounted:function() {
        let _this = this;
    },
    methods:{
        changeShape(){
            setTimeout(()=>{
                this.show = false;
                this.$nextTick(() => { this.show = true; })
            },100)            
        }
    },
    computed: {
        Icon(){
                return this.icon?'search':null;
        },
        Iconafter(){
                return this.iconafter?'triangleR':null;
        },
        Size() {
            if (/^\[\d{1,3},\d{1,3}\]$/.test(this.size)||/^\[\d{1,3},\d{1,3},\d{1,3}\]$/.test(this.size)) {
                let s = this.size.replace('[', '').replace(']', '').split(',');
                return s;
            }
            if (this.size == 'small' || this.size == 'large') {
                return this.size;
            }
            return null;
        },
        sizeH() {
            return this.Size && typeof this.Size == 'object' && this.Size[0] ? this.Size[0] : '';
        },
        sizeW() {
            return this.Size && typeof this.Size == 'object' && this.Size[1] ? this.Size[1] : '';
        }
    },
    components: {
        vpBtn,
        vpBtngroup,
        vpRow,
        vpCol
    }
}