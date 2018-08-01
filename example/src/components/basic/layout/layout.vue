<template>
    <div class="example_layout"> 
        <div class="title">Try</div>
        <div class="title">Example 1</div>
        <vp-layout>
        	<vp-header klass="vp-color-mask">I am Header</vp-header>
        	<vp-content klass="vp-color-bg">I am Content</vp-content>
        	<vp-footer klass="vp-color-mask">I am Footer</vp-footer>
        </vp-layout>
        <div class="title">Example 2</div>
        <vp-layout>
        	<vp-header klass="vp-color-mask">I am Header</vp-header>
        	<vp-layout>
        		<vp-side klass="vp-color-sys-bg">I am side</vp-side>
        		<vp-content klass="vp-color-bg">I am Content</vp-content>
        	</vp-layout>
        	<vp-footer klass="vp-color-mask">I am Footer</vp-footer>
        </vp-layout>
        <div class="title">Example 3</div>
        <vp-layout>
        	<vp-header klass="vp-color-mask">I am Header</vp-header>
        	<vp-layout>        		
        		<vp-content klass="vp-color-bg">I am Content</vp-content>
        		<vp-side klass="vp-color-sys-bg">I am side</vp-side>
        	</vp-layout>
        	<vp-footer klass="vp-color-mask">I am Footer</vp-footer>
        </vp-layout>
        <div class="title">Example 4</div>
        <vp-layout>
        	<vp-header klass="vp-color-mask">I am Header</vp-header>
        	<vp-layout> 
        		<vp-side klass="vp-color-sys-bg">I am side1</vp-side>       		
        		<vp-content klass="vp-color-bg"><div>I am Content</div></vp-content>
        		<vp-side klass="vp-color-sys-bg" :width="'100'">I am side2</vp-side>
        	</vp-layout>
        	<vp-footer klass="vp-color-mask">I am Footer</vp-footer>
        </vp-layout>
        <div class="title">Example 5</div>
        <vp-layout> 
        	<vp-side klass="vp-color-sys-bg">I am side</vp-side>
    		<vp-content klass="vp-color-bg" style="height:400px"> 
                <vp-layout>
    				<vp-header klass="vp-color-mask">I am Header</vp-header>
    				<vp-content klass="vp-color-mask"><div>I am Content</div></vp-content>
    				<vp-footer klass="vp-color-mask">I am Footer</vp-footer>
                </vp-layout> 
    		</vp-content> 
        </vp-layout>
    </div>
</template>
<script src="./layout.js"></script>

<style lang="less" src="./layout.less"></style>