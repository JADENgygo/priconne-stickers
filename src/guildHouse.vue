<template>
	<div class="uk-container">
		<div class="uk-margin-top uk-text-lead">ギルドハウス</div>
		<div class="uk-margin-top"><router-link to="/" class="uk-link-text">トップページ</router-link></div>
		<template v-for="(guildName, i) in guildNames">
			<div class="uk-text-bold uk-margin-top">{{ guildName }}</div>
			<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center uk-margin-top" uk-grid>
				<div v-for="guildSticker in guildStickers[i]">
					<div><img v-bind:id="guildSticker" v-bind:src="guildSticker"></div>
					<div v-if="clipboardImpled"><button v-on:click="$emit('click', guildSticker)" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
export default {
	created: function() {
		this.guildStickers = [
			[require('./img/peko_guildhouse.webp'), require('./img/kokkoro_guildhouse.webp'), require('./img/kyaru_guildhouse.webp')],
			[require('./img/hiyori_guildhouse.webp'), require('./img/yui_guildhouse.webp'), require('./img/rei_guildhouse.webp')],
			[require('./img/rabirisuta_guildhouse.webp'), require('./img/shizuru_guildhouse.webp'), require('./img/rino_guildhouse.webp')],
			[require('./img/nozomi_guildhouse.webp'), require('./img/chika_guildhouse.webp'), require('./img/tsumugi_guildhouse.webp')],
			[require('./img/mimi_guildhouse.webp'), require('./img/misogi_guildhouse.webp'), require('./img/kyouka_guildhouse.webp')],
			[require('./img/misato_guildhouse.webp'), require('./img/hatsune_guildhouse.webp'), require('./img/aoi_guildhouse.webp')],
			[require('./img/iriya_guildhouse.webp'), require('./img/yori_guildhouse.webp'), require('./img/akari_guildhouse.webp'), require('./img/shinobu_guildhouse.webp'), require('./img/miyako_guildhouse.webp')],
			[require('./img/jun_guildhouse.webp'), require('./img/kurisu_guildhouse.webp'), require('./img/tomo_guildhouse.webp'), require('./img/matsuri_guildhouse.webp')],
			[require('./img/saren_guildhouse.webp'), require('./img/suzume_guildhouse.webp'), require('./img/ayane_guildhouse.webp'), require('./img/kurumi_guildhouse.webp')],
			[require('./img/maho_guildhouse.webp'), require('./img/makoto_guildhouse.webp'), require('./img/kaori_guildhouse.webp'), require('./img/kasumi_guildhouse.webp')],
			[require('./img/mahiru_guildhouse.webp'), require('./img/rima_guildhouse.webp'), require('./img/shiori_guildhouse.webp'), require('./img/rin_guildhouse.webp')],
			[require('./img/akino_guildhouse.webp'), require('./img/mihuyu_guildhouse.webp'), require('./img/yukari_guildhouse.webp'), require('./img/tamaki_guildhouse.webp')],
			[require('./img/ruka_guildhouse.webp'), require('./img/mitsuki_guildhouse.webp'), require('./img/eriko_guildhouse.webp'), require('./img/nanaka_guildhouse.webp'), require('./img/anna_guildhouse.webp')],
			[require('./img/io_guildhouse.webp'), require('./img/misaki_guildhouse.webp'), require('./img/suzuna_guildhouse.webp')],
			[require('./img/monika_guildhouse.webp'), require('./img/yuki_guildhouse.webp'), require('./img/ninon_guildhouse.webp'), require('./img/kuuka_guildhouse.webp'), require('./img/ayumi_guildhouse.webp')],
			[require('./img/yuni_guildhouse.webp'), require('./img/kuroe_guildhouse.webp'), require('./img/chieru_guildhouse.webp')],
			[require('./img/kaya_guildhouse.webp'), require('./img/inori_guildhouse.webp')]
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			guildNames: [
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
			],
			guildStickers: [],
		}
	},
}
</script>
<style scoped>
</style>
