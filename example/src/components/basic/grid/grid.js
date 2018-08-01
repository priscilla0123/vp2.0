import {
    vpRow,
    vpCol
} from '../../../../../dist/vp';

export default {
    data() {
        return {
            rowsize: 12,
            rowjustify: 'left',
            rowgap: 10,
            colsize:12,
            coloffset:0,
            show: true
        }
    },
    components: {
        vpRow,
        vpCol
    },
    methods: {
        go() {
            this.show = false;
            this.$nextTick(() => { this.show = true; })
        }
    }
}