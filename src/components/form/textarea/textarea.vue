<!-- src/components/form/textarea/textarea.vue -->
<!-- authed by sunjia032 2018-08-16 -->

<template>
	<div class="vp-textarea">		
		<label class="vp-textarea-label" :class="LabelClass" v-if="label">{{label}}</label> 
		<div class="vp-textarea-wrap">  
			<textarea ref="textarea" :class="Klass" :disabled="Disable" :style="WidthHeight" v-model="value" :placeholder="placeholder"></textarea>
			<br/> 
			<span class="vp-textarea-count" :class="CountClass">{{count}}<span class="vp-textarea-max" v-if="max">/ {{max}}</span></span>
			<span class="vp-textarea-error" v-if="!Valid">{{error}}</span>
		</div> 
	</div>
</template>

<script lang="ts" src="./textarea.tsx"></script>

<style lang="less" src="./textarea.less"></style>
