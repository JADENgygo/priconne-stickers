<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">しりとりドラゴンズ</div>
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
				'リンゴ', 'ゴリラ', 'ラッパ', 'パイナップル', 'ルビー', 'ビールっぽいもの', 'ゆみや', 'おんぷ', 'えのぐ', 'けん', 'めがね', 'むしめがね', 'にく', 'つき', 'こうもり', 'とり', 'くつ', 'ねこ', 'きんぎょ', 'ねずみ',
				'たまご', 'ふね', 'ぎゅうにゅう', 'チョコレート', 'どんぐり', 'いちご', 'とら', 'ぬいぐるみ', 'ばくだん', 'すいか', 'うま', 'いす', 'うみ', 'やどかり', 'ふえ', 'ほん', 'さかな', 'ツリー', 'あめ', 'ハンマー',
				'ほし', 'ぼうし', 'カップ', 'いぬ', 'はた', 'ケーキ', 'マイク', 'くちべに', 'もち', 'ようせい', 'かさ', 'さいころ', 'てがみ', 'ブドウ', 'ひつじ', 'とうふ', 'あひる', 'とんぼ', 'はっぱ', 'ゆびわ', 'なわ', 'たて',
				'おかね', 'プリンアラモード', 'ネックレス', 'いなほ', 'しょうゆ', 'ベルトコンベア', 'シャンデリア', 'しお', 'うずしお', 'つりざお', 'なべ', 'シーソー', 'ふで', 'きんトレ', 'おばけ', 'ヒヨリ', 'ユイ', 'レイ',
				'ミソギ', 'マツリ', 'アカリ', 'ミヤコ', 'ユキ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'ナナカ', 'カスミ', 'ミサト', 'スズナ', 'カオリ', 'イオ', 'ミミ', 'クルミ', 'ヨリ', 'アヤネ', 'スズメ', 'リン', 'エリコ', 'サレン',
				'ノゾミ', 'ニノン', 'シノブ', 'アキノ', 'マヒル', 'ユカリ', 'キョウカ', 'トモ', 'シオリ', 'アオイ', 'チカ', 'マコト', 'イリヤ', 'クウカ', 'タマキ', 'ジュン', 'ミフユ', 'シズル', 'ミサキ', 'ミツキ', 'リマ', 'モニカ',
				'ツムギ', 'アユミ', 'ルカ', 'ジータ', 'ペコリーヌ', 'コッコロ', 'キャル', 'ムイミ', 'アリサ', 'ネネカ', 'クリスティーナ', 'イノリ', 'カヤ', 'ホマレ', 'クロエ', 'チエル', 'ユニ'
			],
			stickers: [
				'./img/apple_shiritori.webp', './img/gorilla_shiritori.webp', './img/trumpet_shiritori.webp', './img/pineapple_shiritori.webp', './img/ruby_shiritori.webp',
				'./img/beer_shiritori.webp', './img/bow_and_row_shiritori.webp', './img/note_shiritori.webp', './img/paint_shiritori.webp', './img/sword_shiritori.webp',
				'./img/glasses_shiritori.webp', './img/loupe_shiritori.webp', './img/meat_shiritori.webp', './img/moon_shiritori.webp', './img/bat_shiritori.webp',
				'./img/bird_shiritori.webp', './img/shoes_shiritori.webp', './img/cat_shiritori.webp', './img/goldfish_shiritori.webp', './img/mouse_shiritori.webp',
				'./img/egg_shiritori.webp', './img/ship_shiritori.webp', './img/milk_shiritori.webp', './img/chocolate_shiritori.webp', './img/acorn_shiritori.webp',
				'./img/strawberry_shiritori.webp', './img/tiger_shiritori.webp', './img/stuffed_animal_shiritori.webp', './img/bomb_shiritori.webp', './img/watermelon_shiritori.webp',
				'./img/horse_shiritori.webp', './img/chair_shiritori.webp', './img/sea_shiritori.webp', './img/hermit_crab_shiritori.webp', './img/whistle_shiritori.webp',
				'./img/book_shiritori.webp', './img/fish_shiritori.webp', './img/tree_shiritori.webp', './img/candy_shiritori.webp', './img/hammer_shiritori.webp',
				'./img/star_shiritori.webp', './img/hat_shiritori.webp', './img/cup_shiritori.webp', './img/dog_shiritori.webp', './img/flag_shiritori.webp',
				'./img/cake_shiritori.webp', './img/microphone_shiritori.webp', './img/lipstick_shiritori.webp', './img/mochi_shiritori.webp', './img/fairy_shiritori.webp',
				'./img/umbrella_shiritori.webp', './img/dice_shiritori.webp', './img/letter_shiritori.webp', './img/grape_shiritori.webp', './img/sheep_shiritori.webp',
				'./img/tofu_shiritori.webp', './img/duck_shiritori.webp', './img/dragonfly_shiritori.webp', './img/leaf_shiritori.webp', './img/ring_shiritori.webp',
				'./img/rope_shiritori.webp', './img/shield_shiritori.webp', './img/money_shiritori.webp', './img/pudding_shiritori.webp', './img/necklace_shiritori.webp',
				'./img/rice_ear_shiritori.webp', './img/soy_sauce_shiritori.webp', './img/belt_conveyor_shiritori.webp', './img/chandelier_shiritori.webp', './img/salt_shiritori.webp',
				'./img/whirlpool_shiritori.webp', './img/rod_shiritori.webp', './img/pot_shiritori.webp', './img/seesaw_shiritori.webp', './img/brush_shiritori.webp',
				'./img/work_out_shiritori.webp', './img/ghost_shiritori.webp', './img/hiyori_shiritori.webp', './img/yui_shiritori.webp', './img/rei_shiritori.webp',
				'./img/misogi_shiritori.webp', './img/matsuri_shiritori.webp', './img/akari_shiritori.webp', './img/miyako_shiritori.webp', './img/yuki_shiritori.webp',
				'./img/anna_shiritori.webp', './img/maho_shiritori.webp', './img/rino_shiritori.webp', './img/hatsune_shiritori.webp', './img/nanaka_shiritori.webp',
				'./img/kasumi_shiritori.webp', './img/misato_shiritori.webp', './img/suzuna_shiritori.webp', './img/kaori_shiritori.webp', './img/io_shiritori.webp',
				'./img/mimi_shiritori.webp', './img/kurumi_shiritori.webp', './img/yori_shiritori.webp', './img/ayane_shiritori.webp', './img/suzume_shiritori.webp',
				'./img/rin_shiritori.webp', './img/eriko_shiritori.webp', './img/saren_shiritori.webp', './img/nozomi_shiritori.webp', './img/ninon_shiritori.webp',
				'./img/shinobu_shiritori.webp', './img/akino_shiritori.webp', './img/mahiru_shiritori.webp', './img/yukari_shiritori.webp', './img/kyouka_shiritori.webp',
				'./img/tomo_shiritori.webp', './img/shiori_shiritori.webp', './img/aoi_shiritori.webp', './img/chika_shiritori.webp', './img/makoto_shiritori.webp',
				'./img/iriya_shiritori.webp', './img/kuuka_shiritori.webp', './img/tamaki_shiritori.webp', './img/jun_shiritori.webp', './img/mihuyu_shiritori.webp',
				'./img/shizuru_shiritori.webp', './img/misaki_shiritori.webp', './img/mitsuki_shiritori.webp', './img/rima_shiritori.webp', './img/monika_shiritori.webp',
				'./img/tsumugi_shiritori.webp', './img/ayumi_shiritori.webp', './img/ruka_shiritori.webp', './img/jita_shiritori.webp', './img/peko_shiritori.webp',
				'./img/kokkoro_shiritori.webp', './img/kyaru_shiritori.webp', './img/muimi_shiritori.webp', './img/arisa_shiritori.webp', './img/neneka_shiritori.webp',
				'./img/kurisu_shiritori.webp', './img/inori_shiritori.webp', './img/kaya_shiritori.webp', './img/homare_shiritori.webp', './img/kuroe_shiritori.webp',
				'./img/chieru_shiritori.webp', './img/yuni_shiritori.webp'
			]
		};
	},
}
</script>
<style scoped>
</style>
