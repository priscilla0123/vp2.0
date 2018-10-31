import {
    vpLayout,  
    vpContent,
    vpBtn 
} from '../../../../../dist/vp';

export default {
    components: {
        vpLayout, 
        vpContent,
        vpBtn 
    },
    data(){
        return {
            side:true
        }
    },
    methods:{
        close(){
            this.side=!this.side; 
        }
    },
    mounted(){ 
        var _this=this;
    }
}