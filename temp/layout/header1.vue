<template>
    <div class="page-head">
        <p class="lg-title" v-text="title"></p>
        <slot name="right"></slot>
    </div>
</template>
<script>
export default {
    name: 'header1',
    props: {
        title: {
            type: String
        }
    }
}

</script>
