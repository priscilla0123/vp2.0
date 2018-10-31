<template>
    <vp-row class="example example_icon" justify="center"> 
        <vp-col size="10" style="line-height:40px">
            <div class="title">Icon Specification</div>
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
                    <td rowspan="3">vpIcon</td>
                    <td>@name</td>
                    <td>--</td>
                    <td>√</td>
                    <td>String</td>
                    <td>       
                    </td>
                    <td></td>
                </tr>
                <tr> 
                    <td>@size</td>
                    <td>14</td>
                    <td>×</td>
                    <td>Number</td>
                    <td>
                        <input type="number" v-model="size" max="100" min="12"/>
                    </td>
                    <td></td>
                </tr>
                <tr> 
                    <td>@color</td>
                    <td>--</td>
                    <td>×</td>
                    <td>String</td>
                    <td>
                        <input type="text" v-model="color"/>
                    </td>
                    <td><span class="vp-color-danger">#111</span> or <span class="vp-color-danger">rgb(0,0,0)</span> or <span class="vp-color-danger">green</span></td>
                </tr> 
            </table>
        </vp-col>
        <vp-col size="10">
            <div class="title">Icon Example(all valid prop:name is listed)</div>
            <vp-row class="vp-color-bg">
                <vp-col center :key="name" v-for="name in namelist" size="1"><div>
                    {{name}}
                    <vp-icon :name="name" :size="size" :color="color"></vp-icon>
                </div></vp-col>                 
            </vp-row>          
        </vp-col>         
    </vp-row>
</template>
<script src="./icon.js"></script>

<style lang="less" src="./icon.less"></style>