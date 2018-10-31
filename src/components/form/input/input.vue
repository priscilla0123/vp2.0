<!-- src/components/form/input/input.vue -->
<!-- authed by sunjia032 2018-08-02 -->

<template>
	<div class="vp-input">		
		<label class="vp-form-label" :class="LabelClass" v-if="label">{{label}}</label>
		<div class="vp-input-prepend"><slot name="prepend"></slot></div>
		<div class="vp-input-wrap"> 
			<div class="vp-input-spin" v-if="type==='number'">
				<div @click="onAdd" class="vp-input-spin-add"></div>
				<div @click="onMinus" class="vp-input-spin-minus"></div>
			</div>
			<div class="vp-input-appendin" v-if="$slots['appendin'] && type!=='number'"><slot name="appendin"></slot></div>
			<div class="vp-input-prependin" v-if="$slots['prependin']"><slot name="prependin"></slot></div>
			<vp-icon class="vp-input-close" name="close" size="12" @click="onClear" v-if="Clearable && value && !Disable"></vp-icon> 
			<input ref="input" :type="type" :class="Klass" :disabled="Disable" v-model="value" :placeholder="placeholder" :style="Object.assign({},Padding,Width)"/> 
		</div>
		<slot name="append"></slot>
		<span class="vp-input-error" v-if="!Valid">{{error}}</span> 
	</div>
</template>

<script lang="ts" src="./input.tsx"></script>

<style lang="less" src="./input.less"></style>
