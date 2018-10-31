/* src/components/basic/button/button.tsx */
/* authed by sunjia032 2018-07-24 */

import { Vue, Component, Prop } from "vue-property-decorator";
import { vpIcon } from '../icon';

enum Size { small, large };
enum FontSize { '12px', '14px' };
const Colors: Array < String >= ['main', 'sys', 'danger', 'warn', 'success', 'highlight', 'plain']

@Component({
    name: 'vpBtn',
    components: {
        vpIcon
    }
})
export default class Btn extends Vue {    
    @Prop({ default: null }) type!: String | Number;
    @Prop({ default: null }) color!: String;
    @Prop({ default: null }) size!: String | Array < Number > ;
    @Prop({ default: null }) shape!: String;
    @Prop({ default: false }) disable!: String;
    @Prop({ default: null }) icon!: String;
    @Prop({ default: null }) iconafter!: String;
    hasColor: Boolean = false;
    iconSize :String = '12px';
    
    mounted() {
        this.shape == 'round' && this.setRadius();
    }
    setRadius() {
        this.$el.style.borderRadius = this.$el.offsetHeight / 2 + 'px';
    }

    get Style(): any { 
        let style: any;
        style = {};
        if (this.size && typeof this.size == 'object') {
            style = { height: this.size[0] + 'px', width: this.size[1] + 'px' };
            if (this.size[2]) {
                style.fontSize = this.size[2] + 'px';
                this.iconSize = style.fontSize;
            }
            style.minWidth='0';
            style.padding='0';
        }
        if (this.color && Colors.indexOf(this.color) == -1) {
            style.backgroundColor = this.color;
            style.borderColor = this.color;
            style.color = this.color;
            this.hasColor = true;
        } else {
            this.hasColor = false;
        }
        return style;
    }

    get Klass(): String {
        let classes = ['vp-btn'];
        if (this.type && this.type != 'normal') {
            classes.push('vp-btn-' + this.type);
        }
        if (this.size && typeof this.size == 'string' && this.size != 'normal') {
            classes.push('vp-btn-' + Size[parseInt(Size[this.size])]);
            this.iconSize = FontSize[parseInt(Size[this.size])];
        }
        if (Colors.indexOf(this.color) > -1) {
            classes.push('vp-btn-' + this.color);
        } else if (!this.color) {
            classes.push('vp-btn-main');
        }
        if (this.hasColor && !this.type) {
            classes.push('vp-btn-normal');
        }
        return classes.join(' ');
    }
}