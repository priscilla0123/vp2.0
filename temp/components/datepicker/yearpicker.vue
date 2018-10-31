<template>
<div class="yearpicker">
    <div class="input" @click="open = !open">
        <input type="text" readonly
            class="input-text"
            v-model="year"
            :name="name"
            :placeholder="placeholder">
        <span class="picker-icon">
            <vp-icon name="calendar" size="20"></vp-icon>
        </span>
    </div>
    <transition name="dropDown">
    <div class="drop-box" v-if="open">
        <div class="picker-header">
            <span><i class="picker-icon left" @click="prev"></i></span>
            <span><em @click="openRangePanel">{{ range }}</em></span>
            <span><i class="picker-icon right" @click="next"></i></span>
        </div>
        <yearrangepanel v-model="range" @change="changeYearRange" v-if="showRange"></yearrangepanel>
        <yearpanel v-model="year" :range="range" v-else @change="open = false"></yearpanel>
    </div>
    </transition>
</div>
</template>
<script>
import Yearpanel from './yearpanel.vue'
import Yearrangepanel from './yearrangepanel.vue'

import mixin from './mixin'
import vpIcon from '../icon/index'

const PLACEHOLDER = {
    en: 'Select Year',
    zh: '选择年份'
}

let y = new Date().getFullYear(), begin = y - y % 10, end = begin + 9;
export default {
    name: 'yearpicker',
    mixins: [mixin],
    props: {
        value: {
            type: Number | String | Object
        },
        name: String
    },
    data() {
        return {
            open: false,
            year: this.value,
            range: begin + '~' + end,
            showRange: false
        }
    },
    computed: {
        placeholder() {
            return ['en','zh'].indexOf(this.lang) > -1 ? PLACEHOLDER[this.lang] : PLACEHOLDER['en']
        }
    },
    methods: {
        changeYearRange(obj) {
            this.year = obj.begin + (this.year % 10)
            this.showRange = false;
        },
        openRangePanel() {
            let b = this.year - this.year % 10, e = b + 9;
            this.range = b + '~' + e;
            this.showRange = true;
        },
        prev() {
            if(this.showRange) {
                let rg = this.range.split('~'), begin = +rg[0] - 100, end = +rg[1] - 100;
                this.range = begin + '~' + end;
                this.year = this.year - 100;
            } else {
                let rg = this.range.split('~'), begin = +rg[0] - 10, end = +rg[1] - 10;
                this.range = begin + '~' + end;
                this.year = this.year - 10;
            }
        },
        next() {
            if(this.showRange) {
                let rg = this.range.split('~'), begin = +rg[0] + 100, end = +rg[1] + 100;
                this.range = begin + '~' + end;
                this.year = this.year + 100;
            } else {
                let rg = this.range.split('~'), begin = +rg[0] + 10, end = +rg[1] + 10;
                this.range = begin + '~' + end;
                this.year = this.year + 10;
            }
        }
    },
    watch: {
        value(c) {
            this.year = c;
        },
        year(c) {
            this.$emit('input', c);
        }
    },
    components: { Yearpanel, Yearrangepanel, vpIcon }
}
</script>
<style lang="less" scoped>
::-webkit-input-placeholder {
    color: #ccc;
}
:-moz-placeholder {
    color: #ccc;
}
::-moz-placeholder {
    color: #ccc;
}

.drop-box {
    .picker-header {
        height: 30px;
        line-height: 32px;
        border-bottom: 1px solid #e1e1e1;
        display: flex;
        em {
            font-style: normal;
            // color: #4475E8;
            cursor: pointer;
        }
        > span {
            display: block;
            flex: 1;
            text-align: center;
            position: relative;
            &:nth-child(2) {
                flex: 5;
            }
        }
        .picker-icon {
            display: inline-block;
            width: 0;
            height: 0;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            cursor: pointer;
            &:after {
                content: '';
                display: block;
                width: 0;
                height: 0;
                position: absolute;
                top: -8px;
                border-top: 8px solid transparent;
                border-bottom: 8px solid transparent;
                z-index: 1;
            }
            &.left {
                border-right: 7px solid #999;
                &:after {
                    right: -9px;
                    border-right: 8px solid white;
                }
            }
            &.right {
                border-left: 7px solid #999;
                &:after {
                    left: -9px;
                    border-left: 8px solid white;
                }
            }
        }
    }
}

.input {
    position: relative;
    border: 1px solid #999;
    width: 128px;
    cursor: pointer;
    &-text {
        line-height: 28px;
        height: 28px;
        width: 100px;
        border: none;
        cursor: pointer;
        &:focus, &:active, &:visited {
            box-shadow: none;
            outline: none;
            border: none;
        }
    }
    .picker-icon {
        position: absolute;
        right: 2px;
        top: 2px;
        display: block;
        width: 22px;
        height: 22px;
        line-height: 22px;
    }
}

.yearpicker {
    position: relative;
}
.drop-box {
    position: absolute;
    margin-top: 2px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background-color: #fff;
    z-index: 10;
}

.dropDown {
    &-enter-active,
    &-leave-active {
        transform-origin: 0 0;
        transform: scaleY(1);
        transition-property: all;
        transition-duration: .2s;
        transition-delay: 0s;
    }
    &-enter-active {
        transition-timing-function: cubic-bezier(.23, 1, .32, 1);
    }
    &-leave-active {
        transition-timing-function: cubic-bezier(.755, .05, .855, .06);
    }
    &-enter,
    &-appear,
    &-leave-to{
        opacity: 0;
        transform-origin: center top;
        transform: scaleY(.8);
    }
}
</style>