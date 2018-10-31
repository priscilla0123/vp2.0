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
                    <td>@type</td>
                    <td>text</td>
                    <td>×</td>
                    <td>Enum</td> 
                    <td>类型：{text,number}</td>
                </tr> 
                <tr>
                    <td>@disable</td>
                    <td>false</td>
                    <td>×</td>
                    <td>Boolean</td> 
                    <td>是否可用</td>
                </tr>  
                <tr>
                    <td>@clearable</td>
                    <td>false</td>
                    <td>×</td>
                    <td>Boolean</td> 
                    <td>是否可清除</td>
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
                    <td>@width</td>
                    <td>--</td> 
                    <td>×</td>
                    <td>String</td>
                    <td>自定义宽度</td>
                </tr>   
                <tr>
                    <td>$prepend</td>
                    <td>--</td> 
                    <td>×</td>
                    <td>--</td>
                    <td>自定义前置元素</td>
                </tr>  
                <tr>
                    <td>$prependin</td>
                    <td>--</td> 
                    <td>×</td>
                    <td>--</td>
                    <td>自定义前置Icon</td>
                </tr>  
                <tr>
                    <td>$append</td>
                    <td>--</td> 
                    <td>×</td>
                    <td>--</td>
                    <td>自定义后置元素</td>
                </tr> 
        		<tr>
        			<td>$appendin</td>
        			<td>--</td> 
        			<td>×</td>
        			<td>--</td>
        			<td>自定义后置Icon</td>
        		</tr>  
        	</table>
        </vp-col>
        <vp-col size="10" v-if="show">
        	<div class="title">{{Name}} Example</div> 
            <vp-row>
                <vp-input v-model="item1" placeholder="请输入..." require label="必填字段"></vp-input>
            </vp-row>
            <vp-row> 
                <vp-input clearable v-model="item2" label="可清空"></vp-input>
            </vp-row>
            <vp-row> 
                <vp-input v-model="item3" :valid="valid" :error="errormsg" label="字段验证"></vp-input>
            </vp-row>
            <vp-row> 
                <vp-input disable v-model="item4" label="不可编辑"></vp-input>
            </vp-row>
            <vp-row> 
                <vp-input clearable type="number" v-model="item5" label="数字输入"><vp-icon name="search" slot="appendin"></vp-icon></vp-input>
            </vp-row> 
            <vp-row> 
                <vp-input v-model="item6" label="append"><div slot="append">元/平</div></vp-input>
            </vp-row> 
            <vp-row> 
                <vp-input clearable v-model="item8" label="appendin"><vp-icon name="search" slot="appendin" @click="search"></vp-icon></vp-input>
            </vp-row> 
            <vp-row> 
                <vp-input v-model="item9" label="prepend"><div slot="prepend">元/平</div></vp-input>
            </vp-row> 
            <vp-row> 
                <vp-input width="300px" v-model="item10" label="prependin">
                    <vp-icon name="hot" slot="prependin" @click="hot"></vp-icon>
                    <span slot="append">自定义宽度</span>
                </vp-input>
            </vp-row>  
            <vp-row>
                <vp-input :valid="valid7" error="10字以内..." require clearable v-model="item7" label="组合应用"><vp-btn  style="margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0" slot="append" :size="[30,30,12]" icon="search"></vp-btn></vp-input>
            </vp-row> 
            <vp-row>
                <vp-input clearable v-model="item11" label="组合应用2"><div slot="prepend">元/平</div></vp-input>
            </vp-row>
        </vp-col>     
    </vp-row>
</template>
<script src="./input.js"></script>

<style lang="less" src="./input.less"></style>