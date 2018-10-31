<template>
    <formline :label="label">
        <input type="text" v-model="value"/>
    </formline>
</template>
<script>
import formline from '../../layout/formline.vue'

export default {
    name: 'textinput',
    props: {
        value: {
            required: true
        },
        label: {
            required: false
        }
    },
    components: { formline }
}

</script>
<style>
</style>
