<template>
    <vp-row class="example example_button" justify="center"> 
        <vp-col size="11" style="line-height:40px">
            <div class="title">Button Specification</div>
            <table>
                <tr>
                    <th>Component</th>
                    <th>Attr</th>
                    <th>Default</th>
                    <th>Required(√/×)</th>
                    <th>Type</th>
                    <th>Have a Try</th>
                    <th>Memo</th>
                </tr>
                <tr>
                    <td rowspan="7">vpBtn</td>
                    <td>@type</td>
                    <td>--</td>
                    <td>×</td>
                    <td>Enum</td>
                    <td></td>
                    <td>hollow/dashed/text</td>
                </tr>
                <tr> 
                    <td>@color</td>
                    <td>--</td>
                    <td>×</td>
                    <td>String</td>
                    <td>
                        <input type="text" v-model="color"/>
                    </td>
                    <td><span class="vp-color-danger">#111</span> or <span class="vp-color-danger">rgb(0,0,0)</span> or <span class="vp-color-danger">green</span> or sys/danger/warn/success/highlight</td>
                </tr>
                <tr> 
                    <td>@size</td>
                    <td>--</td>
                    <td>×</td>
                    <td>String/[Int,Int,Int]</td>
                    <td>
                        <input type="text" v-model="size"/>
                    </td>
                    <td><span class="vp-color-danger">small</span> or <span class="vp-color-danger">large</span> or <span class="vp-color-danger">[height,width,font-size]</span></td>
                </tr>
                <tr> 
                    <td>@shape</td>
                    <td>--</td>
                    <td>×</td>
                    <td>Enum</td>
                    <td>
                        <label :for="shape_n"><input type="radio" v-model="shape" :id="shape_n" name="shape" value="normal"/>normal</label>
                        <label :for="shape_r"><input type="radio" v-model="shape" :id="shape_r" name="shape" value="round"/>round</label>
                        <vp-btn size="small" @click="changeShape">Go</vp-btn>
                    </td>
                    <td><span class="vp-color-danger">round</span></td>
                </tr>
                <tr> 
                    <td>@disable</td>
                    <td>false</td>
                    <td>×</td>
                    <td>Boolean</td>
                    <td>
                        <label :for="disable1"><input type="radio" v-model="disable" :id="disable1" name="disable" :value="true"/>True</label>
                        <label :for="disable2"><input type="radio" v-model="disable" :id="disable2" name="disable" :value="false"/>False</label>      
                    </td>
                    <td></td>
                </tr>
                <tr> 
                    <td>@icon</td>
                    <td>--</td>
                    <td>×</td>
                    <td>String</td>
                    <td>
                        <label :for="icon1"><input type="checkbox" v-model="icon" :id="icon1" name="icon" value="search"/>Icon</label>      
                    </td>
                    <td></td>
                </tr> 
                <tr> 
                    <td>@iconafter</td>
                    <td>--</td>
                    <td>×</td>
                    <td>String</td>
                    <td> 
                        <label :for="icon2"><input type="checkbox" v-model="iconafter" :id="icon2" name="iconafter" value="triangleR"/>Icon</label>       
                    </td>
                    <td></td>
                </tr> 
            </table>
        </vp-col>
        <vp-col size="10">
            <div class="title">Button Example</div>
            <vp-row class="vp-color-bg" v-if="show"> 
                <vp-col center size="1"><div style="font-weight:bold">Size / Type</div></vp-col>  
                <vp-col center size="2"><div style="font-weight:bold">normal</div></vp-col>  
                <vp-col center size="2"><div style="font-weight:bold">hollow</div></vp-col>  
                <vp-col center size="2"><div style="font-weight:bold">dashed</div></vp-col>  
                <vp-col center size="2"><div style="font-weight:bold">text</div></vp-col>  
                <vp-col center size="3"><div style="font-weight:bold">--</div></vp-col>
                <!--  -->
                <vp-col center size="1"><div style="font-weight:bold">small</div></vp-col>  
                <vp-col center size="2"><div size="large"><vp-btn size="small">确定</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn size="small" type="hollow">OK</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn size="small" type="dashed">取消</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn size="small" type="text">Cancel</vp-btn></div></vp-col>
                <vp-col center size="3"><div><vp-btn size="small" :shape="shape" :disable="disable" :color="color" :icon="Icon" :iconafter="Iconafter">确定</vp-btn></div></vp-col>
                <!--  -->
                <vp-col center size="1"><div style="font-weight:bold">normal</div></vp-col>  
                <vp-col center size="2"><div><vp-btn>确定</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn type="hollow">ok</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn type="dashed">取消</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn type="text">Cancel</vp-btn></div></vp-col>
                <vp-col center size="3" :shape="shape"><div><vp-btn :shape="shape" :disable="disable" :color="color" type="hollow" :icon="Icon" :iconafter="Iconafter">确定</vp-btn></div></vp-col>
                <!--  -->
                <vp-col center size="1"><div style="font-weight:bold">large</div></vp-col>  
                <vp-col center size="2"><div><vp-btn size="large">确定</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn size="large" type="hollow">ok</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn size="large" type="dashed">取消</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn size="large" type="text">Cancel</vp-btn></div></vp-col>
                <vp-col center size="3"><div><vp-btn size="large" :shape="shape" :disable="disable" :color="color" type="dashed" :icon="Icon" :iconafter="Iconafter">确定</vp-btn></div></vp-col>
                <!--  -->
                <vp-col center size="1"><div style="font-weight:bold">userdefine</div></vp-col>  
                <vp-col center size="2"><div><vp-btn ref="usersize" :size="Size">{{'h:'+sizeH+' w:'+sizeW}}</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn ref="usersize" :size="Size" type="hollow">{{'h:'+sizeH+' w:'+sizeW}}</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn ref="usersize" :size="Size" type="dashed">{{'h:'+sizeH+' w:'+sizeW}}</vp-btn></div></vp-col>
                <vp-col center size="2"><div><vp-btn ref="usersize" :size="Size" type="text">{{'h:'+sizeH+' w:'+sizeW}}</vp-btn></div></vp-col> 
                <vp-col center size="3"><div><vp-btn ref="usersize" :size="Size" :shape="shape" :disable="disable" :color="color" type="text" :icon="Icon" :iconafter="Iconafter">{{'h:'+sizeH+' w:'+sizeW}}</vp-btn></div></vp-col>  
            </vp-row>          
        </vp-col> 
        <vp-col size="11" style="line-height:40px">
            <div class="title">Button Group Specification</div>
            <table>
                <tr>
                    <th>Component</th>
                    <th>Attr</th>
                    <th>Default</th>
                    <th>Required(√/×)</th>
                    <th>Type</th>
                    <th>Have a Try</th>
                    <th>Memo</th>
                </tr>
                <tr> 
                    <td rowspan="2">vpBtngroup</td>
                    <td>@shape</td>
                    <td>--</td>
                    <td>×</td>
                    <td>Enum</td>
                    <td>
                        <label :for="shape_n"><input type="radio" v-model="shapeG" :id="shape_n" name="shape" value="normal"/>normal</label>
                        <label :for="shape_r"><input type="radio" v-model="shapeG" :id="shape_r" name="shape" value="round"/>round</label>
                        <vp-btn size="small" @click="changeShape">Go</vp-btn>
                    </td>
                    <td><span class="vp-color-danger">round</span></td>
                </tr>
                <tr> 
                    <td>@vertical</td>
                    <td>false</td>
                    <td>×</td>
                    <td>Boolean</td>
                    <td>
                        <label :for="vertical1"><input type="radio" v-model="vertical" :id="vertical1" name="vertical" :value="true" @click="changeShape"/>True</label>
                        <label :for="vertical2"><input type="radio" v-model="vertical" :id="vertical2" name="vertical" :value="false" @click="changeShape"/>False</label>      
                    </td>
                    <td></td>
                </tr> 
            </table>
        </vp-col>
        <vp-col size="10">
            <div class="title">Button Group Example</div>
            <vp-row class="vp-color-bg" v-if="show"> 
                <vp-col size="1"><div style="font-weight:bold">group</div></vp-col>  
                <vp-col size="11"><div><div>
                    <vp-btngroup :shape="shapeG" :vertical="vertical">
                        <vp-btn color="danger">A</vp-btn>
                        <vp-btn type="hollow">B</vp-btn>
                        <vp-btn>C</vp-btn>
                        <vp-btn type="dashed">D</vp-btn>
                    </vp-btngroup>
                </div></div></vp-col>  
            </vp-row>          
        </vp-col>         
    </vp-row>
</template>
<script src="./button.js"></script>

<style lang="less" src="./button.less"></style>