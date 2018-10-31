<template>
    <vp-row class="example example_radio" justify="center"> 
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
                    <td rowspan="6">vp{{Name}}</td>
                    <td>@value</td>
                    <td>--</td>
                    <td>√</td>
                    <td>string | number</td> 
                    <td>值</td>
                </tr>
                <tr> 
                    <td>@text</td>
                    <td>--</td>
                    <td>√</td>
                    <td>string</td> 
                    <td>选项文字</td>
                </tr>
                <tr> 
                    <td>@id</td>
                    <td>--</td>
                    <td>√</td>
                    <td>string | number</td> 
                    <td></td>
                </tr> 
                <tr> 
                    <td>@name</td>
                    <td>--</td>
                    <td>√</td>
                    <td>string | number</td> 
                    <td></td>
                </tr>  
                <tr> 
                    <td>@disable</td>
                    <td>false</td>
                    <td>×</td>
                    <td>boolean</td> 
                    <td>是否禁用</td>
                </tr>   
                <tr> 
                    <td>@label</td>
                    <td>false</td>
                    <td>×</td>
                    <td>string</td> 
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="6">vp{{Name}}group</td>
                    <td>@data</td>
                    <td>--</td>
                    <td>√</td>
                    <td>[{value:string|number,text:string,disable:boolean}]</td> 
                    <td>值</td>
                </tr>                
                <tr> 
                    <td>@name</td>
                    <td>--</td>
                    <td>√</td>
                    <td>string | number</td>  
                    <td></td>
                </tr>   
                <tr> 
                    <td>@label</td>
                    <td>false</td>
                    <td>×</td>
                    <td>string</td> 
                    <td></td>
                </tr> 
            </table>
        </vp-col>
        <vp-col size="10" v-if="show">
            <div class="title">{{Name}} Example</div> 
            <vp-row>
                <vp-radio value="1"  text="星期一" label="RADIO" id="1" v-model="weekday" name="weekday"></vp-radio>
                <vp-radio value="2"  text="星期二" id="2" v-model="weekday" name="weekday"></vp-radio>
                <vp-radio value="3"  text="星期三" id="3" v-model="weekday" :disable="true" name="weekday"></vp-radio>  
                <vp-radio value="4"  text="星期四" id="4" v-model="weekday" disable name="weekday"></vp-radio>  
            </vp-row>
            <vp-row>
                <span>&nbsp;&nbsp;SELECTED RADIO:&nbsp;&nbsp;{{weekday}}</span>
            </vp-row>
            <vp-row>
                <vp-radiogroup :data="data" label="RADIOGROUP" v-model="weekday" name="weekday"></vp-radiogroup>
            </vp-row>
            <vp-row>
                <span>&nbsp;&nbsp;SELECTED RADIOGROUP:&nbsp;&nbsp;{{weekday}}</span>
            </vp-row>
        </vp-col> 
             
    </vp-row>
</template>
<script src="./radio.js"></script>

<style lang="less" src="./radio.less"></style>