<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">クランチャット</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, i) in names">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="stikcers[i]" v-bind:src="stikcers[i]"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			names: [
				'ペコリーヌ',
				'コッコロ',
				'キャル',
				'ヒヨリ',
				'ユイ',
				'レイ',
				'ミソギ',
				'アンナ',
				'マホ',
				'リノ',
				'ハツネ',
				'スズナ',
				'カオリ',
				'ミミ',
				'クルミ',
				'ヨリ',
				'アヤネ',
				'スズメ',
				'エリコ',
				'サレン',
				'ノゾミ',
				'シノブ',
				'ユカリ',
				'キョウカ',
				'アオイ',
				'イリヤ',
				'クウカ',
				'タマキ',
				'ミフユ',
				'シズル',
				'ミサキ',
				'モニカ'
			],
			stikcers: [
				'./img/peko.webp',
				'./img/kokkoro.webp',
				'./img/kyaru.webp',
				'./img/hiyori.webp',
				'./img/yui.webp',
				'./img/rei.webp',
				'./img/misogi.webp',
				'./img/anna.webp',
				'./img/maho.webp',
				'./img/rino.webp',
				'./img/hatsune.webp',
				'./img/suzuna.webp',
				'./img/kaori.webp',
				'./img/mimi.webp',
				'./img/kurumi.webp',
				'./img/yori.webp',
				'./img/ayane.webp',
				'./img/suzume.webp',
				'./img/eriko.webp',
				'./img/saren.webp',
				'./img/nozomi.webp',
				'./img/shinobu.webp',
				'./img/yukari.webp',
				'./img/kyouka.webp',
				'./img/aoi.webp',
				'./img/iriya.webp',
				'./img/kuuka.webp',
				'./img/tamaki.webp',
				'./img/mihuyu.webp',
				'./img/shizuru.webp',
				'./img/misaki.webp',
				'./img/monika.webp'
			]
		};
	},
}
</script>
<style scoped>
</style>
