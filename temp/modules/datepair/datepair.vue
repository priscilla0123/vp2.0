<template>
    <div class="vp_datepair">
        <div>
            <Datepicker format="YYYY-MM-DD" v-model="target[0]" lang="zh" @change="changeStart" :max="max || startmax" :min="min || startmin" />
        </div>
        <span class='dash'>-</span>
        <div>
            <Datepicker format="YYYY-MM-DD" v-model="target[1]" lang="zh" @change="changeEnd" :max="max || endmax" :min="min || endmin" />
        </div>  
        <div class="error lg-error" v-text="error"></div>       
    </div>
</template>
<style>
.vp_datepair {
    display: inline-block;
}

.vp_datepair>* {
    float: left;
}

.vp_datepair .dash {
    margin-left: 5px;
    line-height: 30px;
    vertical-align: middle;
}

.vp_datepair >.error{
    clear: both;
    font-size: 12px;
}

</style>
<script>
import { Datepicker } from '../../components/datepicker';
var Datepair = {
    name: 'datepair',
    props: {
        'value': {
            required: true
        },
        'intervalMax':{ 
            required:false
        },
        'intervalMin':{
            required:false
        },
        'max':{
            required:false
        },
        'min':{
            required:false
        },
        startmax:{
            required:false
        },
        startmin:{
            required:false
        },
        endmax:{
            required:false
        },
        endmin:{
            required:false
        }
    },
    data() { 
        return {
            target: [this.value[0],this.value[1]],
            error:''
        }
    },
    methods: {
        changeStart(e) {
            this.$emit('input', this.target); 
            this.check(0);
        },
        changeEnd(e){ 
            this.$emit('input', this.target); 
            this.check(1);            
        },
        check(index){
            var startDate=new Date(this.target[0]);
            var endDate=new Date(this.target[1]);
            var interval_seconds=endDate.getTime()-startDate.getTime();
            var interval_days=Math.floor(interval_seconds/(24*3600*1000));
            var newDay=new Date(this.target[(index+1)%2]);
            if(interval_days<0){
                this.error='开始时间不能晚于结束时间';
            }else if(this.intervalMax && interval_days>this.intervalMax){
                this.error='时间间隔必须小于'+this.intervalMax+'天';
                newDay.setDate(newDay.getDate()+index?this.intervalMax:-this.intervalMax);
            }else if(this.intervalMin && interval_days<this.intervalMin){
                this.error='时间间隔必须大于'+this.intervalMin+'天';
                newDay.setDate(newDay.getDate()+index?this.intervalMin:-this.intervalMin);
            }else{
                this.error=undefined;
            }
            if(this.error){  
                setTimeout(()=>{ 
                    this.target[index]=newDay.getFullYear()+'-'+('0'+(newDay.getMonth()+1)).substr(-2)+'-'+newDay.getDate();
                    this.$emit('input', this.target);
                },100)
                setTimeout(()=>{
                    this.error='';
                },3000)                
            } 
        }
    }, 
    components: {
        Datepicker
    },
    watch: {
        value: {
            deep:true,
            handler(val,oldVal){ 
                this.target = [val[0],val[1]];               
            } 
        }
    }
}
export default Datepair;

</script>
