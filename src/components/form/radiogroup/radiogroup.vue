<!-- src/components/form/radiogroup/radiogroup.vue -->
<!-- authed by sunjia032 2018-08-02 -->

<template>
    <div class="vp-radio-group">
	    <label class="vp-form-label" v-if="label">{{label}}</label>
	    <vp-radio v-for="(obj,i) in data" :key="name+'_'+obj.value" :id="name+'_'+obj.value" v-model="value" :value="obj.value" :text="obj.text" :disable="obj.disable"@change="onChange"></vp-radio>	    
    </div>
</template>

<script lang="ts" src="./radiogroup.tsx"></script>
<style lang="less" src="./../radio/radio.less"></style>
