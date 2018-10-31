<template>
    <div class="example example_layout"> 
        <div class="title">Try</div>
        <div class="title">Example 1</div>
        <vp-layout>
        	<div slot="header" class="header vp-color-mask">I am Header</div>
        	<div slot="content" class="vp-color-bg">I am Content</div>
        	<div slot="footer" class="footer vp-color-mask">I am Footer</div>
        </vp-layout>
        <div class="title">Example 2</div>
        <vp-layout>
            <div slot="header" class="header vp-color-mask">I am Header</div>
        	<vp-layout>
        		<div slot="left" class="vp-color-sys-bg">I am side</div>
        		<div slot="content" class="vp-color-bg">I am Content</div>
        	</vp-layout>
        	<div slot="footer" class="footer vp-color-mask">I am Footer</div>
        </vp-layout>
        <div class="title">Example 3</div>
        <vp-layout>
            <div slot="header" class="header vp-color-mask">I am Header</div> 
        	<vp-layout>        		
        		<div slot="content" class="vp-color-bg">I am Content</div>
        		<div slot="right" style="width:300px" class="vp-color-sys-bg">I am side</div>
        	</vp-layout>
        	<div slot="footer" class="footer vp-color-mask">I am Footer</div>
        </vp-layout>
        <div class="title">Example 4</div>
        <vp-layout>
        	<div slot="header" class="header vp-color-mask">I am Header</div>
        	<vp-layout> 
        		<div slot="left" class="vp-color-sys-bg">I am side1</div>       		
        		<div slot="content" class="vp-color-bg">I am Content</div>
        		<div slot="right" class="vp-color-sys-bg">I am side2</div>
        	</vp-layout>
        	<div slot="footer" class="footer vp -color-mask">I am Footer</div>
        </vp-layout>
        <div class="title">Example 5</div>
        <vp-layout :collapse="side"> 
        	<div slot="left" class="vp-color-sys-bg">I am side</div>
            <vp-layout slot="content" class="vp-color-bg" style="height:400px">
				<div slot="header" class="header vp-color-mask">I am Header</div>
				<div slot="content" class="vp-color-mask">               
                    <vp-btn @click="close">{{side}}</vp-btn>   
                </div>
				<div slot="footer" class="footer vp-color-mask">I am Footer</div>
            </vp-layout>
        </vp-layout>
    </div>
</template>
<script src="./layout.js"></script>

<style lang="less" src="./layout.less"></style>