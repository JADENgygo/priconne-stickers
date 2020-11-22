<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">しりとりドラゴンズ</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, nameIndex) in shiritoriWords">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="shiritoriStickers[nameIndex]" v-bind:src="shiritoriStickers[nameIndex]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', shiritoriStickers[nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created: function() {
		/*
		this.shiritoriStickers = [
			require('./img/apple_shiritori.webp'), require('./img/gorilla_shiritori.webp'), require('./img/trumpet_shiritori.webp'), require('./img/pineapple_shiritori.webp'), require('./img/ruby_shiritori.webp'),
			require('./img/beer_shiritori.webp'), require('./img/bow_and_row_shiritori.webp'), require('./img/note_shiritori.webp'), require('./img/paint_shiritori.webp'), require('./img/sword_shiritori.webp'),
			require('./img/glasses_shiritori.webp'), require('./img/loupe_shiritori.webp'), require('./img/meat_shiritori.webp'), require('./img/moon_shiritori.webp'), require('./img/bat_shiritori.webp'),
			require('./img/bird_shiritori.webp'), require('./img/shoes_shiritori.webp'), require('./img/cat_shiritori.webp'), require('./img/goldfish_shiritori.webp'), require('./img/mouse_shiritori.webp'),
			require('./img/egg_shiritori.webp'), require('./img/ship_shiritori.webp'), require('./img/milk_shiritori.webp'), require('./img/chocolate_shiritori.webp'), require('./img/acorn_shiritori.webp'),
			require('./img/strawberry_shiritori.webp'), require('./img/tiger_shiritori.webp'), require('./img/stuffed_animal_shiritori.webp'), require('./img/bomb_shiritori.webp'), require('./img/watermelon_shiritori.webp'),
			require('./img/horse_shiritori.webp'), require('./img/chair_shiritori.webp'), require('./img/sea_shiritori.webp'), require('./img/hermit_crab_shiritori.webp'), require('./img/whistle_shiritori.webp'),
			require('./img/book_shiritori.webp'), require('./img/fish_shiritori.webp'), require('./img/tree_shiritori.webp'), require('./img/candy_shiritori.webp'), require('./img/hammer_shiritori.webp'),
			require('./img/star_shiritori.webp'), require('./img/hat_shiritori.webp'), require('./img/cup_shiritori.webp'), require('./img/dog_shiritori.webp'), require('./img/flag_shiritori.webp'),
			require('./img/cake_shiritori.webp'), require('./img/microphone_shiritori.webp'), require('./img/lipstick_shiritori.webp'), require('./img/mochi_shiritori.webp'), require('./img/fairy_shiritori.webp'),
			require('./img/umbrella_shiritori.webp'), require('./img/dice_shiritori.webp'), require('./img/letter_shiritori.webp'), require('./img/grape_shiritori.webp'), require('./img/sheep_shiritori.webp'),
			require('./img/tofu_shiritori.webp'), require('./img/duck_shiritori.webp'), require('./img/dragonfly_shiritori.webp'), require('./img/leaf_shiritori.webp'), require('./img/ring_shiritori.webp'),
			require('./img/rope_shiritori.webp'), require('./img/shield_shiritori.webp'), require('./img/money_shiritori.webp'), require('./img/pudding_shiritori.webp'), require('./img/necklace_shiritori.webp'),
			require('./img/rice_ear_shiritori.webp'), require('./img/soy_sauce_shiritori.webp'), require('./img/belt_conveyor_shiritori.webp'), require('./img/chandelier_shiritori.webp'), require('./img/salt_shiritori.webp'),
			require('./img/whirlpool_shiritori.webp'), require('./img/rod_shiritori.webp'), require('./img/pot_shiritori.webp'), require('./img/seesaw_shiritori.webp'), require('./img/brush_shiritori.webp'),
			require('./img/work_out_shiritori.webp'), require('./img/ghost_shiritori.webp'), require('./img/hiyori_shiritori.webp'), require('./img/yui_shiritori.webp'), require('./img/rei_shiritori.webp'),
			require('./img/misogi_shiritori.webp'), require('./img/matsuri_shiritori.webp'), require('./img/akari_shiritori.webp'), require('./img/miyako_shiritori.webp'), require('./img/yuki_shiritori.webp'),
			require('./img/anna_shiritori.webp'), require('./img/maho_shiritori.webp'), require('./img/rino_shiritori.webp'), require('./img/hatsune_shiritori.webp'), require('./img/nanaka_shiritori.webp'),
			require('./img/kasumi_shiritori.webp'), require('./img/misato_shiritori.webp'), require('./img/suzuna_shiritori.webp'), require('./img/kaori_shiritori.webp'), require('./img/io_shiritori.webp'),
			require('./img/mimi_shiritori.webp'), require('./img/kurumi_shiritori.webp'), require('./img/yori_shiritori.webp'), require('./img/ayane_shiritori.webp'), require('./img/suzume_shiritori.webp'),
			require('./img/rin_shiritori.webp'), require('./img/eriko_shiritori.webp'), require('./img/saren_shiritori.webp'), require('./img/nozomi_shiritori.webp'), require('./img/ninon_shiritori.webp'),
			require('./img/shinobu_shiritori.webp'), require('./img/akino_shiritori.webp'), require('./img/mahiru_shiritori.webp'), require('./img/yukari_shiritori.webp'), require('./img/kyouka_shiritori.webp'),
			require('./img/tomo_shiritori.webp'), require('./img/shiori_shiritori.webp'), require('./img/aoi_shiritori.webp'), require('./img/chika_shiritori.webp'), require('./img/makoto_shiritori.webp'),
			require('./img/iriya_shiritori.webp'), require('./img/kuuka_shiritori.webp'), require('./img/tamaki_shiritori.webp'), require('./img/jun_shiritori.webp'), require('./img/mihuyu_shiritori.webp'),
			require('./img/shizuru_shiritori.webp'), require('./img/misaki_shiritori.webp'), require('./img/mitsuki_shiritori.webp'), require('./img/rima_shiritori.webp'), require('./img/monika_shiritori.webp'),
			require('./img/tsumugi_shiritori.webp'), require('./img/ayumi_shiritori.webp'), require('./img/ruka_shiritori.webp'), require('./img/jita_shiritori.webp'), require('./img/peko_shiritori.webp'),
			require('./img/kokkoro_shiritori.webp'), require('./img/kyaru_shiritori.webp'), require('./img/muimi_shiritori.webp'), require('./img/arisa_shiritori.webp'), require('./img/neneka_shiritori.webp'),
			require('./img/kurisu_shiritori.webp'), require('./img/inori_shiritori.webp'), require('./img/kaya_shiritori.webp'), require('./img/homare_shiritori.webp'), require('./img/kuroe_shiritori.webp'),
			require('./img/chieru_shiritori.webp'), require('./img/yuni_shiritori.webp')
		];
		*/
		this.shiritoriStickers = [
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
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			shiritoriWords: [
				'リンゴ', 'ゴリラ', 'ラッパ', 'パイナップル', 'ルビー', 'ビールっぽいもの', 'ゆみや', 'おんぷ', 'えのぐ', 'けん', 'めがね', 'むしめがね', 'にく', 'つき', 'こうもり', 'とり', 'くつ', 'ねこ', 'きんぎょ', 'ねずみ',
				'たまご', 'ふね', 'ぎゅうにゅう', 'チョコレート', 'どんぐり', 'いちご', 'とら', 'ぬいぐるみ', 'ばくだん', 'すいか', 'うま', 'いす', 'うみ', 'やどかり', 'ふえ', 'ほん', 'さかな', 'ツリー', 'あめ', 'ハンマー',
				'ほし', 'ぼうし', 'カップ', 'いぬ', 'はた', 'ケーキ', 'マイク', 'くちべに', 'もち', 'ようせい', 'かさ', 'さいころ', 'てがみ', 'ブドウ', 'ひつじ', 'とうふ', 'あひる', 'とんぼ', 'はっぱ', 'ゆびわ', 'なわ', 'たて',
				'おかね', 'プリンアラモード', 'ネックレス', 'いなほ', 'しょうゆ', 'ベルトコンベア', 'シャンデリア', 'しお', 'うずしお', 'つりざお', 'なべ', 'シーソー', 'ふで', 'きんトレ', 'おばけ', 'ヒヨリ', 'ユイ', 'レイ',
				'ミソギ', 'マツリ', 'アカリ', 'ミヤコ', 'ユキ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'ナナカ', 'カスミ', 'ミサト', 'スズナ', 'カオリ', 'イオ', 'ミミ', 'クルミ', 'ヨリ', 'アヤネ', 'スズメ', 'リン', 'エリコ', 'サレン',
				'ノゾミ', 'ニノン', 'シノブ', 'アキノ', 'マヒル', 'ユカリ', 'キョウカ', 'トモ', 'シオリ', 'アオイ', 'チカ', 'マコト', 'イリヤ', 'クウカ', 'タマキ', 'ジュン', 'ミフユ', 'シズル', 'ミサキ', 'ミツキ', 'リマ', 'モニカ',
				'ツムギ', 'アユミ', 'ルカ', 'ジータ', 'ペコリーヌ', 'コッコロ', 'キャル', 'ムイミ', 'アリサ', 'ネネカ', 'クリスティーナ', 'イノリ', 'カヤ', 'ホマレ', 'クロエ', 'チエル', 'ユニ'
			],
			shiritoriStickers: [],
		}
	},
}
</script>
<style scoped>
</style>
