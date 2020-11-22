<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">お兄ちゃん争奪</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, i) in names">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="stickers[i]" v-bind:src="stickers[i]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', stickers[i])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			names: [
				'普通のカカオ',
				'完熟カカオ',
				'極上カカオ'
			],
			stickers: [
				'./img/ordinary_cacao_valentine.webp',
				'./img/ripe_cacao_valentine.webp',
				'./img/best_cacao_valentine.webp'
			]
		};
	},
}
</script>
<style scoped>
</style>
