<template>
    <i :class="'vp-icon-' + name" class="vp-iconfont" :style="{fontSize: size + 'px',color:color}"></i>
</template>

<script>
    import './iconfont.css';

    export default {
        name: 'icon',

        props: {
            name: {
                type: String,
                default: ''
            },

            size: {
                type: Number|String,
                default: 14
            },

            color:{
                type: String,
                default: null
            }
        }
    }
</script>