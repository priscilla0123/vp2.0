<template>
<div>
    <upload style="display:inline-block;" :id="id" :text="text" :multiple="multiple" :file-type="fileType" :url="url" :file-max-size="fileMaxSize" :file-max-num="fileMaxNum" :show-progress="showProgress" :show-file-name="showFileName" :progress-type="progressType" @complete="uploadComplete"></upload>
    <a class="uploaderlist_a" v-for="(item,index) in tempData" :href="previewUrl+item.sKey+'.'+item.sExt">{{item.sFilename}}
        <vp-icon name="error" size="18" @click.native.prevent="removeFile(item.sKey)"></vp-icon>
    </a>
</div>

</template>
<style lang="less" scoped>
.uploaderlist_a{
    display: inline-block;
    line-height: 33px;
    margin-right: 30px;
    vertical-align: top;
    position: relative;
    svg{
        position:absolute;
        right: -18px;
        top: 10px;
    }
}
</style>
<script>
import Uploader from '../../components/uploader';
import vpIcon from '../../components/icon/index'
var Uploaderlist = {
    name: 'uploaderlist',
    props: {
        text: {
            required:false
        },
        id:{
            required:false
        },
        multiple:{
            required:false
        },
        fileType:{
            required:false
        },
        url:{
            required:false
        },
        fileMaxSize:{
            required:false
        },
        fileMaxNum:{
            required:false
        },
        showProgress:{
            required:false
        },
        showFileName:{
            required:false
        },
        progressType:{
            required:false
        },
        previewUrl:{
            type: String
        },
        init:{
            type: Array | Object,
            default: () => []
        },
        uploadFail:{
            //上传失败触发回调函数
            type:Function
        }
    },
    data() {
        return {
            tempData:[]
        }
    },
    methods: {
        uploadComplete(data){
            if(data.code) {
                this.toast.error(data.file);
                if(this.uploadFail){
                   this.uploadFail(data); 
                }
                return;
            }
            for(var i in data){
                data = data[i];
                break;
            }
            this.tempData.push(data);
            this.$emit("complete",this.tempData,data);
        },
        removeFile(sKey){
            this.tempData.forEach((item,index) => {
                if(item.sKey == sKey){
                    this.tempData.splice(index,1);
                }
            })
            this.$emit("complete",this.tempData);
        }
    }, 
    components: {
        upload: Uploader,
        vpIcon: vpIcon
    },
    mounted(){
        this.tempData = this.init;
    },
    watch:{
        init:function(newVal,oldVal){
            this.tempData = newVal;
        }
    }
}
export default Uploaderlist;

</script>