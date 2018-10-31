<!-- src/components/form/radio/radio.vue -->
<!-- authed by sunjia032 2018-08-02 -->

<template>
    <div :class="Klass">
	    <label class="vp-form-label" :class="LabelClass" v-if="label">{{label}}</label>
	    <label class="vp-radio-label" :for="id">
	    	<input type="radio" :name="name" :value="value" :id="id" :disabled="Disable" @change="onChange" :checked="Checked" />
	    	<transition name="fade">
	    		<vp-icon size="16" name="radio" v-if="!Checked"></vp-icon>
	    	</transition>
	    	<transition name="fade">
	    		<vp-icon size="16" color="#4475e8" name="radiosel" v-if="Checked"></vp-icon>
	    	</transition>
	    	{{text}}
	    </label> 
    </div>
</template>

<script lang="ts" src="./radio.tsx"></script>

<style lang="less" src="./radio.less"></style>
