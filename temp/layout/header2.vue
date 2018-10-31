<template>
    <div class="col-title page-partline">
        {{title}}
        <slot class="col-title-add" name="right"></slot>
    </div>
</template>
<script>
export default {
    name: 'header2',
    props: {
        title: {
            type: String
        }
    }
}

</script>
