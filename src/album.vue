<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">思い出アルバム</div>
		<div class="uk-link-text uk-margin-top"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, nameIndex) in albumNames">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="albumStickers[nameIndex]" v-bind:src="albumStickers[nameIndex]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', albumStickers[nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created: function() {
		this.albumStickers = [
			require('./img/aoi_album.webp'), require('./img/aoi_hennyusei_album.webp'), require('./img/akari_album.webp'), require('./img/akari_angel_album.webp'), require('./img/akino_album.webp'),
			require('./img/ayane_album.webp'), require('./img/ayumi_album.webp'), require('./img/ayumi_wonder_album.webp'), require('./img/arisa_album.webp'), require('./img/an_album.webp'), require('./img/anna_album.webp'),
			require('./img/io_album.webp'), require('./img/inori_album.webp'), require('./img/iriya_album.webp'), require('./img/eriko_album.webp'), require('./img/kaori_album.webp'), require('./img/kasumi_album.webp'),
			require('./img/kasumi_magical_album.webp'), require('./img/kaya_album.webp'), require('./img/kyaru_album.webp'), require('./img/kyouka_album.webp'), require('./img/kuuka_album.webp'),
			require('./img/kuuka_oedo_album.webp'), require('./img/kurisu_album.webp'), require('./img/kurumi_album.webp'), require('./img/gurea_album.webp'), require('./img/kuroe_album.webp'), require('./img/kokkoro_album.webp'),
			require('./img/kokkoro_princess_album.webp'), require('./img/saren_album.webp'), require('./img/jita_album.webp'), require('./img/shiori_album.webp'), require('./img/shiori_magical_album.webp'),
			require('./img/shizuru_album.webp'), require('./img/shinobu_album.webp'), require('./img/jun_album.webp'), require('./img/suzuna_album.webp'), require('./img/suzume_album.webp'), require('./img/tamaki_album.webp'),
			require('./img/chieru_album.webp'), require('./img/chika_album.webp'), require('./img/tsumugi_album.webp'), require('./img/tomo_album.webp'), require('./img/nanaka_album.webp'),require('./img/ninon_album.webp'),
			require('./img/ninon_oedo_album.webp'), require('./img/neneka_album.webp'), require('./img/nozomi_album.webp'), require('./img/hatsune_album.webp'), require('./img/hiyori_album.webp'), require('./img/peko_album.webp'),
			require('./img/peko_princess_album.webp'), require('./img/makoto_album.webp'), require('./img/matsuri_album.webp'), require('./img/mahiru_album.webp'), require('./img/mahiru_ranger_album.webp'),
			require('./img/maho_album.webp'), require('./img/misaki_album.webp'), require('./img/misato_album.webp'), require('./img/misogi_album.webp'), require('./img/mitsuki_album.webp'), require('./img/mihuyu_album.webp'),
			require('./img/mimi_album.webp'), require('./img/miyako_album.webp'), require('./img/muimi_album.webp'), require('./img/monika_album.webp'), require('./img/monika_magical_album.webp'), require('./img/yui_album.webp'),
			require('./img/yui_princess_album.webp'), require('./img/yukari_album.webp'), require('./img/yuki_album.webp'), require('./img/yuni_album.webp'), require('./img/yori_album.webp'), require('./img/yori_angel_album.webp'),
			require('./img/rabirisuta_album.webp'), require('./img/rino_album.webp'), require('./img/rino_wonder_album.webp'), require('./img/rima_album.webp'), require('./img/rin_album.webp'),
			require('./img/rin_ranger_album.webp'), require('./img/ruu_album.webp'), require('./img/ruka_album.webp'), require('./img/runa_album.webp'), require('./img/rei_album.webp')
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			albumNames: [
				'アオイ', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ', 'イリヤ', 'エリコ', 'カオリ', 'カスミ',
				'カスミ (マジカル)', 'カヤ', 'キャル', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア', 'クロエ', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シオリ',
				'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ', 'チエル', 'チカ', 'ツムギ', 'トモ', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ', 'ヒヨリ', 'ペコリーヌ',
				'ペコリーヌ (プリンセス)', 'マコト', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ', 'モニカ (マジカル)', 'ユイ',
				'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ヨリ (エンジェル)', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ', 'ルナ', 'レイ'
			],
			albumStickers: [],
		}
	},
}
</script>
<style scoped>
</style>
