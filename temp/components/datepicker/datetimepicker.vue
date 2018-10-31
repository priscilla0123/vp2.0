<template>
<div class="datepicker">
    <div class="input" @click="open = !open">
        <input type="text" readonly
            class="input-text"
            v-model="ymdhms"
            :placeholder="placeholder">
        <span class="picker-icon">
            <vp-icon name="calendar-time" size="20"></vp-icon>
        </span>
    </div>
    <transition name="dropDown">
    <div class="drop-box" v-if="open">
        <div class="date" v-if="showDatePanel">
            <div class="picker-header">
                <span><i class="picker-icon left" @click="prev"></i></span>
                <span v-if="showRange || showYear" @click="showRange = true"><em>{{ range }}</em></span>
                <span v-else-if="showMonth" @click="openRangePanel"><em>{{ year }}</em></span>
                <span v-else @click="showMonth = true"><em>{{ monthArr[month - 1] }} {{ year }}</em></span>
                <span><i class="picker-icon right" @click="next"></i></span>
            </div>
            <template v-if="showYear">
                <yearrangepanel v-model="range" @change="changeYearRange" v-if="showRange"></yearrangepanel>
                <yearpanel v-model="year" :range="range" v-else @change="showYear = false"></yearpanel>
            </template>
            <template v-else-if="showMonth">
                <monthpanel :lang="lang" v-model="month" @change="showMonth = false"></monthpanel>
            </template>
            <template v-else>
                <datepanel class="date-panel" :lang="lang" v-model="DATE" @change="changeDate" ref="dp"></datepanel>
            </template>
            <div class="footer">
                <span @click="showDatePanel = false">{{ lang === 'zh' ? '选择时间' : 'Select Time' }}</span><button @click="OK">{{ lang === 'zh' ? '确定' : 'OK' }}</button>
            </div>
        </div>
        <div class="time" v-else>
            <div class="picker-header">
                <span><em>{{ monthArr[month - 1] }} {{ date }} {{ year }}</em></span>
            </div>
            <timepanel class="time-panel" v-model="DATE" @change="changeTime" :hasSeconds="hasSeconds"></timepanel>
            <div class="footer">
                <span @click="showDatePanel = true">{{ lang === 'zh' ? '选择日期' : 'Select Date' }}</span><button @click="OK">{{ lang === 'zh' ? '确定' : 'OK' }}</button>
            </div>
        </div>
    </div>
    </transition>
</div>
</template>
<script>
import Timepanel from './timepanel.vue'
import Datepanel from './datepanel.vue'
import Monthpanel from './monthpanel.vue'
import Yearpanel from './yearpanel.vue'
import Yearrangepanel from './yearrangepanel.vue'

import { quantity } from './calendar'
import mixin from './mixin'
import vpIcon from '../icon/index'

const MONTH = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    zh: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二']
};

const PLACEHOLDER = {
    en: 'Select Date Time',
    zh: '选择日期时间'
}

let _d = new Date(),
    y = _d.getFullYear(),
    m = _d.getMonth() + 1,
    d = _d.getDate(),
    hh = _d.getHours(),
    mm = _d.getMinutes(),
    ss = _d.getSeconds(),
    begin = y - y % 10,
    end = begin + 9;
export default {
    name: 'datetimepicker',
    mixins: [mixin],
    props: {
        value: {
            type: String | Date
        },
        hasSeconds: {
            type: Boolean,
            default: false
        },
        lang: {
            type: String,
            default: 'en'
        },
        format: {
            type: String,
            default: 'YYYY-MM-DD' // YYYY-MM-DD YYYY/MM/DD YYYY~MM~DD YYYY.MM.DD
        }
    },
    data() {
        return {
            open: false,
            year: undefined,
            month: undefined,
            date: undefined,
            hour: undefined,
            minute: undefined,
            second: undefined,
            range: begin + '~' + end,
            showRange: false,
            showYear: false,
            showMonth: false,
            DATE: undefined,
            val: this.value,
            showDatePanel: true,
            dtFormat: this.hasSeconds ? this.format : this.format.replace(':ss', '')
        }
    },
    computed: {
        ymdhms() {
            return this.val ? this.dtFormat.replace('YYYY', this.year)
                .replace('MM', quantity(this.month))
                .replace('DD', quantity(this.date))
                .replace('hh', quantity(this.hour))
                .replace('mm', quantity(this.minute))
                .replace('ss', quantity(this.second)) : '';
        },
        monthArr() {
            if('undefined' === typeof this.lang) return [];
            return ['en','zh'].indexOf(this.lang) > -1 ? MONTH[this.lang] : MONTH['en']
        },
        placeholder() {
            return ['en','zh'].indexOf(this.lang) > -1 ? PLACEHOLDER[this.lang] : PLACEHOLDER['en'];
        }
    },
    created() {
        this.setDateTime();
    },
    methods: {
        setDateTime(c) {
            const d = new Date(c || this.val || _d);
            if(!(d instanceof Date)) return;
            this.year = d.getFullYear();
            this.month = d.getMonth() + 1;
            this.date = d.getDate();
            this.hour = this.val ? d.getHours() : 0;
            this.minute = this.val ? d.getMinutes() : 0;
            this.hasSeconds && (this.second = this.val ? d.getSeconds() : 0);
            let second = this.hasSeconds ? (':' + this.second) : '';
            this.DATE = d.toLocaleDateString() + ' ' + this.hour + ':' + this.minute + second;
        },
        changeYearRange(obj) {
            this.year = obj.begin + (this.year % 10)
            this.showRange = false;
        },
        openRangePanel() {
            let b = this.year - this.year % 10, e = b + 9;
            if(this.showYear) {
                if(this.showRange) {
                    b = this.year - this.year % 100, e = b + 90;
                }
                this.showRange = true;
            } else {
                this.showYear = true;
            }
            this.range = b + '~' + e;
        },
        prev() {
            if(this.showYear) {
                if(this.showRange) {
                    let rg = this.range.split('~'), begin = +rg[0] - 100, end = +rg[1] - 100;
                    this.range = begin + '~' + end;
                    this.year = this.year - 100;
                } else {
                    this.year = this.year - 10;
                }
            } else if(this.showMonth) {
                this.year--;
            } else {
                this.month = this.month - 1;
                if(this.month < 1) {
                    this.month = 12
                    this.year--;
                }
                this.$refs.dp.setCalendar(this.year, this.month);
            }
        },
        next() {
            if(this.showYear) {
                if(this.showRange) {
                    let rg = this.range.split('~'), begin = +rg[0] + 100, end = +rg[1] + 100;
                    this.range = begin + '~' + end;
                    this.year = this.year + 100;
                } else {
                    this.year = this.year + 10;
                }
            } else if(this.showMonth) {
                this.year++;
            } else {
                this.month = this.month + 1;
                if(this.month > 12) {
                    this.month = 1;
                    this.year++;
                }
                this.$refs.dp.setCalendar(this.year, this.month);
            }
        },
        changeDate(obj) {
            this.date = obj.date;
            this.val = this.year + '/' + this.month + '/' + this.date;
        },
        changeTime(str) {
            let d = new Date(str);
            this.hour = d.getHours();
            this.minute = d.getMinutes();
            this.second = d.getSeconds();
            this.DATE = str;
        },
        OK() {
            this.showDatePanel = true;
            this.open = false;
            this.$emit('change', this.ymdhms);
            this.$emit('input', this.ymdhms);
        }
    },
    watch: {
        value(c) {
            let dt = new Date(c);
            if(!!+dt && dt instanceof Date) {
                this.setDateTime(c);
            } else {
                this.val = c;
                this.hour = 0;
                this.minute = 0;
                this.second = 0;
                this.setDateTime(new Date);
            }
        },
        open(c) {
            !c && (this.showDatePanel = true);
        }
    },
    components: { Timepanel, Datepanel, Monthpanel, Yearpanel, Yearrangepanel, vpIcon }
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
    width: 148px;
    cursor: pointer;
    &-text {
        line-height: 28px;
        height: 28px;
        width: 124px;
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

.datepicker {
    position: relative;
}
.date-panel {
    padding: 10px;
    box-sizing: border-box;
}

.footer {
    text-align: right;
    padding: 10px 15px;
    border-top: 1px solid #e1e1e1;
    span {
        margin-right: 10px;
        color: #4475E8;
        cursor: pointer;
    }
    button {
        color: #fff;
        width: 40px;
        height: 24px;
        border: none;
        border-radius: 2px;
        background-color: #4475E8;
        cursor: pointer;
    }
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