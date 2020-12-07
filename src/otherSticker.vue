<template>
	<div>
		<div class="uk-margin-top">{{ title[subject] }}</div>
		<div class="uk-margin-top"><router-link to="/">トップページ</router-link></div>
		<div uk-grid class="uk-grid-small uk-margin-top uk-text-center uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l">
			<div v-for="(name, i) in content[subject].names" v-bind:key="name">
				<div class="uk-text-bold uk-margin-small-bottom">{{ name }}</div>
				<img v-bind:src="content[subject].stickers[i]">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		subject: String,
	},
	data: function() {
		return {
			title: {
				'clan-chat': 'クランチャット', 'album': '思い出アルバム', 'clan-battle': 'クランバトル', 'scramble': 'お兄ちゃん争奪', 'giant-slalom': 'クウカ大回転', 'shiritori': 'しりとりドラゴンズ', 'cheese': 'チーズお守り大作戦', 'forest': '森の臆病者と聖なる学舎の異端児',
				'angel': '授けの財団と聖なる学舎の異端'
			},
			content: {
				'clan-chat': {
					names: [
						'ペコリーヌ', 'コッコロ', 'キャル', 'ヒヨリ', 'ユイ', 'レイ', 'ミソギ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'スズナ', 'カオリ', 'ミミ', 'クルミ', 'ヨリ', 'アヤネ', 'スズメ', 'エリコ', 'サレン', 'ノゾミ', 'シノブ', 'ユカリ', 'キョウカ', 'アオイ',
						'イリヤ', 'クウカ', 'タマキ', 'ミフユ', 'シズル', 'ミサキ', 'モニカ'
					],
					stickers: [
						'./img/peko.webp', './img/kokkoro.webp', './img/kyaru.webp', './img/hiyori.webp', './img/yui.webp', './img/rei.webp', './img/misogi.webp', './img/anna.webp', './img/maho.webp', './img/rino.webp', './img/hatsune.webp', './img/suzuna.webp',
						'./img/kaori.webp', './img/mimi.webp', './img/kurumi.webp', './img/yori.webp', './img/ayane.webp', './img/suzume.webp', './img/eriko.webp', './img/saren.webp', './img/nozomi.webp', './img/shinobu.webp', './img/yukari.webp', './img/kyouka.webp',
						'./img/aoi.webp', './img/iriya.webp', './img/kuuka.webp', './img/tamaki.webp', './img/mihuyu.webp', './img/shizuru.webp', './img/misaki.webp', './img/monika.webp'
					],
				},
				'album': {
					names: [
						'アオイ', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ', 'イリヤ', 'エリコ', 'カオリ', 'カスミ',
						'カスミ (マジカル)', 'カヤ', 'キャル', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア', 'クロエ', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シオリ',
						'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ', 'チエル', 'チカ', 'ツムギ', 'トモ', 'トモ (マジカル)', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ',
						'ヒヨリ', 'ペコリーヌ', 'ペコリーヌ (プリンセス)', 'マコト', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ',
						'モニカ (マジカル)', 'ユイ', 'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ヨリ (エンジェル)', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ', 'ルナ', 'レイ'
					],
					stickers: [
						'./img/aoi_album.webp', './img/aoi_hennyusei_album.webp', './img/akari_album.webp', './img/akari_angel_album.webp', './img/akino_album.webp', './img/ayane_album.webp', './img/ayumi_album.webp', './img/ayumi_wonder_album.webp', './img/arisa_album.webp', './img/an_album.webp', './img/anna_album.webp',
						'./img/io_album.webp', './img/inori_album.webp', './img/iriya_album.webp', './img/eriko_album.webp', './img/kaori_album.webp', './img/kasumi_album.webp', './img/kasumi_magical_album.webp', './img/kaya_album.webp', './img/kyaru_album.webp', './img/kyouka_album.webp', './img/kuuka_album.webp',
						'./img/kuuka_oedo_album.webp', './img/kurisu_album.webp', './img/kurumi_album.webp', './img/gurea_album.webp', './img/kuroe_album.webp', './img/kokkoro_album.webp', './img/kokkoro_princess_album.webp', './img/saren_album.webp', './img/jita_album.webp', './img/shiori_album.webp', './img/shiori_magical_album.webp',
						'./img/shizuru_album.webp', './img/shinobu_album.webp', './img/jun_album.webp', './img/suzuna_album.webp', './img/suzume_album.webp', './img/tamaki_album.webp', './img/chieru_album.webp', './img/chika_album.webp', './img/tsumugi_album.webp', './img/tomo_album.webp', './img/tomo_magical_album.webp', './img/nanaka_album.webp','./img/ninon_album.webp',
						'./img/ninon_oedo_album.webp', './img/neneka_album.webp', './img/nozomi_album.webp', './img/hatsune_album.webp', './img/hiyori_album.webp', './img/peko_album.webp', './img/peko_princess_album.webp', './img/makoto_album.webp', './img/matsuri_album.webp', './img/mahiru_album.webp', './img/mahiru_ranger_album.webp',
						'./img/maho_album.webp', './img/misaki_album.webp', './img/misato_album.webp', './img/misogi_album.webp', './img/mitsuki_album.webp', './img/mihuyu_album.webp', './img/mimi_album.webp', './img/miyako_album.webp', './img/muimi_album.webp', './img/monika_album.webp', './img/monika_magical_album.webp', './img/yui_album.webp',
						'./img/yui_princess_album.webp', './img/yukari_album.webp', './img/yuki_album.webp', './img/yuni_album.webp', './img/yori_album.webp', './img/yori_angel_album.webp', './img/rabirisuta_album.webp', './img/rino_album.webp', './img/rino_wonder_album.webp', './img/rima_album.webp', './img/rin_album.webp',
						'./img/rin_ranger_album.webp', './img/ruu_album.webp', './img/ruka_album.webp', './img/runa_album.webp', './img/rei_album.webp'
					]
				},
				'clan-battle': {
					names: [
						'ゴブリングレート', 'ライライ', 'レイスロード', 'ダークガーゴイル', 'グラットン', 'オークチーフ', 'オブシダンワイバーン', 'レサトパルト', 'ワイバーン', 'ワイルドグリフォン', 'スカイワルキューレ', 'マスターセンリ', 'サジタリウス'
					],
					stickers: [
						'./img/goblin_great_clan_battle.webp', './img/rairai_clan_battle.webp', './img/wraith_lord_clan_battle.webp', './img/dark_gargoyle_clan_battle.webp', './img/guratton_clan_battle.webp', './img/orc_chief_clan_battle.webp', './img/obsidian_wyvern_clan_battle.webp',
						'./img/Lesath_pult_clan_battle.webp', './img/wyvern_clan_battle.webp', './img/wild_griffon_clan_battle.webp', './img/sky_valkyrie_clan_battle.webp', './img/master_senri_clan_battle.webp', './img/sagittarius_clan_battle.webp',
					]
				},
				'scramble': {
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
				},
				'giant-slalom': {
					names: [
						'間欠泉', 'トルネード', '向かい風', 'バナナジャンプ', '超低空飛行', 'アユミのうちわ', 'ジズ', 'スーパーボール', '落雷', 'バナナスライド', '成層圏突入', '追い風', 'ニノンの爆裂忍法', 'ロケット', '腹すべり', 'メサルティム', 'アクダイカン像', '土砂降り雨',
						'目回し', 'ドリル'
					],
					stickers: [
						'./img/geyser_giant_slalom.webp', './img/tornado_giant_slalom.webp', './img/headwind_giant_slalom.webp', './img/banana_jump_giant_slalom.webp', './img/ultra_low_flight_giant_slalom.webp', './img/ayumis_fan_giant_slalom.webp',
						'./img/jizu_giant_slalom.webp', './img/super_ball_giant_slalom.webp', './img/lightning_strike_giant_slalom.webp', './img/banana_slide_giant_slalom.webp', './img/atmospheric_entry_giant_slalom.webp', './img/tailwind_giant_slalom.webp',
						'./img/ninons_explosive_ninja_giant_slalom.webp', './img/rocket_giant_slalom.webp', './img/belly_slide_giant_slalom.webp', './img/mesarthim_giant_slalom.webp', './img/akudaikan_statue_giant_slalom.webp', './img/downpour_giant_slalom.webp',
						'./img/giddy_giant_slalom.webp', './img/drill_giant_slalom.webp'
					]
				},
				'shiritori': {
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
						'./img/apple_shiritori.webp', './img/gorilla_shiritori.webp', './img/trumpet_shiritori.webp', './img/pineapple_shiritori.webp', './img/ruby_shiritori.webp', './img/beer_shiritori.webp', './img/bow_and_row_shiritori.webp', './img/note_shiritori.webp', './img/paint_shiritori.webp', './img/sword_shiritori.webp',
						'./img/glasses_shiritori.webp', './img/loupe_shiritori.webp', './img/meat_shiritori.webp', './img/moon_shiritori.webp', './img/bat_shiritori.webp', './img/bird_shiritori.webp', './img/shoes_shiritori.webp', './img/cat_shiritori.webp', './img/goldfish_shiritori.webp', './img/mouse_shiritori.webp',
						'./img/egg_shiritori.webp', './img/ship_shiritori.webp', './img/milk_shiritori.webp', './img/chocolate_shiritori.webp', './img/acorn_shiritori.webp', './img/strawberry_shiritori.webp', './img/tiger_shiritori.webp', './img/stuffed_animal_shiritori.webp', './img/bomb_shiritori.webp', './img/watermelon_shiritori.webp',
						'./img/horse_shiritori.webp', './img/chair_shiritori.webp', './img/sea_shiritori.webp', './img/hermit_crab_shiritori.webp', './img/whistle_shiritori.webp', './img/book_shiritori.webp', './img/fish_shiritori.webp', './img/tree_shiritori.webp', './img/candy_shiritori.webp', './img/hammer_shiritori.webp',
						'./img/star_shiritori.webp', './img/hat_shiritori.webp', './img/cup_shiritori.webp', './img/dog_shiritori.webp', './img/flag_shiritori.webp', './img/cake_shiritori.webp', './img/microphone_shiritori.webp', './img/lipstick_shiritori.webp', './img/mochi_shiritori.webp', './img/fairy_shiritori.webp',
						'./img/umbrella_shiritori.webp', './img/dice_shiritori.webp', './img/letter_shiritori.webp', './img/grape_shiritori.webp', './img/sheep_shiritori.webp', './img/tofu_shiritori.webp', './img/duck_shiritori.webp', './img/dragonfly_shiritori.webp', './img/leaf_shiritori.webp', './img/ring_shiritori.webp',
						'./img/rope_shiritori.webp', './img/shield_shiritori.webp', './img/money_shiritori.webp', './img/pudding_shiritori.webp', './img/necklace_shiritori.webp', './img/rice_ear_shiritori.webp', './img/soy_sauce_shiritori.webp', './img/belt_conveyor_shiritori.webp', './img/chandelier_shiritori.webp', './img/salt_shiritori.webp',
						'./img/whirlpool_shiritori.webp', './img/rod_shiritori.webp', './img/pot_shiritori.webp', './img/seesaw_shiritori.webp', './img/brush_shiritori.webp', './img/work_out_shiritori.webp', './img/ghost_shiritori.webp', './img/hiyori_shiritori.webp', './img/yui_shiritori.webp', './img/rei_shiritori.webp',
						'./img/misogi_shiritori.webp', './img/matsuri_shiritori.webp', './img/akari_shiritori.webp', './img/miyako_shiritori.webp', './img/yuki_shiritori.webp', './img/anna_shiritori.webp', './img/maho_shiritori.webp', './img/rino_shiritori.webp', './img/hatsune_shiritori.webp', './img/nanaka_shiritori.webp',
						'./img/kasumi_shiritori.webp', './img/misato_shiritori.webp', './img/suzuna_shiritori.webp', './img/kaori_shiritori.webp', './img/io_shiritori.webp', './img/mimi_shiritori.webp', './img/kurumi_shiritori.webp', './img/yori_shiritori.webp', './img/ayane_shiritori.webp', './img/suzume_shiritori.webp',
						'./img/rin_shiritori.webp', './img/eriko_shiritori.webp', './img/saren_shiritori.webp', './img/nozomi_shiritori.webp', './img/ninon_shiritori.webp', './img/shinobu_shiritori.webp', './img/akino_shiritori.webp', './img/mahiru_shiritori.webp', './img/yukari_shiritori.webp', './img/kyouka_shiritori.webp',
						'./img/tomo_shiritori.webp', './img/shiori_shiritori.webp', './img/aoi_shiritori.webp', './img/chika_shiritori.webp', './img/makoto_shiritori.webp', './img/iriya_shiritori.webp', './img/kuuka_shiritori.webp', './img/tamaki_shiritori.webp', './img/jun_shiritori.webp', './img/mihuyu_shiritori.webp',
						'./img/shizuru_shiritori.webp', './img/misaki_shiritori.webp', './img/mitsuki_shiritori.webp', './img/rima_shiritori.webp', './img/monika_shiritori.webp', './img/tsumugi_shiritori.webp', './img/ayumi_shiritori.webp', './img/ruka_shiritori.webp', './img/jita_shiritori.webp', './img/peko_shiritori.webp',
						'./img/kokkoro_shiritori.webp', './img/kyaru_shiritori.webp', './img/muimi_shiritori.webp', './img/arisa_shiritori.webp', './img/neneka_shiritori.webp', './img/kurisu_shiritori.webp', './img/inori_shiritori.webp', './img/kaya_shiritori.webp', './img/homare_shiritori.webp', './img/kuroe_shiritori.webp',
						'./img/chieru_shiritori.webp', './img/yuni_shiritori.webp'
					]
				},
				'cheese': {
					names: [
						'観察開始!', '熟成', '麗しき青', '誘惑1', '誘惑2', '謎は謎のままに', '木槌', '魔法の小槌', 'マヒルお手製ハリセン', '打ちでの小槌', '駆け出しのチュウ', '韋駄天のチュウタ', '草土竜のチュウヤ', 'ステゴロのチュウザ', 'ひよ子', '益荒男のチュウジ',
						'怒髪天のチュウジ', '金庫破りのチュウサブロウ'
					],
					stickers: [
						'./img/start_observation_cheese.webp', './img/ripe_cheese.webp', './img/beautiful_blue_cheese.webp', './img/temptation1_cheese.webp', './img/temptation2_cheese.webp', './img/mystery_remains_mystery_cheese.webp', './img/mallet_cheese.webp',
						'./img/magical_mallet_cheese.webp', './img/harisen_cheese.webp', './img/mallet_of_luck_cheese.webp', './img/chuu_cheese.webp', './img/chuuta_cheese.webp', './img/chuuya_cheese.webp', './img/chuuza_cheese.webp', './img/chick_cheese.webp',
						'./img/masurao_chuuji_cheese.webp', './img/dohatsuten_chuuji_cheese.webp', './img/chuusaburou_cheese.webp'
					]
				},
				'forest': {
					names: [
						'どうしてこんなことに…?', 'ごきげんようが言えなくて', 'やっちゃった!', 'ユニさんはこんな人', 'クロエさんはこんな人', 'チエルさんはこんな人', '知的なユニさん', '優しいクエロさん', '憧れのチエルさん', '特別講座の練習', 'いよいよ特別講座',
						'さすがBB団の団長さん!', 'マンドラゴラでパニック', '最終日'
					],
					stickers: [
						'./img/day1_chicken.webp', './img/day2_chicken.webp', './img/day3_chicken.webp', './img/day4_chicken.webp', './img/day5_chicken.webp', './img/day6_chicken.webp', './img/day7_chicken.webp', './img/day8_chicken.webp', './img/day9_chicken.webp',
						'./img/day10_chicken.webp', './img/day11_chicken.webp', './img/day12_chicken.webp', './img/day13_chicken.webp', './img/day14_chicken.webp'
					]
				},
				'angel': {
					names: [
						'次世代へ継承すべき新言語', '私はとても作文が苦手です', '飛翔へと至るまで', '閃きましたわ!', '組み立てにゃ!', '私こんなの書いたっけ…?', 'このままにしておけないわ', '特別講座を終えて', '考察', '試作機完成', '最終工程'
					],
					stickers: [
						'./img/chieru_foundation.webp', './img/kuroe_foundation.webp', './img/yuni_foundation.webp', './img/akino_foundation.webp', './img/tamaki_foundation.webp', './img/yukari_foundation.webp', './img/mihuyu_foundation.webp', './img/mercurius_foundation.webp',
						'./img/nakayoshix1_foundation.webp', './img/nakayoshix2_foundation.webp', './img/nakayoshix3_foundation.webp'
					]
				}
			}
		};
	}
}
</script>
<style scoped>
</style>
