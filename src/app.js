import UIkit from 'uikit';
import './uikit.min.css';
import './style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import host from './host';
import topPage from './topPage';
import guildHouse from './guildHouse';
import clanChat from './clanChat';
import album from './album';
import clanBattle from './clanBattle';
import scramble from './scramble';
import giantSlalom from './giantSlalom';
import shiritori from './shiritori';
import cheese from './cheese';
import forest from './forest';
import angel from './angel';

Vue.config.productionTip = false;

const router = new VueRouter({
	routes: [
		{path: '/', component: topPage},
		{path: '/guild-house', component: guildHouse},
		{path: '/clan-chat', component: clanChat},
		{path: '/album', component: album},
		{path: '/clan-battle', component: clanBattle},
		{path: '/scramble', component: scramble},
		{path: '/giant-slalom', component: giantSlalom},
		{path: '/shiritori', component: shiritori},
		{path: '/cheese', component: cheese},
		{path: '/forest', component: forest},
		{path: '/angel', component: angel},
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
