import {
    vpRow,
    vpCol,
    vpRadio,
    vpRadiogroup
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            Name:'Radio',
            show: true,
            weekday:'3',
            data:[{
                value:"1",
                text:'星期一'
            },{
                value:"2",
                text:'星期二'
            },{
                value:"3",
                text:'星期三'
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
        vpRadiogroup
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })
        }
    }
}