<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">授けの財団と聖なる学舎の異端児</div>
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
				'次世代へ継承すべき新言語',
				'私はとても作文が苦手です',
				'飛翔へと至るまで',
				'閃きましたわ!',
				'組み立てにゃ!',
				'私こんなの書いたっけ…?',
				'このままにしておけないわ',
				'特別講座を終えて',
				'考察',
				'試作機完成',
				'最終工程'
			],
			stickers: [
				'./img/chieru_foundation.webp',
				'./img/kuroe_foundation.webp',
				'./img/yuni_foundation.webp',
				'./img/akino_foundation.webp',
				'./img/tamaki_foundation.webp',
				'./img/yukari_foundation.webp',
				'./img/mihuyu_foundation.webp',
				'./img/mercurius_foundation.webp',
				'./img/nakayoshix1_foundation.webp',
				'./img/nakayoshix2_foundation.webp',
				'./img/nakayoshix3_foundation.webp'
			]
		}
	},
}
</script>
<style scoped>
</style>
