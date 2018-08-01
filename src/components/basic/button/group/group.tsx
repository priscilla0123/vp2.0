/* src/components/basic/button/group/group.tsx */
/* authed by sunjia032 2018-08-01*/

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name: 'vpBtngroup'
})
export default class Group extends Vue {    
    @Prop({ default: null }) shape!: String;
    @Prop({ default: false }) vertical!: String;

    mounted() {
        this.shape == 'round' && this.setRadius();
    }
    setRadius() { 
        let children:any=this.$el.children;
        if(this.vertical){
            let radius=children[0].offsetWidth / 2;
            children[0].style.borderTopLeftRadius = radius + 'px';
            children[0].style.borderTopRightRadius = radius + 'px';  
            children[children.length-1].style.borderBottomRightRadius = radius + 'px';
            children[children.length-1].style.borderBottomLeftRadius = radius + 'px';         
        }
        else{
            let radius=children[0].offsetHeight / 2;
            children[0].style.borderTopLeftRadius = radius + 'px';
            children[0].style.borderBottomLeftRadius = radius + 'px';  
            children[children.length-1].style.borderTopRightRadius = radius + 'px';
            children[children.length-1].style.borderBottomRightRadius = radius + 'px';         
        }        
    }

    get Klass():String{
        let classes = ['vp-btn-group'];
        if (this.vertical) {
            classes.push('vp-btn-group-vertical');
        }
        if (this.shape) {
            classes.push('vp-btn-round');
        } 
        return classes.join(' '); 
    }
}