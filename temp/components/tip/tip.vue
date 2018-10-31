<template>
    <div :class="classname" @mouseleave="hideTip($event)" @mouseenter="showTip($event)">
        <span v-html="label"></span>
        <div class="lg-bubble" v-html="body" v-if="show" :style="style" :class="klass"></div>
    </div>
</template>
<script>
export default {
    name: 'tip',
    props: {
        'option': {
            type: Object,
            require: false
        },
        'content': {
            require: true
        }
    },
    data() {
        var content = '';
        if (typeof this.content == 'object') {
            content = this.content.innerHTML;
        } else {
            content = this.content;
        }
        return {
            label: this.option && this.option.label ? this.option.label : '?',
            classname: this.option && this.option.classname ? 'lg-tiphand ' + this.option.classname : 'lg-tiphand',
            body: content,
            show: this.option && this.option.auto,
            style: '',
            direction: this.option && this.option.direction ? this.option.direction : ''
        }
    },
    methods: {
        showTip: function(e) {
            this.makeTip(e.srcElement.offsetHeight, e.srcElement.offsetWidth, e.srcElement.offsetTop, e.srcElement.offsetLeft, this.direction);
            this.show = true;
        },
        hideTip: function() {
            this.show = false;
        },
        makeTip: function(h, w, t, l, type) {
            var aPointer = this.makePoint(h, w, t, l);
            var aStyle = this.makeBaseStyle(aPointer);
            switch (type) {
                case 't':
                    this.style = aStyle[2 - 1];
                    this.klass = 'dirTopLeft-2';
                    break;
                case 'tl':
                    this.style = aStyle[1 - 1];
                    this.klass = 'dirTop lg-bubble-tl';
                    break;
                case 'tr':
                    this.style = aStyle[3 - 1];
                    this.klass = 'dirTopLeft lg-bubble-tr';
                    break;
                case 'b':
                    this.style = aStyle[7 - 1];
                    this.klass = 'dirLeft-2 lg-bubble-b';
                    break;
                case 'bl':
                    this.style = aStyle[6 - 1];
                    this.klass = 'lg-bubble-bl';
                    break;
                case 'br':
                    this.style = aStyle[8 - 1];
                    this.klass = 'dirLeft lg-bubble-br';
                    break;
                case 'l':
                    this.style = aStyle[4 - 1];
                    this.klass = 'dirLeftTop-2 lg-bubble-l';
                    break;
                case 'lt':
                    this.style = aStyle[1 - 1];
                    this.klass = 'dirLeft lg-bubble-lt';
                    break;
                case 'lb':
                    this.style = aStyle[6 - 1];
                    this.klass = 'dirTopLeft lg-bubble-lb';
                    break;
                case 'r':
                    this.style = aStyle[5 - 1];
                    this.klass = 'dirTop-2 lg-bubble-r';
                    break;
                case 'rt':
                    this.style = aStyle[3 - 1];
                    this.klass = 'lg-bubble-rt';
                    break;
                case 'rb':
                    this.style = aStyle[8 - 1];
                    this.klass = 'dirTop lg-bubble-rb';
                    break;
                default:
                    this.style = aStyle[2 - 1];
                    this.klass = 'dirTopLeft-2';
                    break;
            }

        },
        makePoint: function(h, w, t, l) {
            return [{ x: l - 10, y: t - 10 },
                { x: l + w / 2, y: t - 10 },
                { x: l + w + 10, y: t - 10 },
                { x: l - 10, y: t + h / 2 },
                { x: l + w + 10, y: t + h / 2 },
                { x: l - 10, y: t + h + 10 },
                { x: l + w / 2, y: t + h + 10 },
                { x: l + w + 10, y: t + h + 10 }
            ]
        },
        makeBaseStyle: function(aPointer) {
            var result = [];
            for (var i = 1; i <= 8; i++) {
                result.push("top:" + aPointer[i - 1].y + 'px;left:' + aPointer[i - 1].x + 'px;');
            }
            return result;
        },
        resetOption: function(option) {
            this.label = option && option.label ? option.label : '?',
                this.classname = option && option.classname ? 'lg-tiphand ' + option.classname : 'lg-tiphand',
                this.show = option && option.auto,
                this.style = '',
                this.direction = option && option.direction ? option.direction : ''
        }
    },
    watch: {
        'content': function(vNew, vOld) {
            if (vOld != vNew) {
                this.body = vNew;
            }
        },
        'option': {
            handler: function(n, o) {
                this.resetOption(n);
            },
            deep: true
        }
    }
}

</script>
<style lang="less" scoped>
.lg-tiphand {
    border: 1px solid white;
    border-radius: 10px;
    margin: 0 3px;
    padding: 0 5px;
    cursor: pointer;
    display: inline-block;
}

.lg-tiphand .lg-bubble {
    position: absolute;
    margin: 0;
    z-index: 1000;
}

.lg-tiphand .dirTop {
    transform: translateY(-100%);
}

.lg-tiphand .dirTop-2 {
    transform: translateY(-50%);
}

.lg-tiphand .dirLeft {
    transform: translateX(-100%);
}

.lg-tiphand .dirLeft-2 {
    transform: translateX(-50%);
}

.lg-tiphand .dirTopLeft {
    transform: translate3d(-100%, -100%, 0);
}

.lg-tiphand .dirTopLeft-2 {
    transform: translate3d(-50%, -100%, 0);
}

.lg-tiphand .dirLeftTop-2 {
    transform: translate3d(-100%, -50%, 0);
}

.lg-tiphand .lg-bubble-tl:after {
    right: inherit !important;
}

.lg-tiphand .lg-bubble-tr:after {
    right: 26px !important;
}

.lg-tiphand .lg-bubble-rt:after {
    transform: rotate(90deg);
    left: -16px;
    top: 12px;
    bottom: inherit !important;
    right: inherit !important;
}

.lg-tiphand .lg-bubble-r:after {
    transform: rotate(90deg);
    left: -16px;
    top: 50%;
    bottom: inherit !important;
    right: inherit !important;
    -webkit-transform-origin-x: 12px;
    -webkit-transform-origin-y: 4px;
}

.lg-tiphand .lg-bubble-rb:after {
    transform: rotate(90deg);
    left: -16px;
    bottom: 12px !important;
    right: inherit !important;
}

.lg-tiphand .lg-bubble-br:after {
    transform: rotate(180deg);
    top: -16px;
    bottom: inherit !important;
    right: 26px !important;
}

.lg-tiphand .lg-bubble-b:after {
    transform: rotate(180deg);
    top: -16px;
    bottom: inherit !important;
}

.lg-tiphand .lg-bubble-bl:after {
    transform: rotate(180deg);
    top: -16px;
    right: inherit !important;
    bottom: inherit !important;
}

.lg-tiphand .lg-bubble-lb:after {
    transform: rotate(-90deg);
    right: -8px !important;
    bottom: 12px !important;
}

.lg-tiphand .lg-bubble-l:after {
    transform: rotate(-90deg);
    right: -8px !important;
    bottom: inherit !important;
    top: 50%;
    -webkit-transform-origin-x: 4px;
    -webkit-transform-origin-y: 4px;
}

.lg-tiphand .lg-bubble-lt:after {
    transform: rotate(-90deg);
    right: -8px !important;
    bottom: inherit !important;
    top: 12px;
}

.lg-tiphand .lg-bubble-rt,
.lg-tiphand .lg-bubble-r,
.lg-tiphand .lg-bubble-rb {
    box-shadow: -4px 4px 14px 1px #e1e1e1 !important;
}

.lg-tiphand .lg-bubble-br,
.lg-tiphand .lg-bubble-b,
.lg-tiphand .lg-bubble-bl {
    box-shadow: -4px -4px 14px 1px #e1e1e1 !important;
}

.lg-tiptiptip {
    position: absolute;
}

</style>
