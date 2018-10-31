import {
    vpRow,
    vpCol,
    vpSelect
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            Name:'Select',
            show: true
        }
    },
    components: {
        vpRow,
        vpCol,
        vpSelect
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })
        }
    }
}