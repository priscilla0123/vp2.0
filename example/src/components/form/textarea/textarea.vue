<template>
    <vp-row class="example example_input" justify="center"> 
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
                    <td rowspan="13">vp{{Name}}</td>
                    <td>@disable</td>
                    <td>false</td>
                    <td>×</td>
                    <td>Boolean</td> 
                    <td>是否可用</td>
                </tr>   
                <tr>
                    <td>@placeholder</td>
                    <td>--</td>
                    <td>×</td>
                    <td>String</td> 
                    <td></td>
                </tr>  
                <tr>
                    <td>@valid</td>
                    <td>true</td> 
                    <td>×</td>
                    <td>Boolean | Function</td>
                    <td>标红</td>
                </tr>   
                <tr>
                    <td>@error</td>
                    <td>--</td>
                    <td>×</td> 
                    <td>String</td>
                    <td>错误提示</td>
                </tr>   
                <tr>
                    <td>@label</td>
                    <td>--</td>
                    <td>×</td>
                    <td>String</td> 
                    <td>字段标签</td>
                </tr>   
                <tr>
                    <td>@require</td>
                    <td>false</td> 
                    <td>×</td>
                    <td>Boolean</td>
                    <td>是否显示*</td>
                </tr>    
                <tr>
                    <td>@max</td>
                    <td>--</td> 
                    <td>×</td>
                    <td>Number</td>
                    <td>长度上限</td>
                </tr>    
                <tr>
                    <td>@height</td>
                    <td>--</td> 
                    <td>×</td>
                    <td>String</td>
                    <td>eg:'100px'</td>
                </tr>     
                <tr>
                    <td>@width</td>
                    <td>--</td> 
                    <td>×</td>
                    <td>String</td>
                    <td>eg:'100px'</td>
                </tr>                   
        	</table>
        </vp-col>
        <vp-col size="10" v-if="show">
        	<div class="title">{{Name}} Example</div> 
            <vp-row>
                <vp-textarea v-model="item1" placeholder="请输入..." require label="必填字段"></vp-textarea>
            </vp-row> 
            <vp-row> 
                <vp-textarea v-model="item2" :valid="valid" :error="errormsg" label="字段验证"></vp-textarea>
            </vp-row> 
            <vp-row> 
                <vp-textarea v-model="item3" label="长度上限" max="10"></vp-textarea>
            </vp-row>
            <vp-row> 
                <vp-textarea disable v-model="item4" label="不可编辑" max="3"></vp-textarea>
            </vp-row>   
            <vp-row> 
                <vp-textarea width="300px"  height="300px" v-model="item5" label="自定义宽高"></vp-textarea>
            </vp-row>
        </vp-col>     
    </vp-row>
</template>
<script src="./textarea.js"></script>

<style lang="less" src="./textarea.less"></style>