<template>
    <div style="text-align:center">
        <div class="title" v-if="title" v-html="title"></div>
        <div class="container" :style="{width:width+'px',height:height+'px'}">
            <canvas class="lg-canvas" :id="id" :width="width" :height="height"></canvas>
            <div class="label_list">
                <label v-for="(item,i) in DATA" v-text="renderText(item)" :style="{top:item.position.y+'px',left:item.position.x+'px'}"></label>
            </div>
        </div>
        <div>
            <span class="tag" v-for="(item,i) in DATA">
                <span class="dot" :style="{'background-color':getColor(i)}" ></span>
                <span v-text="item.label"></span>
            </span>
        </div>
    </div>
</template>
<style scoped>  
.container {
    position: relative;
    display: inline-block;
}

.title {
    margin-top: 10px;
    font-weight: bold;
}

.tag{
    margin:0 10px;
}

.dot {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 5px;
}

.label_list label {
    position: absolute;
    color: white;
    transform:translate(-50%,-50%);
}

</style>
<script>
var type = {
    1: 'PI'
}
var _color = [
    '#8095cc', '#91c4e8', '#b2bee1', '#b88bbe', '#8869a6', '#a9dde4', '#75cbe8', '#d2dde4', '#b3ddd2', '#80bfb0', '#aed5d7', '#68c8e8', '#fac4c8', '#FAC172', '#ADC965', '#FF8357', '#E25B45'
]
var Chart = {
    name: 'chart',
    props: {
        value: {
            type: Array | Object,
            require: true
        },
        width: {
            type: String | Number,
            validator(value) {
                return parseInt(value) > 200;
            },
            default: 500
        },
        height: {
            type: String | Number,
            validator(value) {
                return parseInt(value) > 200;
            },
            default: 500
        },
        title: {
            require: false
        },
        total: {
            require: false
        },
        type: {
            default: type[1]
        },
        render:{
            require:false
        }
    },
    methods: {
        draw() {
            var canvas = document.getElementById(this.id);
            var _this = this;
            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");
                var start = 0;
                this.DATA.forEach((item, index) => {
                    this.drawSector(ctx, start, start + item.percent, this.color[index]);
                    start += item.percent;
                })
                canvas.addEventListener("click", event => {
                    var x = event.pageX - canvas.getBoundingClientRect().left;
                    var y = event.pageY - canvas.getBoundingClientRect().top;
                    var start = 0;

                    this.DATA.forEach((item, index) => {
                        _this.drawSector(ctx, start, start + item.percent, _this.color[index]);
                        start += item.percent;
                        if (ctx.isPointInPath(x, y)) {
                            ctx.fillStyle = "red";
                            ctx.fill();
                        }
                    })
                })
            }
        },
        drawSector(context, start, end, color) {
            context.beginPath();
            context.arc(this._center.x, this._center.y, this._radius, start * Math.PI*2, end * Math.PI*2, false);
            context.lineTo(this._center.x, this._center.y);
            context.fillStyle = color;
            context.fill();
        },  
        getColor(index) {
            return this.color[index % this.color.length];
        },
        getLabelPosition(base, value) {
            var degree = (base*2 + value) * Math.PI; 
            var x = this._radius * 0.8 * Math.cos(degree);
            var y = this._radius * 0.8 * Math.sin(degree); 
            return {
                x: this._center.x + x,
                y: this._center.y + y
            }
        },
        renderText(item) {
            if (this.render) {
                return this.render(item);
            }
            return (item.percent * 100).toFixed(2) + '%';
        }
    },
    data() {
        return {
            id: 'vpchart' + new Date().getTime(), //uid
            status: [],
            // if data length is nth(18),we only provide 16 colors 
            // to avoid start and end with the same color
            // todo::support 16*18 and more colors 
            color: (this.value.length % 18) != 0 ? _color : _color.slice(0, 16)
        }
    },
    computed: {
        _center() {
            return {
                x: this.width / 2,
                y: this.height / 2
            };
        },
        _radius() {
            return (this.width < this.height ? this.width / 2 : this.height / 2) * 0.8;
        },
        DATA() {
            var data = [];
            var total = 0;
            if (this.total) {
                total = parseFloat(this.total);
            } else {
                function getSum(item) {
                    total += parseFloat(item.value);
                }
                this.value.map(getSum);
            }
            var percentSum = 0;
            this.value.forEach((item) => {
                var percent = parseFloat(item.value) / total ;
                data.push({
                    percent:percent,
                    value: item.value,
                    label: item.label,
                    position: this.getLabelPosition(percentSum, percent)
                })
                percentSum += percent;
            })
            setTimeout(()=>{
                this.draw();
            },0)
            return data;
        }
    }
}
export default Chart;

</script>
