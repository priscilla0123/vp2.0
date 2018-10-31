<template>
    <div :class="Klass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'col',
    props: {
        col: {
            type: String | Number,
            default: 12
        },
        offset: {
            type: String | Number,
            default: 0
        },
        center: {
            type: String | Boolean,
            default: false 
        }
    },
    computed: {
        Klass() {
            return ('vp-col-' + this.col) + (this.offset > 0 ? ' vp-col-offset-' + this.offset : '') +
                (this.center ? ' vp-center' : '');
        }
    }
}

</script>
<style>
.vp-col-1 {
    flex: 0 0 8.33333%;
}

.vp-col-2 {
    flex: 0 0 16.66667%;
}

.vp-col-3 {
    flex: 0 0 25%;
}

.vp-col-4 {
    flex: 0 0 33.33333%;
}

.vp-col-5 {
    flex: 0 0 41.66667%;
}

.vp-col-6 {
    flex: 0 0 50%;
}

.vp-col-7 {
    flex: 0 0 58.33333%;
}

.vp-col-8 {
    flex: 0 0 66.66667%;
}

.vp-col-9 {
    flex: 0 0 75%;
}

.vp-col-10 {
    flex: 0 0 83.33333%;
}

.vp-col-11 {
    flex: 0 0 91.66667%;
}

.vp-col-12 {
    flex: 0 0 100%;
}

.vp-col-offset-1 {
    left: 8.33333%;
}

.vp-col-offset-2 {
    left: 16.66667%;
}

.vp-col-offset-3 {
    left: 25%;
}

.vp-col-offset-4 {
    left: 33.33333%;
}

.vp-col-offset-5 {
    left: 41.66667%;
}

.vp-col-offset-6 {
    left: 50%;
}

.vp-col-offset-7 {
    left: 58.33333%;
}

.vp-col-offset-8 {
    left: 66.66667%;
}

.vp-col-offset-9 {
    left: 75%;
}

.vp-col-offset-10 {
    left: 83.33333%;
}

.vp-col-offset-11 {
    left: 91.66667%;
}

.vp-col-offset-12 {
    left: 100%;
}

.vp-center {
    text-align: center;
}

</style>
