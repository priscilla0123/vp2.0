import {
    vpRow,
    vpCol,
    vpCheckbox
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            Name:'Empty',
            show: true
        }
    },
    components: {
        vpRow,
        vpCol,
        vpCheckbox
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })
        }
    }
}