<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">クランチャット</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, nameIndex) in clanChatNames">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="clanChatStikcers[nameIndex]" v-bind:src="clanChatStikcers[nameIndex]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', clanChatStikcers[nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created: function() {
		this.clanChatStikcers = [
			require('./img/peko.webp'),
			require('./img/kokkoro.webp'),
			require('./img/kyaru.webp'),
			require('./img/hiyori.webp'),
			require('./img/yui.webp'),
			require('./img/rei.webp'),
			require('./img/misogi.webp'),
			require('./img/anna.webp'),
			require('./img/maho.webp'),
			require('./img/rino.webp'),
			require('./img/hatsune.webp'),
			require('./img/suzuna.webp'),
			require('./img/kaori.webp'),
			require('./img/mimi.webp'),
			require('./img/kurumi.webp'),
			require('./img/yori.webp'),
			require('./img/ayane.webp'),
			require('./img/suzume.webp'),
			require('./img/eriko.webp'),
			require('./img/saren.webp'),
			require('./img/nozomi.webp'),
			require('./img/shinobu.webp'),
			require('./img/yukari.webp'),
			require('./img/kyouka.webp'),
			require('./img/aoi.webp'),
			require('./img/iriya.webp'),
			require('./img/kuuka.webp'),
			require('./img/tamaki.webp'),
			require('./img/mihuyu.webp'),
			require('./img/shizuru.webp'),
			require('./img/misaki.webp'),
			require('./img/monika.webp')
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			clanChatNames: [
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
			clanChatStikcers: [],
		};
	},
}
</script>
<style scoped>
</style>
