window.addEventListener('load', () => {
	const component = {
		data: function() {
			return {
				clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
				guildNames: ['美食殿', 'トゥインクルウィッシュ', 'ラビリンス', 'カルミナ', 'リトルリリカル', 'フォレスティエ', 'ディアボロス', 'NIGHTMARE', 'サレンディア救護院',
					'カォン', 'エリザベスパーク', 'メルクリウス財団', 'トワイライトキャラバン', 'ルーセント学院', 'ヴァイスフリューゲルランドソル支部',
					'なかよし部', 'ドラゴンズネスト'],
				guildStickers: [['peko_guildhouse', 'kokkoro_guildhouse', 'kyaru_guildhouse'], ['hiyori_guildhouse', 'yui_guildhouse', 'rei_guildhouse'],
					['rabirisuta_guildhouse', 'shizuru_guildhouse', 'rino_guildhouse'], ['nozomi_guildhouse', 'chika_guildhouse', 'tsumugi_guildhouse'],
					['mimi_guildhouse', 'misogi_guildhouse', 'kyouka_guildhouse'], ['misato_guildhouse', 'hatsune_guildhouse', 'aoi_guildhouse'],
					['iriya_guildhouse', 'yori_guildhouse', 'akari_guildhouse', 'shinobu_guildhouse', 'miyako_guildhouse'],
					['jun_guildhouse', 'kurisu_guildhouse', 'tomo_guildhouse', 'matsuri_guildhouse'], ['saren_guildhouse', 'suzume_guildhouse', 'ayane_guildhouse', 'kurumi_guildhouse'],
					['maho_guildhouse', 'makoto_guildhouse', 'kaori_guildhouse', 'kasumi_guildhouse'], ['mahiru_guildhouse', 'rima_guildhouse', 'shiori_guildhouse', 'rin_guildhouse'],
					['akino_guildhouse', 'mihuyu_guildhouse', 'yukari_guildhouse', 'tamaki_guildhouse'],
					['ruka_guildhouse', 'mitsuki_guildhouse', 'eriko_guildhouse', 'nanaka_guildhouse', 'anna_guildhouse'], ['io_guildhouse', 'misaki_guildhouse', 'suzuna_guildhouse'],
					['monika_guildhouse', 'yuki_guildhouse', 'ninon_guildhouse', 'kuuka_guildhouse', 'ayumi_guildhouse'], ['yuni_guildhouse', 'kuroe_guildhouse', 'chieru_guildhouse'],
					['kaya_guildhouse', 'inori_guildhouse']],
				clanChatNames: ['ペコリーヌ', 'コッコロ', 'キャル', 'ヒヨリ', 'ユイ', 'レイ', 'ミソギ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'スズナ', 'カオリ', 'ミミ', 'クルミ',
					'ヨリ', 'アヤネ', 'スズメ', 'エリコ', 'サレン', 'ノゾミ', 'シノブ', 'ユカリ', 'キョウカ', 'アオイ', 'イリヤ', 'クウカ', 'タマキ', 'ミフユ', 'シズル',
					'ミサキ', 'モニカ'],
				clanChatStikcers: ['peko', 'kokkoro', 'kyaru', 'hiyori', 'yui', 'rei', 'misogi', 'anna', 'maho', 'rino', 'hatsune', 'suzuna', 'kaori', 'mimi', 'kurumi', 'yori',
					'ayane', 'suzume', 'eriko', 'saren', 'nozomi', 'shinobu', 'yukari', 'kyouka', 'aoi', 'iriya', 'kuuka', 'tamaki', 'mihuyu', 'shizuru', 'misaki', 'monika'],
				albumNames: ['アオイ', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ',
					'イリヤ', 'エリコ', 'カオリ', 'カスミ', 'カスミ (マジカル)', 'カヤ', 'キャル', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア',
					'クロエ', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シオリ', 'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ',
					'チエル', 'チカ', 'ツムギ', 'トモ', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ', 'ヒヨリ', 'ペコリーヌ', 'ペコリーヌ (プリンセス)',
					'マコト', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ', 'モニカ (マジカル)', 'ユイ',
					'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ヨリ (エンジェル)', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ',
					'ルナ', 'レイ'],
				albumStickers: ['aoi_album', 'aoi_hennyusei_album', 'akari_album', 'akari_angel_album', 'akino_album', 'ayane_album', 'ayumi_album', 'ayumi_wonder_album', 'arisa_album',
					'an_album', 'anna_album', 'io_album', 'inori_album', 'iriya_album', 'eriko_album', 'kaori_album', 'kasumi_album', 'kasumi_magical_album', 'kaya_album', 'kyaru_album',
					'kyouka_album', 'kuuka_album', 'kuuka_oedo_album', 'kurisu_album', 'kurumi_album', 'gurea_album', 'kuroe_album', 'kokkoro_album', 'kokkoro_princess_album', 'saren_album',
					'jita_album', 'shiori_album', 'shiori_magical_album', 'shizuru_album', 'shinobu_album', 'jun_album', 'suzuna_album', 'suzume_album', 'tamaki_album', 'chieru_album',
					'chika_album', 'tsumugi_album', 'tomo_album', 'nanaka_album','ninon_album', 'ninon_oedo_album', 'neneka_album', 'nozomi_album', 'hatsune_album', 'hiyori_album',
					'peko_album', 'peko_princess_album', 'makoto_album', 'matsuri_album', 'mahiru_album', 'mahiru_ranger_album', 'maho_album', 'misaki_album', 'misato_album', 'misogi_album',
					'mitsuki_album', 'mihuyu_album', 'mimi_album', 'miyako_album', 'muimi_album', 'monika_album', 'monika_magical_album', 'yui_album', 'yui_princess_album', 'yukari_album', 'yuki_album',
					'yuni_album', 'yori_album', 'yori_angel_album', 'rabirisuta_album', 'rino_album', 'rino_wonder_album', 'rima_album', 'rin_album', 'rin_ranger_album', 'ruu_album',
					'ruka_album', 'runa_album', 'rei_album'],
				bossNames: ['ゴブリングレート', 'ライライ', 'レイスロード', 'ダークガーゴイル', 'グラットン', 'オークチーフ', 'オブシダンワイバーン', 'レサトパルト'],
				bossStickers: ['goblin_great_clan_battle', 'rairai_clan_battle', 'wraith_lord_clan_battle', 'dark_gargoyle_clan_battle', 'guratton_clan_battle', 'orc_chief_clan_battle', 'obsidian_wyvern_clan_battle',
					'Lesath_pult_clan_battle'],
				cacaoNames: ['普通のカカオ', '完熟カカオ', '極上カカオ'],
				cacaoStickers: ['ordinary_cacao_valentine', 'ripe_cacao_valentine', 'best_cacao_valentine'],
				happeningNames: ['間欠泉', 'トルネード', '向かい風', 'バナナジャンプ', '超低空飛行', 'アユミのうちわ',  'ジズ', 'スーパーボール', '落雷', 'バナナスライド', '成層圏突入',
					'追い風', 'ニノンの爆裂忍法', 'ロケット', '腹すべり', 'メサルティム', 'アクダイカン像', '土砂降り雨', '目回し', 'ドリル'],
				happeningStickers: ['geyser_giant_slalom', 'tornado_giant_slalom', 'headwind_giant_slalom', 'banana_jump_giant_slalom', 'ultra_low_flight_giant_slalom',
					'ayumis_fan_giant_slalom', 'jizu_giant_slalom', 'super_ball_giant_slalom', 'lightning_strike_giant_slalom', 'banana_slide_giant_slalom', 'atmospheric_entry_giant_slalom',
					'tailwind_giant_slalom', 'ninons_explosive_ninja_giant_slalom', 'rocket_giant_slalom', 'belly_slide_giant_slalom', 'mesarthim_giant_slalom',
					'akudaikan_statue_giant_slalom', 'downpour_giant_slalom', 'giddy_giant_slalom', 'drill_giant_slalom'],
				shiritoriWords: ['リンゴ', 'ゴリラ', 'ラッパ', 'パイナップル', 'ルビー', 'ビールっぽいもの', 'ゆみや', 'おんぷ', 'えのぐ', 'けん', 'めがね', 'むしめがね', 'にく', 'つき',
					'こうもり', 'とり', 'くつ', 'ねこ', 'きんぎょ', 'ねずみ', 'たまご', 'ふね', 'ぎゅうにゅう', 'チョコレート', 'どんぐり', 'いちご', 'とら', 'ぬいぐるみ', 'ばくだん',
					'すいか', 'うま', 'いす', 'うみ', 'やどかり', 'ふえ', 'ほん', 'さかな', 'ツリー', 'あめ', 'ハンマー', 'ほし', 'ぼうし', 'カップ', 'いぬ', 'はた', 'ケーキ', 'マイク',
					'くちべに', 'もち', 'ようせい', 'かさ', 'さいころ', 'てがみ', 'ブドウ', 'ひつじ', 'とうふ', 'あひる', 'とんぼ', 'はっぱ', 'ゆびわ', 'なわ', 'たて', 'おかね',
					'プリンアラモード', 'ネックレス', 'いなほ', 'しょうゆ', 'ベルトコンベア', 'シャンデリア', 'しお', 'うずしお', 'つりざお', 'なべ', 'シーソー', 'ふで', 'きんトレ', 'おばけ',
					'ヒヨリ', 'ユイ', 'レイ', 'ミソギ', 'マツリ', 'アカリ', 'ミヤコ', 'ユキ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'ナナカ', 'カスミ', 'ミサト', 'スズナ', 'カオリ', 'イオ',
					'ミミ', 'クルミ', 'ヨリ', 'アヤネ', 'スズメ', 'リン', 'エリコ', 'サレン', 'ノゾミ', 'ニノン', 'シノブ', 'アキノ', 'マヒル', 'ユカリ', 'キョウカ', 'トモ', 'シオリ',
					'アオイ', 'チカ', 'マコト', 'イリヤ', 'クウカ', 'タマキ', 'ジュン', 'ミフユ', 'シズル', 'ミサキ', 'ミツキ', 'リマ', 'モニカ', 'ツムギ', 'アユミ', 'ルカ', 'ジータ',
					'ペコリーヌ', 'コッコロ', 'キャル', 'ムイミ', 'アリサ', 'ネネカ', 'クリスティーナ', 'イノリ', 'カヤ', 'ホマレ', 'クロエ', 'チエル', 'ユニ'],
				shiritoriStickers: ['apple_shiritori', 'gorilla_shiritori', 'trumpet_shiritori', 'pineapple_shiritori', 'ruby_shiritori', 'beer_shiritori', 'bow_and_row_shiritori',
					'note_shiritori', 'paint_shiritori', 'sword_shiritori', 'glasses_shiritori', 'loupe_shiritori', 'meat_shiritori', 'moon_shiritori', 'bat_shiritori', 'bird_shiritori',
					'shoes_shiritori', 'cat_shiritori', 'goldfish_shiritori', 'mouse_shiritori', 'egg_shiritori', 'ship_shiritori', 'milk_shiritori', 'chocolate_shiritori', 'acorn_shiritori',
					'strawberry_shiritori', 'tiger_shiritori', 'stuffed_animal_shiritori', 'bomb_shiritori', 'watermelon_shiritori', 'horse_shiritori', 'chair_shiritori', 'sea_shiritori',
					'hermit_crab_shiritori', 'whistle_shiritori', 'book_shiritori', 'fish_shiritori', 'tree_shiritori', 'candy_shiritori', 'hammer_shiritori', 'star_shiritori', 'hat_shiritori',
					'cup_shiritori', 'dog_shiritori', 'flag_shiritori', 'cake_shiritori', 'microphone_shiritori', 'lipstick_shiritori', 'mochi_shiritori', 'fairy_shiritori', 'umbrella_shiritori',
					'dice_shiritori', 'letter_shiritori', 'grape_shiritori', 'sheep_shiritori', 'tofu_shiritori', 'duck_shiritori', 'dragonfly_shiritori', 'leaf_shiritori', 'ring_shiritori',
					'rope_shiritori', 'shield_shiritori', 'money_shiritori', 'pudding_shiritori', 'necklace_shiritori', 'rice_ear_shiritori', 'soy_sauce_shiritori', 'belt_conveyor_shiritori',
					'chandelier_shiritori', 'salt_shiritori', 'whirlpool_shiritori', 'rod_shiritori', 'pot_shiritori', 'seesaw_shiritori', 'brush_shiritori', 'work_out_shiritori',
					'ghost_shiritori', 'hiyori_shiritori', 'yui_shiritori', 'rei_shiritori', 'misogi_shiritori', 'matsuri_shiritori', 'akari_shiritori', 'miyako_shiritori', 'yuki_shiritori',
					'anna_shiritori', 'maho_shiritori', 'rino_shiritori', 'hatsune_shiritori', 'nanaka_shiritori', 'kasumi_shiritori', 'misato_shiritori', 'suzuna_shiritori', 'kaori_shiritori',
					'io_shiritori', 'mimi_shiritori', 'kurumi_shiritori', 'yori_shiritori', 'ayane_shiritori', 'suzume_shiritori', 'rin_shiritori', 'eriko_shiritori', 'saren_shiritori',
					'nozomi_shiritori', 'ninon_shiritori', 'shinobu_shiritori', 'akino_shiritori', 'mahiru_shiritori', 'yukari_shiritori', 'kyouka_shiritori', 'tomo_shiritori', 'shiori_shiritori',
					'aoi_shiritori', 'chika_shiritori', 'makoto_shiritori', 'iriya_shiritori', 'kuuka_shiritori', 'tamaki_shiritori', 'jun_shiritori', 'mihuyu_shiritori', 'shizuru_shiritori',
					'misaki_shiritori', 'mitsuki_shiritori', 'rima_shiritori', 'monika_shiritori', 'tsumugi_shiritori', 'ayumi_shiritori', 'ruka_shiritori', 'jita_shiritori', 'peko_shiritori',
					'kokkoro_shiritori', 'kyaru_shiritori', 'muimi_shiritori', 'arisa_shiritori', 'neneka_shiritori', 'kurisu_shiritori', 'inori_shiritori', 'kaya_shiritori', 'homare_shiritori',
					'kuroe_shiritori', 'chieru_shiritori', 'yuni_shiritori'],
				cheeseContentNames: ['観察開始!', '熟成', '麗しき青', '誘惑1', '誘惑2', '謎は謎のままに', '木槌', '魔法の小槌', 'マヒルお手製ハリセン', '打ちでの小槌', '駆け出しのチュウ',
					'韋駄天のチュウタ', '草土竜のチュウヤ', 'ステゴロのチュウザ', 'ひよ子', '益荒男のチュウジ', '怒髪天のチュウジ', '金庫破りのチュウサブロウ'],
				cheeseContentStickers: ['start_observation_cheese', 'ripe_cheese', 'beautiful_blue_cheese', 'temptation1_cheese', 'temptation2_cheese', 'mystery_remains_mystery_cheese',
					'mallet_cheese', 'magical_mallet_cheese', 'harisen_cheese', 'mallet_of_luck_cheese', 'chuu_cheese', 'chuuta_cheese', 'chuuya_cheese', 'chuuza_cheese', 'chick_cheese',
					'masurao_chuuji_cheese', 'dohatsuten_chuuji_cheese', 'chuusaburou_cheese'],
				diaryPageNames: ['どうしてこんなことに…?', 'ごきげんようが言えなくて', 'やっちゃった!', 'ユニさんはこんな人', 'クロエさんはこんな人', 'チエルさんはこんな人', '知的なユニさん',
					'優しいクエロさん', '憧れのチエルさん', '特別講座の練習', 'いよいよ特別講座', 'さすがBB団の団長さん!', 'マンドラゴラでパニック', '最終日'],
				diaryStickers: ['day1_chicken', 'day2_chicken', 'day3_chicken', 'day4_chicken', 'day5_chicken', 'day6_chicken', 'day7_chicken', 'day8_chicken', 'day9_chicken', 'day10_chicken',
					'day11_chicken', 'day12_chicken', 'day13_chicken', 'day14_chicken'],
				xNotePageNames: ['次世代へ継承すべき新言語', '私はとても作文が苦手です', '飛翔へと至るまで', '閃きましたわ!', '組み立てにゃ!', '私こんなの書いたっけ…?', 'このままにしておけないわ',
					'特別講座を終えて', '考察', '試作機完成', '最終工程'],
				xNoteStickers: ['chieru_foundation', 'kuroe_foundation', 'yuni_foundation', 'akino_foundation', 'tamaki_foundation', 'yukari_foundation', 'mihuyu_foundation', 'mercurius_foundation',
					'nakayoshix1_foundation', 'nakayoshix2_foundation', 'nakayoshix3_foundation']
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
				return [this.clanChatStikcers, this.albumStickers, this.bossStickers, this.cacaoStickers, this.happeningStickers, this.shiritoriStickers, this.cheeseContentStickers, this.diaryStickers, this.xNoteStickers];
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
			copyLink: function(id) {
				const dummy = document.createElement('div');
				dummy.textContent = 'https://jadengygo.github.io/princess-connect-stickers/img/' + id + '.png';
				dummy.style.visible = 'hidden'
				document.body.appendChild(dummy);
				document.getSelection().selectAllChildren(dummy);
				document.execCommand('copy');
				document.body.removeChild(dummy);

				UIkit.notification.closeAll();
				UIkit.notification({
					message: '画像リンクをコピーしました',
					pos: 'top-center',
					timeout: 500
				});
			}
		},
		template: `
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
											<div><img v-bind:id="guildSticker" v-bind:data-src="'img/' + guildSticker + '.png'" v-bind:alt="guildSticker" uk-img></div>
											<div v-if="clipboardImpled"><button v-on:click="copyImage(guildSticker)" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
											<div><button v-on:click="copyLink(guildSticker)" class="uk-button uk-button-default uk-button-small uk-margin-small-top uk-margin-bottom">リンクコピー</button></div>
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
									<div><img v-bind:id="stickers[contentIndex][nameIndex]" v-bind:data-src="'img/' + stickers[contentIndex][nameIndex] + '.png'" v-bind:alt="name" uk-img></div>
									<div v-if="clipboardImpled"><button v-on:click="copyImage(stickers[contentIndex][nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
									<div><button v-on:click="copyLink(stickers[contentIndex][nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button> </div>
								</div>
							</div>
						</li>
					</ul>
					<div class="uk-margin-bottom"><span class="uk-text-muted">サイト作成者: </span><a class="uk-link-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
				</div>
				<canvas id="canvas"></canvas>
			</div>
			`
	};
	new Vue({
		el: '#app',
		components: {
			'component': component
		},
		template: '<component></component>'
	});
});
