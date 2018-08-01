<!-- src/components/basic/grid/row/row.vue -->
<!-- authed by sunjia032 2018-07-19 -->

<template>
    <div class="vp-row" :class="Klass" :style="{'padding-left':Gap,'padding-right':Gap}">
        <slot></slot> 
    </div>
</template>

<script lang="ts" src="./row.tsx"></script>

<style lang="less" src="./row.less"></style>
