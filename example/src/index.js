import Vue from "vue";
import VueRouter from 'vue-router';
import { vpLayout, vpHeader, vpSide, vpContent, vpFooter, vpTree } from "../../dist/vp";

import Emptypage from "./page/empty";
import Layout from "./components/basic/layout";
import Grid from "./components/basic/grid";
import Icon from "./components/basic/icon";
import Button from "./components/basic/button";
Vue.use(VueRouter);

const page = [
    { name: 'empty', path: '/emptypage', component: Emptypage }
]

const com = [
    { name: 'layout', path: '/com/basic/layout', component: Layout },
    { name: 'grid', path: '/com/basic/grid', component: Grid },
    { name: 'icon', path: '/com/basic/icon', component: Icon },
    { name: 'button', path: '/com/basic/button', component: Button }
]

const router = new VueRouter({
    routes: [...page, ...com].map(({ path, component }) => ({ path, component }))
})

let v = new Vue({
    el: "#app",
    router: router,
    data: function() {
        return {
            tree: [{
                name: 'Pages',
                children: [...page].map(({ name, path }) => ({ name, url: '#' + path }))
            }, {
                name: 'Components',
                children: [...com].map(({ name, path }) => ({ name, url: '#' + path }))
            }]
        }
    },
    components: {
        vpLayout,
        vpHeader,
        vpSide,
        vpContent,
        vpFooter,
        vpTree
    }
});