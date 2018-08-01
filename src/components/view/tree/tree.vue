<!-- src/components/view/tree/tree.vue -->
<!-- created by sunjia032 2018-07-12 -->

<template>
    <div class="vp-tree" :class="klass">
        <slot>
        	<ul v-for="node in Data">
        		<li>
                    <a :href="node.url">{{ node.name}}</a>
                    <vp-tree v-if="node.children" :data="node.children"></vp-tree>
                </li>        		
        	</ul>
        </slot>
    </div>
</template>

<script lang="ts" src="./tree.tsx"></script>

<style lang="less" src="./tree.less"></style>
