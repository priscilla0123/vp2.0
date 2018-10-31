<!-- src/components/form/checkboxgroup/checkboxgroup.vue -->
<!-- authed by sunjia032 2018-09-12 -->

<template>
    <div class="vp-checkbox-group">
	    <label class="vp-form-label" v-if="label">{{label}}</label>
	    <vp-checkbox v-for="(obj,i) in data" :key="name+'_'+obj.value" :id="name+'_'+obj.value" v-model="value" :value="obj.value" :text="obj.text" :disable="obj.disable" :part="obj.part" @change="onChange"></vp-checkbox> 
    </div>
</template>

<script lang="ts" src="./checkboxgroup.tsx"></script> 
