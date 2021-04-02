import UIkit from 'uikit';
import Icons from './uikit-icons';
import './uikit.min.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Host from './Host';
import TopPage from './TopPage';
import GuildHouse from './GuildHouse';
import OtherSticker from './OtherSticker';

Vue.config.productionTip = false;

(UIkit.use as (UIkit: object) => void)(Icons);

Vue.use(VueRouter);

const router: VueRouter = new VueRouter({
	routes: [
		{path: '/', component: TopPage},
		{path: '/sticker/guild-house', component: GuildHouse},
		{path: '/sticker/:subject', component: OtherSticker, props: true},
	]
});


new Vue({
	el: '#app',
	components: {
		Host
	},
	template: '<Host/>',
	router
});
