<!-- src/components/basic/layout/layout.vue -->
<!-- authed by sunjia032 2018-07-12 -->

<template>
    <div class="vp-layout" :class="Klass"> 
        <div v-if="$slots.header" class="vp-header">
        	<slot name="header"></slot>
        </div>
        <div v-if="$slots.left && !collapse" class="vp-side">
        	<slot name="left"></slot> 
    	</div>  
    	<div v-if="$slots.content" class="vp-content">
        	<slot name="content"></slot>
        </div>
        <slot></slot>
        <div v-if="$slots.right" class="vp-side">
        	<slot name="right"></slot>
    	</div>
        <div v-if="$slots.footer" class="vp-footer">
        	<slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts" src="./layout.tsx"></script>

<style lang="less" src="./layout.less"></style>
