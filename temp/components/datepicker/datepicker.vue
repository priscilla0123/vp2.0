<template>
    <div class="datepicker">
        <div class="input" @click="open = !open">
            <input type="text" readonly class="input-text" v-model="ymd" :name="name" :placeholder="placeholder">
            <span class="picker-icon">
                <vp-icon name="calendar" size="20"></vp-icon>
            </span>
        </span>
        </div>
        <transition name="dropDown">
            <div class="drop-box" v-if="open">
                <div class="picker-header">
                    <span><i class="picker-icon left" @click="prev"></i></span>
                    <span v-if="showRange || showYear"><em>{{ range }}</em></span>
                    <span v-else-if="showMonth" @click="openRangePanel"><em>{{ year }}</em></span>
                    <span v-else @click="showMonth = true"><em>{{ monthArr[month - 1] }} {{ year }}</em></span>
                    <span><i class="picker-icon right" @click="next"></i></span>
                </div>
                <template v-if="showYear">
                    <yearrangepanel v-model="range" @change="changeYearRange" v-if="showRange"></yearrangepanel>
                    <yearpanel v-model="year" :range="range" v-else @change="showYear = false;changeDate()" ref="yp" :min="MinYear" :max="MaxYear"></yearpanel>
                </template>
                <template v-else-if="showMonth">
                    <monthpanel :lang="lang" v-model="month" @change="showMonth = false;changeDate()" ref="mp" :min="MinMonth" :max="MaxMonth"></monthpanel>
                </template>
                <template v-else>
                    <datepanel class="date-panel" :lang="lang" v-model="DATE" @change="changeDate()" ref="dp" :min="Min" :max="Max"></datepanel>
                </template>
            </div>
        </transition>
    </div>
</template>
<script>
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
    en: 'Select Date',
    zh: '选择日期'
}

let _d = new Date(),
    y = _d.getFullYear(),
    m = _d.getMonth() + 1,
    d = _d.getDate(),
    begin = y - y % 10,
    end = begin + 9;
export default {
    name: 'datepicker',
    mixins: [mixin],
    props: {
        value: {
            type: String | Object
        },
        lang: {
            type: String,
            default: 'en'
        },
        format: {
            type: String,
            default: 'YYYY/MM/DD' // YYYY-MM-DD YYYY/MM/DD YYYY~MM~DD YYYY.MM.DD
        },
        name: String,
        min: {
            type: String
        },
        max: {
            type: String
        }
    },
    data() {
        let dMin = this.min ? this.clearHMS(new Date(this.min)) : undefined;
        let dMax = this.max ? this.clearHMS(new Date(this.max)) : undefined;
        if (dMin && dMax) { //both have min & max, can not cross.
            dMax = (dMax - dMin) / 86400000 >= 0 ? dMax : undefined;
        }
        return {
            open: false,
            val: this.value,
            year: undefined,
            month: undefined,
            date: undefined,
            range: begin + '~' + end,
            showRange: false,
            showYear: false,
            showMonth: false,
            DATE: undefined,
            Min: dMin, //最小日期
            Max: dMax, //最大日期
            MinMonth: dMin ? dMin.getMonth() + 1 : undefined, //最小月份
            MaxMonth: dMax ? dMax.getMonth() + 1 : undefined, //最大月份
            MinYear: dMin ? dMin.getFullYear() : undefined, //最小年份
            MaxYear: dMax ? dMax.getFullYear() : undefined //最大年份
        }
    },
    computed: {
        ymd() { 
            return this.val ? this.format
                .replace('YYYY', this.year)
                .replace('MM', quantity(this.month))
                .replace('DD', quantity(this.date)) : '';
        },
        monthArr() {
            if ('undefined' === typeof this.lang) return [];
            return ['en', 'zh'].indexOf(this.lang) > -1 ? MONTH[this.lang] : MONTH['en']
        },
        placeholder() {
            return ['en', 'zh'].indexOf(this.lang) > -1 ? PLACEHOLDER[this.lang] : PLACEHOLDER['en']
        }
    },
    created() {
        if (this.val && this.val != '') {
            if (typeof this.val === 'string') {
                let ymd = this.val.split(this.format[4]);
                this.year = +ymd[0];
                this.month = +ymd[1];
                this.date = +ymd[2];
            } else if (typeof this.val === 'object') {
                let { year, month, date } = this.val;
                this.year = this.val.getFullYear();
                this.month = this.val.getMonth() + 1;
                this.date = this.val.getDate();
            } else {
                let { year, month, date } = this.val;
                this.year = year;
                this.month = month;
                this.date = date;
            }
        } else {
            this.year = y;
            this.month = m;
            this.date = d;
        }
        this.DATE = new Date(this.year, this.month - 1, this.date);
    },
    methods: {
        changeYearRange(obj) {
            this.year = obj.begin + (this.year % 10)
            this.showRange = false;
        },
        openRangePanel() {
            let b = this.year - this.year % 10,
                e = b + 9;
            if (this.showYear) {
                if (this.showRange) {
                    b = this.year - this.year % 100, e = b + 90;
                }
                this.showRange = true;
            } else {
                this.showYear = true;
            }
            this.range = b + '~' + e;
        },
        clearHMS(source) {
            source.setHours(0);
            source.setMinutes(0);
            source.setSeconds(0);
            source.setMilliseconds(0);
            return source;
        },
        getFirstLastDay(last) {
            var calendar = JSON.parse(JSON.stringify(this.$refs.dp.calendarData));
            last && calendar.reverse()[0].reverse(); //reverse to get last day
            var day = calendar[0][0];
            var specialDay = new Date(day.year + '.' + day.month + '.' + day.date + ' 00:00:00');
            return specialDay;
        },
        canprev(type) {
            if (this.Min) {
                switch (type) {
                    case 'year':
                        return this.$refs.yp.years[0] > this.Min.getFullYear();
                    case 'month':
                        var date = new Date();
                        date.setFullYear(this.year - 1);
                        date.setMonth(11);
                        date.setDate(31);
                        return date > this.Min;
                    case 'day':
                        return this.getFirstLastDay(false) > this.Min;
                }
            }
            return true;
        },
        cannext(type) {
            if (this.Max) {
                switch (type) {
                    case 'year':
                        return this.$refs.yp.years[11] < this.Max.getFullYear();
                    case 'month':
                        var date = new Date((this.year + 1) + '.1.1 00:00:00');
                        return date < this.Max;
                    case 'day':
                        return this.getFirstLastDay(true) < this.Max;
                }
            }
            return true;
        },
        prev() {
            if (this.showYear) {
                if (this.canprev('year')) {
                    if (this.showRange) {
                        this.year = this.year - 100;
                    } else {
                        this.year = this.year - 10;
                    }
                    let begin = this.year - this.year % 10,
                        end = begin + 9;
                    this.range = begin + '~' + end;
                }
            } else if (this.showMonth) {
                this.canprev('month') && this.year--;
            } else {
                if (this.canprev('day')) {
                    this.month = this.month - 1;
                    if (this.month === 0) {
                        this.month = 12
                        this.year--;
                    }
                    this.$refs.dp.setCalendar(this.year, this.month);
                    this.open = true;
                }
            }
        },
        next() {
            if (this.showYear) {
                if (this.cannext('year')) {
                    if (this.showRange) {
                        this.year = this.year + 100;
                    } else {
                        this.year = this.year + 10;
                    }
                    let begin = this.year - this.year % 10,
                        end = begin + 9;
                    this.range = begin + '~' + end;
                }
            } else if (this.showMonth) {
                this.cannext('month') && this.year++;
            } else {
                if (this.cannext('day')) {
                    this.month = this.month + 1;
                    if (this.month === 13) {
                        this.month = 1;
                        this.year++;
                    }
                    this.$refs.dp.setCalendar(this.year, this.month);
                    this.open = true;
                }
            }
        },
        changeDate() { 
            this.$nextTick(() => {
                this.val = this.DATE.toLocaleDateString();
                if (this.value && typeof this.value !== 'string') {
                    if (this.value.getDate) {
                        this.$emit('input', this.ymd)
                        this.$emit('change', this.ymd)
                    } else {
                        this.$emit('input', { year: this.year, month: this.month, date: this.date })
                        this.$emit('change', { year: this.year, month: this.month, date: this.date })
                    }
                } else {
                    this.$emit('input', this.ymd)
                    this.$emit('change', this.ymd)
                }
            });
            this.open = false;
        },
        isExpireMin(dDate) {
            return this.Min && this.Min > this.clearHMS(dDate);
        },
        isExpireMax(dDate) {
            return this.Max && this.Max < this.clearHMS(dDate);
        },
        resetDate(dDate, open) { 
            this.DATE = dDate;
            this.changeDate(open);
        }
    },
    watch: {
        DATE(c) { 
            this.date = c.getDate();
            this.month = c.getMonth() + 1;
            this.year = c.getFullYear();
        },
        year(c) { 
            this.DATE.setFullYear(c);
        },
        month(c) { 
            this.DATE.setMonth(c - 1);
        },
        date(c) { 
            this.DATE.setDate(c);
        },
        value(c) { 
            let dt = new Date(c);  
            if (isNaN(dt.getTime())) {
                dt = new Date(); 
            }
            if (this.isExpireMin(dt)) { //reset value when expired
                this.resetDate(new Date(this.min));
                return;
            }
            if (this.isExpireMax(dt)) { //reset value when expired
                this.resetDate(new Date(this.max));
                return;
            }
            this.DATE = dt;
            this.val=c;
        }
    },
    components: { Datepanel, Monthpanel, Yearpanel, Yearrangepanel, vpIcon }
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
            font-style: normal; // color: #4475E8;
            cursor: pointer;
        }
        >span {
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
        background-color: transparent;
        &:focus,
        &:active,
        &:visited {
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
    display: inline-block;
}

.date-panel {
    padding: 10px;
    box-sizing: border-box;
}

.drop-box {
    position: absolute;
    margin-top: 2px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
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
    &-leave-to {
        opacity: 0;
        transform-origin: center top;
        transform: scaleY(.8);
    }
}

</style>
