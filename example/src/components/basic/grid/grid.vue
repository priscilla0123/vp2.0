<template>
    <vp-row class="example_grid" justify="center"> 
        <vp-col size="10">
        	<div class="title">Row Specification</div>
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
        			<td rowspan="3">vpRow</td>
        			<td>@size</td>
        			<td>12</td>
        			<td>×</td>
        			<td>Number</td>
        			<td>
        				<label :key="i" v-for="i in 7" :for="'row_size'+i"><input type="radio" v-model="rowsize" :id="'row_size'+i" name="row_size" :value="i+5"/>{{i+5}}</label>		
        			</td>
        			<td>int from <span class="vp-color-danger">1 </span>to <span class="vp-color-danger">12</span></td>
        		</tr>
        		<tr> 
        			<td>@justify</td>
        			<td>left</td>
        			<td>×</td>
        			<td>String</td>
        			<td>
        				<label for="left"><input type="radio" v-model="rowjustify" name="row_center" id="left" value="left"/>left</label>
        				<label for="right"><input type="radio" v-model="rowjustify" name="row_center" id="right" value="right"/>right</label>
        				<label for="center"><input type="radio" v-model="rowjustify" name="row_center" id="center" value="center"/>center</label>
        				<label for="between"><input type="radio" v-model="rowjustify" name="row_center" id="between" value="between"/>between</label>
        				<label for="around"><input type="radio" v-model="rowjustify" name="row_center" id="around" value="around"/>around</label>
        			</td>
        			<td> only string <span class="vp-color-danger">'left'</span>,<span class="vp-color-danger">'right'</span>,<span class="vp-color-danger">'center'</span>,<span class="vp-color-danger">'between'</span>,<span class="vp-color-danger">'around'</span></td>
        		</tr>
        		<tr> 
        			<td>@gap</td>
        			<td>0</td>
        			<td>×</td>
        			<td>Number</td>
        			<td>
        				<input type="number" v-model="rowgap" max="100" min="0"/> 
        				<button type="button" @click="go">go</button>
        			</td>
        			<td>int from <span class="vp-color-danger">0</span> to <span class="vp-color-danger">100</span></td>
        		</tr> 
        	</table>
        </vp-col>
        <vp-col size="10" v-if="show">
        	<div class="title">Row Example</div>
        	<vp-row class="vp-color-bg" :size="rowsize" :justify="rowjustify" :gap="rowgap">
        		<vp-col><div>col size:12</div></vp-col> 
        	</vp-row>       	
        	<vp-row class="vp-color-bg" :size="rowsize" :justify="rowjustify" :gap="rowgap">
        		<vp-col :key="i" v-for="i in 2" size='4'><div>col size:4</div></vp-col> 
        	</vp-row>      	
        	<vp-row class="vp-color-bg" :size="rowsize" :justify="rowjustify" :gap="rowgap">
        		<vp-col  :key="i" v-for="i in 3" size='3'><div>col size:3</div></vp-col> 
        	</vp-row>     	
        	<vp-row class="vp-color-bg" :size="rowsize" :justify="rowjustify" :gap="rowgap">
        		<vp-col :key="i" v-for="i in 4" size='2'><div>col size:2</div></vp-col>   
        	</vp-row>    	
        	<vp-row class="vp-color-bg" :size="rowsize" :justify="rowjustify" :gap="rowgap">
        		<vp-col :key="i" v-for="i in 12" size='1'><div>col size:1</div></vp-col>   
        	</vp-row>        	
        </vp-col> 
        <vp-col size="10">
        	<div class="title">Col Specification</div>
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
        			<td rowspan="2">vpCol</td>
        			<td>@size</td>
        			<td>12</td>
        			<td>×</td>
        			<td>Number</td>
        			<td>
        				<label :key="i" v-for="i in 12" :for="'col_size'+i"><input type="radio" v-model="colsize" :id="'col_size'+i" name="col_size" :value="i"/>{{i}}</label>
        			</td>
        			<td>int from <span class="vp-color-danger">1</span> to <span class="vp-color-danger">12</span></td>
        		</tr>
        		<tr>
        			<td>@offset</td>
        			<td>0</td>
        			<td>×</td>
        			<td>Number</td>
        			<td>
        				<label :for="'col_offset'+i" :key="i" v-for="i in 12"><input type="radio" v-model="coloffset" :id="'col_offset'+i" name="col_offset" :value="i-1" />{{i-1}}</label>
        			</td>
        			<td>int from <span class="vp-color-danger">0</span> to <span class="vp-color-danger">11</span></td>
        		</tr>
        	</table>
        </vp-col>
        <vp-col size="10">
        	<div class="title">Col Example</div>
        	<vp-row class="vp-color-bg">
        		<vp-col :size='colsize'><div>col size:{{colsize}}</div></vp-col>
        		<vp-col :size='colsize' :offset="coloffset"><div>offset:{{coloffset}}</div></vp-col>     
        	</vp-row>
        </vp-col>        
    </vp-row>
</template>
<script src="./grid.js"></script>

<style lang="less" src="./grid.less"></style>