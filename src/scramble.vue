<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">お兄ちゃん争奪</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, nameIndex) in cacaoNames">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="cacaoStickers[nameIndex]" v-bind:src="cacaoStickers[nameIndex]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', cacaoStickers[nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created: function() {
		this.cacaoStickers = [
			require('./img/ordinary_cacao_valentine.webp'),
			require('./img/ripe_cacao_valentine.webp'),
			require('./img/best_cacao_valentine.webp')
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			cacaoNames: [
				'普通のカカオ',
				'完熟カカオ',
				'極上カカオ'
			],
			cacaoStickers: []
		};
	},
}
</script>
<style scoped>
</style>
