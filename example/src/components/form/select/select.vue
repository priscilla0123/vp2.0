<template>
    <vp-row class="example example_select" justify="center"> 
        <vp-col size="10">
        	<div class="title">{{Name}} Specification</div>
        	<table>
        		<tr>
        			<th>Component</th>
        			<th>Event & Attr</th>
        			<th>Default</th>
        			<th>Required(√/×)</th>
        			<th>Type</th>
        			<th>Have a Try</th>
        			<th>Memo</th>
        		</tr>
        		<tr>
        			<td rowspan="3">vp{{Name}}</td>
        			<td>@</td>
        			<td></td>
        			<td></td>
        			<td></td>
        			<td></td>
        			<td></td>
        		</tr>  
        	</table>
        </vp-col>
        <vp-col size="10" v-if="show">
        	<div class="title">{{Name}} Example</div> 
            <vp-select></vp-select>
        </vp-col>    
    </vp-row>
</template>
<script src="./select.js"></script>

<style lang="less" src="./select.less"></style>