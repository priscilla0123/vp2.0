<!-- src/components/basic/button/button.vue -->
<!-- authed by sunjia032 2018-07-24 -->

<template>
    <button :class="Klass" :disable="disable" :style="Style" @click.stop="$emit('click')">
    		<vp-icon  v-if="icon" :name="icon" :size="iconSize.replace('px','')" :color="color"></vp-icon>
    		<slot></slot> 
    		<vp-icon  v-if="iconafter" :name="iconafter" :size="iconSize.replace('px','')" :color="color"></vp-icon>
    </button>
</template>

<script lang="ts" src="./button.tsx"></script>

<style lang="less" src="./button.less"></style>
