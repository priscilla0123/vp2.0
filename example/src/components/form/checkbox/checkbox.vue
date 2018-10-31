<template>
    <vp-row class="example example_checkbox" justify="center"> 
        <vp-col size="10">
        	<div class="title">{{Name}} Specification</div>
        	<table>
        		<tr>
        			<th>Component</th>
        			<th>Event & Attr</th>
        			<th>Default</th>
        			<th>Required(√/×)</th>
        			<th>Type</th> 
        			<th>Memo</th>
        		</tr>
                <tr>
                    <td rowspan="4">vp{{Name}}</td>
                    <td>@value</td>
                    <td>--</td>
                    <td>√</td>
                    <td>string|number</td> 
                    <td></td>
                </tr>
                <tr> 
                    <td>@checked</td>
                    <td>false</td>
                    <td>×</td>
                    <td>boolean</td> 
                    <td></td>
                </tr>  
                <tr> 
                    <td>@disable</td>
                    <td>false</td>
                    <td>×</td>
                    <td>boolean</td> 
                    <td></td>
                </tr>  
        		<tr> 
        			<td>@text</td>
        			<td>--</td>
        			<td>×</td>
        			<td>string</td> 
        			<td>选项文字</td>
        		</tr>  
        	</table>
        </vp-col>
        <vp-col size="10" v-if="show">
        	<div class="title">{{Name}} Example</div>  
            <vp-row>
                <vp-checkbox value="1"  text="星期一" label="Checkbox" id="1" v-model="weekday"></vp-checkbox>
                <vp-checkbox value="2"  text="星期二" id="2" v-model="weekday" :part="true"></vp-checkbox>
                <vp-checkbox value="3"  text="星期三" id="3" v-model="weekday" :disable="true"></vp-checkbox> 
                <vp-checkbox value="4"  text="星期四" id="4" v-model="weekday" disable></vp-checkbox>
            </vp-row>
            <vp-row>
                <vp-radio label="Part" id="abd" :value="true" text="true" name="part" v-model="data[2].part"></vp-radio>
            </vp-row>
            <vp-row>
            <vp-radio :value="false" id="dgd" text="false" name="part" v-model="data[2].part"></vp-radio>
                <vp-checkboxgroup :data="data" label="Checkboxgroup" v-model="weekday" name="weekday"></vp-checkboxgroup>
            </vp-row>
            <vp-row>
                <span>&nbsp;&nbsp;SELECTED CHECKBOXGROUP:&nbsp;&nbsp;{{weekday.toString()}}</span>
            </vp-row>
        </vp-col>   
    </vp-row>
</template>
<script src="./checkbox.js"></script>

<style lang="less" src="./checkbox.less"></style>