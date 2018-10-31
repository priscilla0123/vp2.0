<template>
    <vp-row class="vp-formline" :col="col" :center-x="centerX" :center-y="centerY">
        <label :class="{'vp-require':required}" v-if="label" v-text="label"></label>
        <slot>
            <span>{{span}}</span>
        </slot>
    </vp-row>
</template>
<script>
import Row from 'row.vue';  
export default {
    name: 'formline',
    props: {
        col: {
            type: String | Number,
            default: 12
        },
        centerX: {
            type: String | Boolean,
            default: false
        },
        centerY: {
            type: String | Boolean,
            default: true
        },
        label: {
            type: String,
            default: null
        },
        span: {
            required: false
        },
        required: {
            type: String | Boolean,
            default: false
        }
    },
    components: {
        vpRow: Row
    }
}

</script>
<style lang="less">
.vp-formline {
    margin: 5px 0;
    position: relative;
    min-height: 30px;
    line-height: 16px;
    & > label{
        width: 120px;
        text-align: right;
    }
    & span{
        margin: 0 5px;
    }
}

label.vp-require:before {
    content: '*';
    color: red;
}

</style>
