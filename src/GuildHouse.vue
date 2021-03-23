<template>
	<div class="uk-container">
		<div class="uk-margin-top"><router-link to="/">トップページ</router-link></div>
		<div class="uk-margin-top">ギルドハウス</div>
		<template v-for="(name, i) in names">
			<div class="uk-text-bold uk-margin-top">{{ name }}</div>
			<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center uk-margin-top uk-grid">
				<div v-for="sticker in stickers[i]" v-bind:key="sticker">
					<img v-bind:id="sticker" v-bind:src="sticker">
				</div>
			</div>
		</template>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class GuildHouse extends Vue {
	names: string[] = [
		'美食殿',
		'トゥインクルウィッシュ',
		'ラビリンス',
		'カルミナ',
		'リトルリリカル',
		'フォレスティエ',
		'ディアボロス',
		'NIGHTMARE',
		'サレンディア救護院',
		'カォン',
		'エリザベスパーク',
		'メルクリウス財団',
		'トワイライトキャラバン',
		'ルーセント学院',
		'ヴァイスフリューゲルランドソル支部',
		'なかよし部',
		'ドラゴンズネスト'
	];
	stickers: string[][] = [
		['./img/guild_house/peko.webp', './img/guild_house/kokkoro.webp', './img/guild_house/kyaru.webp', './img/guild_house/sheffi.webp'],
		['./img/guild_house/hiyori.webp', './img/guild_house/yui.webp', './img/guild_house/rei.webp'],
		['./img/guild_house/rabirisuta.webp', './img/guild_house/shizuru.webp', './img/guild_house/rino.webp'],
		['./img/guild_house/nozomi.webp', './img/guild_house/chika.webp', './img/guild_house/tsumugi.webp'],
		['./img/guild_house/mimi.webp', './img/guild_house/misogi.webp', './img/guild_house/kyouka.webp'],
		['./img/guild_house/misato.webp', './img/guild_house/hatsune.webp', './img/guild_house/aoi.webp'],
		['./img/guild_house/iriya.webp', './img/guild_house/yori.webp', './img/guild_house/akari.webp', './img/guild_house/shinobu.webp', './img/guild_house/miyako.webp'],
		['./img/guild_house/jun.webp', './img/guild_house/kurisu.webp', './img/guild_house/tomo.webp', './img/guild_house/matsuri.webp'],
		['./img/guild_house/saren.webp', './img/guild_house/suzume.webp', './img/guild_house/ayane.webp', './img/guild_house/kurumi.webp'],
		['./img/guild_house/maho.webp', './img/guild_house/makoto.webp', './img/guild_house/kaori.webp', './img/guild_house/kasumi.webp'],
		['./img/guild_house/mahiru.webp', './img/guild_house/rima.webp', './img/guild_house/shiori.webp', './img/guild_house/rin.webp'],
		['./img/guild_house/akino.webp', './img/guild_house/mihuyu.webp', './img/guild_house/yukari.webp', './img/guild_house/tamaki.webp'],
		['./img/guild_house/ruka.webp', './img/guild_house/mitsuki.webp', './img/guild_house/eriko.webp', './img/guild_house/nanaka.webp', './img/guild_house/anna.webp'],
		['./img/guild_house/io.webp', './img/guild_house/misaki.webp', './img/guild_house/suzuna.webp'],
		['./img/guild_house/monika.webp', './img/guild_house/yuki.webp', './img/guild_house/ninon.webp', './img/guild_house/kuuka.webp', './img/guild_house/ayumi.webp'],
		['./img/guild_house/yuni.webp', './img/guild_house/kuroe.webp', './img/guild_house/chieru.webp'],
		['./img/guild_house/kaya.webp', './img/guild_house/inori.webp']
	];
}
</script>
<style scoped>
</style>
