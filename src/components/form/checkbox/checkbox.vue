<!-- src/components/form/checkbox/checkbox.vue -->
<!-- authed by sunjia032 2018-08-02 -->
<template> 
    <div :class="Klass">
	    <label class="vp-form-label" :class="LabelClass" v-if="label">{{label}}</label>
	    <label class="vp-checkbox-label" :for="id">
	    	<input type="checkbox" :value="value" :id="id" :disabled="Disable" @change="onChange" :checked="Checked" />
	    	<transition name="fade">
	    		<vp-icon size="16" name="check" v-if="!Checked"></vp-icon>
	    	</transition>
	    	<transition name="fade">
	    		<vp-icon size="16" color="#4475e8" name="checkselpart" v-if="Checked && part"></vp-icon>
	    	</transition>
	    	<transition name="fade">
	    		<vp-icon size="16" color="#4475e8" name="checksel" v-if="Checked && !part"></vp-icon>
	    	</transition>
	    	{{text}}
	    </label> 
    </div> 
</template>
<script lang="ts" src="./checkbox.tsx"></script>
<style lang="less" src="./checkbox.less"></style>