<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">クウカ大回転</div>
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
				'間欠泉',
				'トルネード',
				'向かい風',
				'バナナジャンプ',
				'超低空飛行',
				'アユミのうちわ',
				'ジズ',
				'スーパーボール',
				'落雷',
				'バナナスライド',
				'成層圏突入',
				'追い風',
				'ニノンの爆裂忍法',
				'ロケット',
				'腹すべり',
				'メサルティム',
				'アクダイカン像',
				'土砂降り雨',
				'目回し',
				'ドリル'
			],
			stickers: [
				'./img/geyser_giant_slalom.webp',
				'./img/tornado_giant_slalom.webp',
				'./img/headwind_giant_slalom.webp',
				'./img/banana_jump_giant_slalom.webp',
				'./img/ultra_low_flight_giant_slalom.webp',
				'./img/ayumis_fan_giant_slalom.webp',
				'./img/jizu_giant_slalom.webp',
				'./img/super_ball_giant_slalom.webp',
				'./img/lightning_strike_giant_slalom.webp',
				'./img/banana_slide_giant_slalom.webp',
				'./img/atmospheric_entry_giant_slalom.webp',
				'./img/tailwind_giant_slalom.webp',
				'./img/ninons_explosive_ninja_giant_slalom.webp',
				'./img/rocket_giant_slalom.webp',
				'./img/belly_slide_giant_slalom.webp',
				'./img/mesarthim_giant_slalom.webp',
				'./img/akudaikan_statue_giant_slalom.webp',
				'./img/downpour_giant_slalom.webp',
				'./img/giddy_giant_slalom.webp',
				'./img/drill_giant_slalom.webp'
			]
		};
	},
}
</script>
<style scoped>
</style>
