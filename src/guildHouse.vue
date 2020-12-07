<template>
	<div class="uk-container">
		<div class="uk-margin-top"><router-link to="/">トップページ</router-link></div>
		<div class="uk-margin-top">ギルドハウス</div>
		<template v-for="(name, i) in names">
			<div class="uk-text-bold uk-margin-top">{{ name }}</div>
			<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center uk-margin-top" uk-grid>
				<div v-for="sticker in stickers[i]">
					<img v-bind:id="sticker" v-bind:src="sticker">
				</div>
			</div>
		</template>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			names: [
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
			stickers: [
				['./img/peko_guildhouse.webp', './img/kokkoro_guildhouse.webp', './img/kyaru_guildhouse.webp'],
				['./img/hiyori_guildhouse.webp', './img/yui_guildhouse.webp', './img/rei_guildhouse.webp'],
				['./img/rabirisuta_guildhouse.webp', './img/shizuru_guildhouse.webp', './img/rino_guildhouse.webp'],
				['./img/nozomi_guildhouse.webp', './img/chika_guildhouse.webp', './img/tsumugi_guildhouse.webp'],
				['./img/mimi_guildhouse.webp', './img/misogi_guildhouse.webp', './img/kyouka_guildhouse.webp'],
				['./img/misato_guildhouse.webp', './img/hatsune_guildhouse.webp', './img/aoi_guildhouse.webp'],
				['./img/iriya_guildhouse.webp', './img/yori_guildhouse.webp', './img/akari_guildhouse.webp', './img/shinobu_guildhouse.webp', './img/miyako_guildhouse.webp'],
				['./img/jun_guildhouse.webp', './img/kurisu_guildhouse.webp', './img/tomo_guildhouse.webp', './img/matsuri_guildhouse.webp'],
				['./img/saren_guildhouse.webp', './img/suzume_guildhouse.webp', './img/ayane_guildhouse.webp', './img/kurumi_guildhouse.webp'],
				['./img/maho_guildhouse.webp', './img/makoto_guildhouse.webp', './img/kaori_guildhouse.webp', './img/kasumi_guildhouse.webp'],
				['./img/mahiru_guildhouse.webp', './img/rima_guildhouse.webp', './img/shiori_guildhouse.webp', './img/rin_guildhouse.webp'],
				['./img/akino_guildhouse.webp', './img/mihuyu_guildhouse.webp', './img/yukari_guildhouse.webp', './img/tamaki_guildhouse.webp'],
				['./img/ruka_guildhouse.webp', './img/mitsuki_guildhouse.webp', './img/eriko_guildhouse.webp', './img/nanaka_guildhouse.webp', './img/anna_guildhouse.webp'],
				['./img/io_guildhouse.webp', './img/misaki_guildhouse.webp', './img/suzuna_guildhouse.webp'],
				['./img/monika_guildhouse.webp', './img/yuki_guildhouse.webp', './img/ninon_guildhouse.webp', './img/kuuka_guildhouse.webp', './img/ayumi_guildhouse.webp'],
				['./img/yuni_guildhouse.webp', './img/kuroe_guildhouse.webp', './img/chieru_guildhouse.webp'],
				['./img/kaya_guildhouse.webp', './img/inori_guildhouse.webp']
			]
		}
	},
}
</script>
<style scoped>
</style>
