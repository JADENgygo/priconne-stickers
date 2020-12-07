import UIkit from 'uikit';
import './uikit.min.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import host from './host';
import topPage from './topPage';
import guildHouse from './guildHouse';
import otherSticker from './otherSticker';

Vue.config.productionTip = false;

const router = new VueRouter({
	routes: [
		{path: '/', component: topPage},
		{path: '/sticker/guild-house', component: guildHouse},
		{path: '/sticker/:subject', component: otherSticker, props: true},
	]
});

Vue.use(VueRouter);

new Vue({
	el: '#app',
	components: {
		host: host
	},
	template: '<host></host>',
	router
});
