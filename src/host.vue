<template>
	<div>
		<div class="uk-panel uk-padding uk-background-secondary uk-light uk-text-center">
			<a class="uk-logo" href="#">プリコネスタンプ</a>
		</div>
		<div class="uk-container">
			<ul uk-accordion="multiple: true" class="uk-margin-top">
				<li>
					<a class="uk-accordion-title" href="#">ギルドハウス</a>
					<div class="uk-accordion-content">
						<template v-for="(guildName, i) in guildNames">
							<div class="uk-text-bold uk-margin-small-bottom">{{ guildName }}</div>
							<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
								<div v-for="guildSticker in guildStickers[i]">
									<div><img v-bind:id="guildSticker" v-bind:src="guildSticker"></div>
									<div v-if="clipboardImpled"><button v-on:click="copyImage(guildSticker)" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
								</div>
							</div>
						</template>
					</div>
				</li>
				<li v-for="(content, contentIndex) in contents">
					<a class="uk-accordion-title" href="#">{{ content }}</a>
					<div class="uk-accordion-content uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
						<div v-for="(name, nameIndex) in names[contentIndex]">
							<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
							<div><img v-bind:id="stickers[contentIndex][nameIndex]" v-bind:src="stickers[contentIndex][nameIndex]"></div>
							<div v-if="clipboardImpled"><button v-on:click="copyImage(stickers[contentIndex][nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
						</div>
					</div>
				</li>
			</ul>
			<div class="uk-margin-bottom"><span class="uk-text-muted">サイト作成者: </span><a class="uk-link-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
		</div>
		<canvas id="canvas"></canvas>
	</div>
</template>
<script>
import UIkit from 'uikit';
export default {
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			guildNames: ['美食殿', 'トゥインクルウィッシュ', 'ラビリンス', 'カルミナ', 'リトルリリカル', 'フォレスティエ', 'ディアボロス', 'NIGHTMARE', 'サレンディア救護院',
				'カォン', 'エリザベスパーク', 'メルクリウス財団', 'トワイライトキャラバン', 'ルーセント学院', 'ヴァイスフリューゲルランドソル支部',
				'なかよし部', 'ドラゴンズネスト'],
			guildStickers: [[require('./img/peko_guildhouse.webp'), require('./img/kokkoro_guildhouse.webp'), require('./img/kyaru_guildhouse.webp')], [require('./img/hiyori_guildhouse.webp'), require('./img/yui_guildhouse.webp'), require('./img/rei_guildhouse.webp')],
				[require('./img/rabirisuta_guildhouse.webp'), require('./img/shizuru_guildhouse.webp'), require('./img/rino_guildhouse.webp')], [require('./img/nozomi_guildhouse.webp'), require('./img/chika_guildhouse.webp'), require('./img/tsumugi_guildhouse.webp')],
				[require('./img/mimi_guildhouse.webp'), require('./img/misogi_guildhouse.webp'), require('./img/kyouka_guildhouse.webp')], [require('./img/misato_guildhouse.webp'), require('./img/hatsune_guildhouse.webp'), require('./img/aoi_guildhouse.webp')],
				[require('./img/iriya_guildhouse.webp'), require('./img/yori_guildhouse.webp'), require('./img/akari_guildhouse.webp'), require('./img/shinobu_guildhouse.webp'), require('./img/miyako_guildhouse.webp')],
				[require('./img/jun_guildhouse.webp'), require('./img/kurisu_guildhouse.webp'), require('./img/tomo_guildhouse.webp'), require('./img/matsuri_guildhouse.webp')], [require('./img/saren_guildhouse.webp'), require('./img/suzume_guildhouse.webp'), require('./img/ayane_guildhouse.webp'), require('./img/kurumi_guildhouse.webp')],
				[require('./img/maho_guildhouse.webp'), require('./img/makoto_guildhouse.webp'), require('./img/kaori_guildhouse.webp'), require('./img/kasumi_guildhouse.webp')], [require('./img/mahiru_guildhouse.webp'), require('./img/rima_guildhouse.webp'), require('./img/shiori_guildhouse.webp'), require('./img/rin_guildhouse.webp')],
				[require('./img/akino_guildhouse.webp'), require('./img/mihuyu_guildhouse.webp'), require('./img/yukari_guildhouse.webp'), require('./img/tamaki_guildhouse.webp')],
				[require('./img/ruka_guildhouse.webp'), require('./img/mitsuki_guildhouse.webp'), require('./img/eriko_guildhouse.webp'), require('./img/nanaka_guildhouse.webp'), require('./img/anna_guildhouse.webp')], [require('./img/io_guildhouse.webp'), require('./img/misaki_guildhouse.webp'), require('./img/suzuna_guildhouse.webp')],
				[require('./img/monika_guildhouse.webp'), require('./img/yuki_guildhouse.webp'), require('./img/ninon_guildhouse.webp'), require('./img/kuuka_guildhouse.webp'), require('./img/ayumi_guildhouse.webp')], [require('./img/yuni_guildhouse.webp'), require('./img/kuroe_guildhouse.webp'), require('./img/chieru_guildhouse.webp')],
				[require('./img/kaya_guildhouse.webp'), require('./img/inori_guildhouse.webp')]],
			clanChatNames: ['ペコリーヌ', 'コッコロ', 'キャル', 'ヒヨリ', 'ユイ', 'レイ', 'ミソギ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'スズナ', 'カオリ', 'ミミ', 'クルミ',
				'ヨリ', 'アヤネ', 'スズメ', 'エリコ', 'サレン', 'ノゾミ', 'シノブ', 'ユカリ', 'キョウカ', 'アオイ', 'イリヤ', 'クウカ', 'タマキ', 'ミフユ', 'シズル',
				'ミサキ', 'モニカ'],
			clanChatStikcers: [require('./img/peko.webp'), require('./img/kokkoro.webp'), require('./img/kyaru.webp'), require('./img/hiyori.webp'), require('./img/yui.webp'), require('./img/rei.webp'), require('./img/misogi.webp'), require('./img/anna.webp'), require('./img/maho.webp'), require('./img/rino.webp'), require('./img/hatsune.webp'), require('./img/suzuna.webp'), require('./img/kaori.webp'), require('./img/mimi.webp'), require('./img/kurumi.webp'), require('./img/yori.webp'),
				require('./img/ayane.webp'), require('./img/suzume.webp'), require('./img/eriko.webp'), require('./img/saren.webp'), require('./img/nozomi.webp'), require('./img/shinobu.webp'), require('./img/yukari.webp'), require('./img/kyouka.webp'), require('./img/aoi.webp'), require('./img/iriya.webp'), require('./img/kuuka.webp'), require('./img/tamaki.webp'), require('./img/mihuyu.webp'), require('./img/shizuru.webp'), require('./img/misaki.webp'), require('./img/monika.webp')],
			albumNames: ['アオイ', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ',
				'イリヤ', 'エリコ', 'カオリ', 'カスミ', 'カスミ (マジカル)', 'カヤ', 'キャル', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア',
				'クロエ', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シオリ', 'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ',
				'チエル', 'チカ', 'ツムギ', 'トモ', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ', 'ヒヨリ', 'ペコリーヌ', 'ペコリーヌ (プリンセス)',
				'マコト', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ', 'モニカ (マジカル)', 'ユイ',
				'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ヨリ (エンジェル)', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ',
				'ルナ', 'レイ'],
			albumStickers: [require('./img/aoi_album.webp'), require('./img/aoi_hennyusei_album.webp'), require('./img/akari_album.webp'), require('./img/akari_angel_album.webp'), require('./img/akino_album.webp'), require('./img/ayane_album.webp'), require('./img/ayumi_album.webp'), require('./img/ayumi_wonder_album.webp'), require('./img/arisa_album.webp'),
				require('./img/an_album.webp'), require('./img/anna_album.webp'), require('./img/io_album.webp'), require('./img/inori_album.webp'), require('./img/iriya_album.webp'), require('./img/eriko_album.webp'), require('./img/kaori_album.webp'), require('./img/kasumi_album.webp'), require('./img/kasumi_magical_album.webp'), require('./img/kaya_album.webp'), require('./img/kyaru_album.webp'),
				require('./img/kyouka_album.webp'), require('./img/kuuka_album.webp'), require('./img/kuuka_oedo_album.webp'), require('./img/kurisu_album.webp'), require('./img/kurumi_album.webp'), require('./img/gurea_album.webp'), require('./img/kuroe_album.webp'), require('./img/kokkoro_album.webp'), require('./img/kokkoro_princess_album.webp'), require('./img/saren_album.webp'),
				require('./img/jita_album.webp'), require('./img/shiori_album.webp'), require('./img/shiori_magical_album.webp'), require('./img/shizuru_album.webp'), require('./img/shinobu_album.webp'), require('./img/jun_album.webp'), require('./img/suzuna_album.webp'), require('./img/suzume_album.webp'), require('./img/tamaki_album.webp'), require('./img/chieru_album.webp'),
				require('./img/chika_album.webp'), require('./img/tsumugi_album.webp'), require('./img/tomo_album.webp'), require('./img/nanaka_album.webp'),require('./img/ninon_album.webp'), require('./img/ninon_oedo_album.webp'), require('./img/neneka_album.webp'), require('./img/nozomi_album.webp'), require('./img/hatsune_album.webp'), require('./img/hiyori_album.webp'),
				require('./img/peko_album.webp'), require('./img/peko_princess_album.webp'), require('./img/makoto_album.webp'), require('./img/matsuri_album.webp'), require('./img/mahiru_album.webp'), require('./img/mahiru_ranger_album.webp'), require('./img/maho_album.webp'), require('./img/misaki_album.webp'), require('./img/misato_album.webp'), require('./img/misogi_album.webp'),
				require('./img/mitsuki_album.webp'), require('./img/mihuyu_album.webp'), require('./img/mimi_album.webp'), require('./img/miyako_album.webp'), require('./img/muimi_album.webp'), require('./img/monika_album.webp'), require('./img/monika_magical_album.webp'), require('./img/yui_album.webp'), require('./img/yui_princess_album.webp'), require('./img/yukari_album.webp'), require('./img/yuki_album.webp'),
				require('./img/yuni_album.webp'), require('./img/yori_album.webp'), require('./img/yori_angel_album.webp'), require('./img/rabirisuta_album.webp'), require('./img/rino_album.webp'), require('./img/rino_wonder_album.webp'), require('./img/rima_album.webp'), require('./img/rin_album.webp'), require('./img/rin_ranger_album.webp'), require('./img/ruu_album.webp'),
				require('./img/ruka_album.webp'), require('./img/runa_album.webp'), require('./img/rei_album.webp')],
			bossNames: ['ゴブリングレート', 'ライライ', 'レイスロード', 'ダークガーゴイル', 'グラットン', 'オークチーフ', 'オブシダンワイバーン', 'レサトパルト'],
			bossStickers: [require('./img/goblin_great_clan_battle.webp'), require('./img/rairai_clan_battle.webp'), require('./img/wraith_lord_clan_battle.webp'), require('./img/dark_gargoyle_clan_battle.webp'), require('./img/guratton_clan_battle.webp'), require('./img/orc_chief_clan_battle.webp'), require('./img/obsidian_wyvern_clan_battle.webp'),
				require('./img/Lesath_pult_clan_battle.webp')],
			cacaoNames: ['普通のカカオ', '完熟カカオ', '極上カカオ'],
			cacaoStickers: [require('./img/ordinary_cacao_valentine.webp'), require('./img/ripe_cacao_valentine.webp'), require('./img/best_cacao_valentine.webp')],
			happeningNames: ['間欠泉', 'トルネード', '向かい風', 'バナナジャンプ', '超低空飛行', 'アユミのうちわ',  'ジズ', 'スーパーボール', '落雷', 'バナナスライド', '成層圏突入',
				'追い風', 'ニノンの爆裂忍法', 'ロケット', '腹すべり', 'メサルティム', 'アクダイカン像', '土砂降り雨', '目回し', 'ドリル'],
			happeningStickers: [require('./img/geyser_giant_slalom.webp'), require('./img/tornado_giant_slalom.webp'), require('./img/headwind_giant_slalom.webp'), require('./img/banana_jump_giant_slalom.webp'), require('./img/ultra_low_flight_giant_slalom.webp'),
				require('./img/ayumis_fan_giant_slalom.webp'), require('./img/jizu_giant_slalom.webp'), require('./img/super_ball_giant_slalom.webp'), require('./img/lightning_strike_giant_slalom.webp'), require('./img/banana_slide_giant_slalom.webp'), require('./img/atmospheric_entry_giant_slalom.webp'),
				require('./img/tailwind_giant_slalom.webp'), require('./img/ninons_explosive_ninja_giant_slalom.webp'), require('./img/rocket_giant_slalom.webp'), require('./img/belly_slide_giant_slalom.webp'), require('./img/mesarthim_giant_slalom.webp'),
				require('./img/akudaikan_statue_giant_slalom.webp'), require('./img/downpour_giant_slalom.webp'), require('./img/giddy_giant_slalom.webp'), require('./img/drill_giant_slalom.webp')],
			shiritoriWords: ['リンゴ', 'ゴリラ', 'ラッパ', 'パイナップル', 'ルビー', 'ビールっぽいもの', 'ゆみや', 'おんぷ', 'えのぐ', 'けん', 'めがね', 'むしめがね', 'にく', 'つき',
				'こうもり', 'とり', 'くつ', 'ねこ', 'きんぎょ', 'ねずみ', 'たまご', 'ふね', 'ぎゅうにゅう', 'チョコレート', 'どんぐり', 'いちご', 'とら', 'ぬいぐるみ', 'ばくだん',
				'すいか', 'うま', 'いす', 'うみ', 'やどかり', 'ふえ', 'ほん', 'さかな', 'ツリー', 'あめ', 'ハンマー', 'ほし', 'ぼうし', 'カップ', 'いぬ', 'はた', 'ケーキ', 'マイク',
				'くちべに', 'もち', 'ようせい', 'かさ', 'さいころ', 'てがみ', 'ブドウ', 'ひつじ', 'とうふ', 'あひる', 'とんぼ', 'はっぱ', 'ゆびわ', 'なわ', 'たて', 'おかね',
				'プリンアラモード', 'ネックレス', 'いなほ', 'しょうゆ', 'ベルトコンベア', 'シャンデリア', 'しお', 'うずしお', 'つりざお', 'なべ', 'シーソー', 'ふで', 'きんトレ', 'おばけ',
				'ヒヨリ', 'ユイ', 'レイ', 'ミソギ', 'マツリ', 'アカリ', 'ミヤコ', 'ユキ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'ナナカ', 'カスミ', 'ミサト', 'スズナ', 'カオリ', 'イオ',
				'ミミ', 'クルミ', 'ヨリ', 'アヤネ', 'スズメ', 'リン', 'エリコ', 'サレン', 'ノゾミ', 'ニノン', 'シノブ', 'アキノ', 'マヒル', 'ユカリ', 'キョウカ', 'トモ', 'シオリ',
				'アオイ', 'チカ', 'マコト', 'イリヤ', 'クウカ', 'タマキ', 'ジュン', 'ミフユ', 'シズル', 'ミサキ', 'ミツキ', 'リマ', 'モニカ', 'ツムギ', 'アユミ', 'ルカ', 'ジータ',
				'ペコリーヌ', 'コッコロ', 'キャル', 'ムイミ', 'アリサ', 'ネネカ', 'クリスティーナ', 'イノリ', 'カヤ', 'ホマレ', 'クロエ', 'チエル', 'ユニ'],
			shiritoriStickers: [require('./img/apple_shiritori.webp'), require('./img/gorilla_shiritori.webp'), require('./img/trumpet_shiritori.webp'), require('./img/pineapple_shiritori.webp'), require('./img/ruby_shiritori.webp'), require('./img/beer_shiritori.webp'), require('./img/bow_and_row_shiritori.webp'),
				require('./img/note_shiritori.webp'), require('./img/paint_shiritori.webp'), require('./img/sword_shiritori.webp'), require('./img/glasses_shiritori.webp'), require('./img/loupe_shiritori.webp'), require('./img/meat_shiritori.webp'), require('./img/moon_shiritori.webp'), require('./img/bat_shiritori.webp'), require('./img/bird_shiritori.webp'),
				require('./img/shoes_shiritori.webp'), require('./img/cat_shiritori.webp'), require('./img/goldfish_shiritori.webp'), require('./img/mouse_shiritori.webp'), require('./img/egg_shiritori.webp'), require('./img/ship_shiritori.webp'), require('./img/milk_shiritori.webp'), require('./img/chocolate_shiritori.webp'), require('./img/acorn_shiritori.webp'),
				require('./img/strawberry_shiritori.webp'), require('./img/tiger_shiritori.webp'), require('./img/stuffed_animal_shiritori.webp'), require('./img/bomb_shiritori.webp'), require('./img/watermelon_shiritori.webp'), require('./img/horse_shiritori.webp'), require('./img/chair_shiritori.webp'), require('./img/sea_shiritori.webp'),
				require('./img/hermit_crab_shiritori.webp'), require('./img/whistle_shiritori.webp'), require('./img/book_shiritori.webp'), require('./img/fish_shiritori.webp'), require('./img/tree_shiritori.webp'), require('./img/candy_shiritori.webp'), require('./img/hammer_shiritori.webp'), require('./img/star_shiritori.webp'), require('./img/hat_shiritori.webp'),
				require('./img/cup_shiritori.webp'), require('./img/dog_shiritori.webp'), require('./img/flag_shiritori.webp'), require('./img/cake_shiritori.webp'), require('./img/microphone_shiritori.webp'), require('./img/lipstick_shiritori.webp'), require('./img/mochi_shiritori.webp'), require('./img/fairy_shiritori.webp'), require('./img/umbrella_shiritori.webp'),
				require('./img/dice_shiritori.webp'), require('./img/letter_shiritori.webp'), require('./img/grape_shiritori.webp'), require('./img/sheep_shiritori.webp'), require('./img/tofu_shiritori.webp'), require('./img/duck_shiritori.webp'), require('./img/dragonfly_shiritori.webp'), require('./img/leaf_shiritori.webp'), require('./img/ring_shiritori.webp'),
				require('./img/rope_shiritori.webp'), require('./img/shield_shiritori.webp'), require('./img/money_shiritori.webp'), require('./img/pudding_shiritori.webp'), require('./img/necklace_shiritori.webp'), require('./img/rice_ear_shiritori.webp'), require('./img/soy_sauce_shiritori.webp'), require('./img/belt_conveyor_shiritori.webp'),
				require('./img/chandelier_shiritori.webp'), require('./img/salt_shiritori.webp'), require('./img/whirlpool_shiritori.webp'), require('./img/rod_shiritori.webp'), require('./img/pot_shiritori.webp'), require('./img/seesaw_shiritori.webp'), require('./img/brush_shiritori.webp'), require('./img/work_out_shiritori.webp'),
				require('./img/ghost_shiritori.webp'), require('./img/hiyori_shiritori.webp'), require('./img/yui_shiritori.webp'), require('./img/rei_shiritori.webp'), require('./img/misogi_shiritori.webp'), require('./img/matsuri_shiritori.webp'), require('./img/akari_shiritori.webp'), require('./img/miyako_shiritori.webp'), require('./img/yuki_shiritori.webp'),
				require('./img/anna_shiritori.webp'), require('./img/maho_shiritori.webp'), require('./img/rino_shiritori.webp'), require('./img/hatsune_shiritori.webp'), require('./img/nanaka_shiritori.webp'), require('./img/kasumi_shiritori.webp'), require('./img/misato_shiritori.webp'), require('./img/suzuna_shiritori.webp'), require('./img/kaori_shiritori.webp'),
				require('./img/io_shiritori.webp'), require('./img/mimi_shiritori.webp'), require('./img/kurumi_shiritori.webp'), require('./img/yori_shiritori.webp'), require('./img/ayane_shiritori.webp'), require('./img/suzume_shiritori.webp'), require('./img/rin_shiritori.webp'), require('./img/eriko_shiritori.webp'), require('./img/saren_shiritori.webp'),
				require('./img/nozomi_shiritori.webp'), require('./img/ninon_shiritori.webp'), require('./img/shinobu_shiritori.webp'), require('./img/akino_shiritori.webp'), require('./img/mahiru_shiritori.webp'), require('./img/yukari_shiritori.webp'), require('./img/kyouka_shiritori.webp'), require('./img/tomo_shiritori.webp'), require('./img/shiori_shiritori.webp'),
				require('./img/aoi_shiritori.webp'), require('./img/chika_shiritori.webp'), require('./img/makoto_shiritori.webp'), require('./img/iriya_shiritori.webp'), require('./img/kuuka_shiritori.webp'), require('./img/tamaki_shiritori.webp'), require('./img/jun_shiritori.webp'), require('./img/mihuyu_shiritori.webp'), require('./img/shizuru_shiritori.webp'),
				require('./img/misaki_shiritori.webp'), require('./img/mitsuki_shiritori.webp'), require('./img/rima_shiritori.webp'), require('./img/monika_shiritori.webp'), require('./img/tsumugi_shiritori.webp'), require('./img/ayumi_shiritori.webp'), require('./img/ruka_shiritori.webp'), require('./img/jita_shiritori.webp'), require('./img/peko_shiritori.webp'),
				require('./img/kokkoro_shiritori.webp'), require('./img/kyaru_shiritori.webp'), require('./img/muimi_shiritori.webp'), require('./img/arisa_shiritori.webp'), require('./img/neneka_shiritori.webp'), require('./img/kurisu_shiritori.webp'), require('./img/inori_shiritori.webp'), require('./img/kaya_shiritori.webp'), require('./img/homare_shiritori.webp'),
				require('./img/kuroe_shiritori.webp'), require('./img/chieru_shiritori.webp'), require('./img/yuni_shiritori.webp')],
			cheeseContentNames: ['観察開始!', '熟成', '麗しき青', '誘惑1', '誘惑2', '謎は謎のままに', '木槌', '魔法の小槌', 'マヒルお手製ハリセン', '打ちでの小槌', '駆け出しのチュウ',
				'韋駄天のチュウタ', '草土竜のチュウヤ', 'ステゴロのチュウザ', 'ひよ子', '益荒男のチュウジ', '怒髪天のチュウジ', '金庫破りのチュウサブロウ'],
			cheeseContentStickers: [require('./img/start_observation_cheese.webp'), require('./img/ripe_cheese.webp'), require('./img/beautiful_blue_cheese.webp'), require('./img/temptation1_cheese.webp'), require('./img/temptation2_cheese.webp'), require('./img/mystery_remains_mystery_cheese.webp'),
				require('./img/mallet_cheese.webp'), require('./img/magical_mallet_cheese.webp'), require('./img/harisen_cheese.webp'), require('./img/mallet_of_luck_cheese.webp'), require('./img/chuu_cheese.webp'), require('./img/chuuta_cheese.webp'), require('./img/chuuya_cheese.webp'), require('./img/chuuza_cheese.webp'), require('./img/chick_cheese.webp'),
				require('./img/masurao_chuuji_cheese.webp'), require('./img/dohatsuten_chuuji_cheese.webp'), require('./img/chuusaburou_cheese.webp')],
			diaryPageNames: ['どうしてこんなことに…?', 'ごきげんようが言えなくて', 'やっちゃった!', 'ユニさんはこんな人', 'クロエさんはこんな人', 'チエルさんはこんな人', '知的なユニさん',
				'優しいクエロさん', '憧れのチエルさん', '特別講座の練習', 'いよいよ特別講座', 'さすがBB団の団長さん!', 'マンドラゴラでパニック', '最終日'],
			diaryStickers: [require('./img/day1_chicken.webp'), require('./img/day2_chicken.webp'), require('./img/day3_chicken.webp'), require('./img/day4_chicken.webp'), require('./img/day5_chicken.webp'), require('./img/day6_chicken.webp'), require('./img/day7_chicken.webp'), require('./img/day8_chicken.webp'), require('./img/day9_chicken.webp'), require('./img/day10_chicken.webp'),
				require('./img/day11_chicken.webp'), require('./img/day12_chicken.webp'), require('./img/day13_chicken.webp'), require('./img/day14_chicken.webp')],
			xNotePageNames: ['次世代へ継承すべき新言語', '私はとても作文が苦手です', '飛翔へと至るまで', '閃きましたわ!', '組み立てにゃ!', '私こんなの書いたっけ…?', 'このままにしておけないわ',
				'特別講座を終えて', '考察', '試作機完成', '最終工程'],
			xNoteStickers: [require('./img/chieru_foundation.webp'), require('./img/kuroe_foundation.webp'), require('./img/yuni_foundation.webp'), require('./img/akino_foundation.webp'), require('./img/tamaki_foundation.webp'), require('./img/yukari_foundation.webp'), require('./img/mihuyu_foundation.webp'), require('./img/mercurius_foundation.webp'),
				require('./img/nakayoshix1_foundation.webp'), require('./img/nakayoshix2_foundation.webp'), require('./img/nakayoshix3_foundation.webp')]
		}
	},
	computed: {
		contents: function() {
			return ['クラチャ', '思い出アルバム', 'クラバト', 'お兄ちゃん争奪', 'クウカ大回転', 'しりとりドラゴンズ', 'チーズお守り大作戦', '森の臆病者と聖なる学舎の異端児', '授けの財団と聖なる学舎の異端児'];
		},
		names: function() {
			return [this.clanChatNames, this.albumNames, this.bossNames, this.cacaoNames, this.happeningNames, this.shiritoriWords, this.cheeseContentNames, this.diaryPageNames, this.xNotePageNames];
		},
		stickers: function() {
			return [this.clanChatStikcers, this.albumStickers, this.bossStickers, this.cacaoStickers, this.happeningStickers, this.shiritoriStickers, this.cheeseContentStickers, this.diaryStickers,
				this.xNoteStickers];
		}
	},
	methods: {
		copyImage: function(id) {
			const image = document.getElementById(id);
			const canvas = document.getElementById('canvas');
			const context = canvas.getContext('2d');
			canvas.width = image.naturalWidth;
			canvas.height = image.naturalHeight;
			context.drawImage(image, 0, 0);
			canvas.toBlob(blob => {
				const items = [new ClipboardItem({ [blob.type]: blob })];
				navigator.clipboard.write(items);
			});

			UIkit.notification.closeAll();
			UIkit.notification({
				message: '画像をコピーしました',
				pos: 'top-center',
				timeout: 500
			});
		},
	}
}
</script>
<style scoped>
</style>
