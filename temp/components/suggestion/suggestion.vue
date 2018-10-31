<template>
<span class="vp-suggestion">
    <span class="selectedtext">
        <i></i>
        <input type="text" :value="selectText" readonly  @click="showList=true" :placeholder="placeholder">
        <i class="c" @click="clearSelected" v-if="selectText"></i>
    </span>
    <div class="droplist" v-if="showList">
        <p><input type="text" placeholder="请输入搜索关键字" v-model.trim="KeyWord"></p>
        <ul v-if="listData.length>0">
            <li v-for="item in listData" @click="select(item)">
                <label>
                    <input type="radio" :value="item.value" name="selectitem" v-model="selectedId">
                    <span v-html="item.text"></span>
                </label>
            </li>
        </ul>
    </div>
</span>
</template>
<script>
    import vpMask from '../mask';
    import Overlay from '../overlay';
    import Select from '../select';
    import Vue from 'vue';
    export default{
        name: 'suggestion',
        props: {
            //success,danger,sys,plain,highlight,main
            text: {
                type: String,
                default: '',
            },
            keyName:{
                type: String,
                default: ''
            },
            listData:{
                type: Array,
                default: []
            },
            value:{
                type: Number | String,
                default: ''
            },
            placeholder:{
                type: String,
                default: ''
            },
            id: {
                type:String,
                default: ''
            },
            sign: {
                type: String,
                default: ''
            },
            arr: {
                type: Array,
                default(){
                    return [];
                }
            }
        },
        data(){
            return {
                showList:false,
                selectText:this.text,
                KeyWord:"",
                selectList:this.listData,
                selectedId:this.value
            }
        },
        methods:{
            select(item){
                var _this = this;
                _this.selectText = item.text;
                if (this.arr&&this.arr.length>0) {
                    this.arr.forEach(function(v, i) {
                        if (v.value == item.value) _this.selectText = v.text;
                    })
                }
                this.showList = false;
                if(this.sign) this.selectText=this.selectText.substring(0,this.selectText.indexOf(this.sign));
                this.$emit('select',item,this.id);
                this.$emit('input', this.selectedId);
            },
            clearSelected(){
                this.selectedId = this.selectText = "";
                this.$emit('clear',this.id);
            }
        },
        components: {
            vpMask,
            Overlay,
            vpSelect:Select
        },
        mounted(){
            document.addEventListener('click', e => {
                if(this.$el && this.$el.compareDocumentPosition(e.target) < 20) {
                    this.showList = false;
                }
            });
        },
        watch:{
            KeyWord:function(){
                this.$emit('update',this.KeyWord,this.listData,this.id);
            },
            value:function(n,o){
                if(n==""){
                    this.selectedId = this.selectText = "";
                }
            }
        }
    }
</script>
<style scoped>
.vp-suggestion{
    margin-right: 5px;
    position: relative;
    display: inline-block;
    .droplist {
        margin-top: 2px;
        border: 1px solid #ccc;
        border-radius: 4px;
        position: absolute;
        z-index: 10;
        background-color: #fff;
        input[type=text]{
            margin: 5px 10px;
            width: 200px;
            border-radius: 4px;
            display: block;
        }
    }
    >span{
        position: relative;
        i:first-child:before{
            content: '\e60a';
            color: #e1e1e1;
            font-family: "iconfont" !important; 
            position: absolute;
            top: -2px;
            left: 3px;
            font-size: 14px;
        }
        .c:before{
            content: '\e65e';
            color: #e1e1e1;
            font-family: "iconfont" !important; 
            position: absolute;
            top: -2px;
            right: 10px;
            font-size: 14px;
            cursor: pointer;
        }
        input{
            padding:0 20px;
            width: 150px;
        }
        .arrow_icon{
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -3px;
            display: block;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #000;
            -webkit-transition: all .5s;
            -moz-transition: all .5s;
            transition: all .5s;
        }
    }
    ul{
        padding: 5px 10px;
        width: 200px;
        max-height: 200px;
        line-height: 24px;
        overflow-y: scroll;
        background-color: #fff;
        z-index: 10;
        label{
            width: 100%;
            display: block;
            text-align: left;
            input{
                margin-right: 10px;
                width: auto;
                height: auto;
                opacity: 1;
                vertical-align: middle;
            }
        }
    }
}
</style>