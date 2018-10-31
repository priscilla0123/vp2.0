import {
    vpRow,
    vpCol,
    vpSwitch
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            Name:'Switch',
            show: true
        }
    },
    components: {
        vpRow,
        vpCol,
        vpSwitch
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })
        }
    }
}