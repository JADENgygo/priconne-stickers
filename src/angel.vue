<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">授けの財団と聖なる学舎の異端児</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, nameIndex) in xNotePageNames">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="xNoteStickers[nameIndex]" v-bind:src="xNoteStickers[nameIndex]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', xNoteStickers[nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created: function() {
		/*
		this.xNoteStickers = [
			require('./img/chieru_foundation.webp'),
			require('./img/kuroe_foundation.webp'),
			require('./img/yuni_foundation.webp'),
			require('./img/akino_foundation.webp'),
			require('./img/tamaki_foundation.webp'),
			require('./img/yukari_foundation.webp'),
			require('./img/mihuyu_foundation.webp'),
			require('./img/mercurius_foundation.webp'),
			require('./img/nakayoshix1_foundation.webp'),
			require('./img/nakayoshix2_foundation.webp'),
			require('./img/nakayoshix3_foundation.webp')
		];
		*/
		this.xNoteStickers = [
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
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			xNotePageNames: [
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
			xNoteStickers: []
		}
	},
}
</script>
<style scoped>
</style>
