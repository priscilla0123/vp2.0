import {
    vpRow,
    vpCol,
    vpCheckbox,
    vpRadio,
    vpCheckboxgroup,
    vpInput
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            Name:'Checkbox',
            show: true,
            weekday:['1','4'],
            data:[{
                value:"1",
                text:'星期一'
            },{
                value:"2",
                text:'星期二'
            },{
                value:"3",
                text:'星期三',
                part:false
            },{
                value:"4",
                text:'星期四',
                disable:true
            }]
        }
    },
    components: {
        vpRow,
        vpCol,
        vpRadio,
        vpCheckbox,
        vpCheckboxgroup,
        vpInput
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })            
        }
    }
}