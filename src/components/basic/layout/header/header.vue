<!-- src/components/basic/layout/header/header.vue -->
<!-- authed by sunjia032 2018-07-12 -->

<template>
    <div class="vp-header" :class="klass" :style="{height:Height}">
        <slot></slot>
    </div>
</template>

<script lang="ts" src="./header.tsx"></script>

<style lang="less" src="./header.less"></style>
