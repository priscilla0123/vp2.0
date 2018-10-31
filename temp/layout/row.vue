<template>
    <div class="vp-row" :class="Klass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'row',
    props: {
        col: {
            type: String | Number,
            default: 12
        },
        offset: {
            type: String | Number,
            default: 0
        },
        centerX: {
            type: String | Boolean,
            default: false
        },
        centerY: {
            type: String | Boolean,
            default: true
        },
        title: {
            type: String
        }
    },
    computed: {
        Klass() {
            return ('vp-row-' + this.col) + (this.centerY ? ' vp-row-center-y' : '') +
                (this.centerX ? ' vp-row-center-x' : '');
        }
    }
}

</script>
<style lang="less">
.vp-row {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -16px 15px -16px;
    float: left;
}

.vp-row-center-y {
    align-items: center;
}

.vp-row-center-X {
    text-align: center;
}

.vp-row-1 {
    width: 8.33333%;
    min-width: 100px;
}

.vp-row-2 {
    width: 16.66667%;
    min-width: 200px;
}

.vp-row-3 {
    width: 25%;
    min-width: 300px;
}

.vp-row-4 {
    width: 33.33333%;
    min-width: 400px;
}

.vp-row-5 {
    width: 41.66667%;
    min-width: 500px;
}

.vp-row-6 {
    width: 50%;
    min-width: 600px;
}

.vp-row-7 {
    width: 58.33333%;
}

.vp-row-8 {
    width: 66.66667%;
}

.vp-row-9 {
    width: 75%;
}

.vp-row-10 {
    width: 83.33333%;
}

.vp-row-11 {
    width: 91.66667%;
}

.vp-row-12 {
    width: 100%;
}

.vp-row *[class^='vp-col-'] {
    padding: 0 16px;
    min-height: 1px;
    position: relative;
    box-sizing: border-box;
}

</style>
