<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">思い出アルバム</div>
		<div class="uk-link-text uk-margin-top"><router-link to="/">トップページ</router-link></div>
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
				'アオイ', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ', 'イリヤ', 'エリコ', 'カオリ', 'カスミ',
				'カスミ (マジカル)', 'カヤ', 'キャル', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア', 'クロエ', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シオリ',
				'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ', 'チエル', 'チカ', 'ツムギ', 'トモ', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ', 'ヒヨリ', 'ペコリーヌ',
				'ペコリーヌ (プリンセス)', 'マコト', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ', 'モニカ (マジカル)', 'ユイ',
				'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ヨリ (エンジェル)', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ', 'ルナ', 'レイ'
			],
			stickers: [
				'./img/aoi_album.webp', './img/aoi_hennyusei_album.webp', './img/akari_album.webp', './img/akari_angel_album.webp', './img/akino_album.webp',
				'./img/ayane_album.webp', './img/ayumi_album.webp', './img/ayumi_wonder_album.webp', './img/arisa_album.webp', './img/an_album.webp', './img/anna_album.webp',
				'./img/io_album.webp', './img/inori_album.webp', './img/iriya_album.webp', './img/eriko_album.webp', './img/kaori_album.webp', './img/kasumi_album.webp',
				'./img/kasumi_magical_album.webp', './img/kaya_album.webp', './img/kyaru_album.webp', './img/kyouka_album.webp', './img/kuuka_album.webp',
				'./img/kuuka_oedo_album.webp', './img/kurisu_album.webp', './img/kurumi_album.webp', './img/gurea_album.webp', './img/kuroe_album.webp', './img/kokkoro_album.webp',
				'./img/kokkoro_princess_album.webp', './img/saren_album.webp', './img/jita_album.webp', './img/shiori_album.webp', './img/shiori_magical_album.webp',
				'./img/shizuru_album.webp', './img/shinobu_album.webp', './img/jun_album.webp', './img/suzuna_album.webp', './img/suzume_album.webp', './img/tamaki_album.webp',
				'./img/chieru_album.webp', './img/chika_album.webp', './img/tsumugi_album.webp', './img/tomo_album.webp', './img/nanaka_album.webp','./img/ninon_album.webp',
				'./img/ninon_oedo_album.webp', './img/neneka_album.webp', './img/nozomi_album.webp', './img/hatsune_album.webp', './img/hiyori_album.webp', './img/peko_album.webp',
				'./img/peko_princess_album.webp', './img/makoto_album.webp', './img/matsuri_album.webp', './img/mahiru_album.webp', './img/mahiru_ranger_album.webp',
				'./img/maho_album.webp', './img/misaki_album.webp', './img/misato_album.webp', './img/misogi_album.webp', './img/mitsuki_album.webp', './img/mihuyu_album.webp',
				'./img/mimi_album.webp', './img/miyako_album.webp', './img/muimi_album.webp', './img/monika_album.webp', './img/monika_magical_album.webp', './img/yui_album.webp',
				'./img/yui_princess_album.webp', './img/yukari_album.webp', './img/yuki_album.webp', './img/yuni_album.webp', './img/yori_album.webp', './img/yori_angel_album.webp',
				'./img/rabirisuta_album.webp', './img/rino_album.webp', './img/rino_wonder_album.webp', './img/rima_album.webp', './img/rin_album.webp',
				'./img/rin_ranger_album.webp', './img/ruu_album.webp', './img/ruka_album.webp', './img/runa_album.webp', './img/rei_album.webp'
			]
		}
	},
}
</script>
<style scoped>
</style>
