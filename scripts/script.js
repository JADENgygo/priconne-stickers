window.addEventListener('load', () => {
	const component = {
		data: function() {
			return {
				clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
				clanChatNames: ['ペコリーヌ', 'コッコロ', 'キャル', 'ヒヨリ', 'ユイ', 'レイ', 'ミソギ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'スズナ', 'カオリ', 'ミミ', 'クルミ',
					'ヨリ', 'アヤネ', 'スズメ', 'エリコ', 'サレン', 'ノゾミ', 'シノブ', 'ユカリ', 'キョウカ', 'アオイ', 'イリヤ', 'クウカ', 'タマキ', 'ミフユ', 'シズル',
					'ミサキ', 'モニカ'],
				clanChatStikcers: ['peko', 'kokkoro', 'kyaru', 'hiyori', 'yui', 'rei', 'misogi', 'anna', 'maho', 'rino', 'hatsune', 'suzuna', 'kaori', 'mimi', 'kurumi', 'yori',
					'ayane', 'suzume', 'eriko', 'saren', 'nozomi', 'shinobu', 'yukari', 'kyouka', 'aoi', 'iriya', 'kuuka', 'tamaki', 'mihuyu', 'shizuru', 'misaki', 'monika'],
				guildNames: ['美食殿', 'トゥインクルウィッシュ', 'ラビリンス', 'カルミナ', 'リトルリリカル', 'フォレスティエ', 'ディアボロス', 'NIGHTMARE', 'サレンディア救護院',
					'カォン (カスミちゃん準備中)', 'エリザベスパーク', 'メルクリウス財団', 'トワイライトキャラバン', 'ルーセント学院', 'ヴァイスフリューゲルランドソル支部',
					'なかよし部', 'ドラゴンズネスト'],
				guildStickers: [['peko_guildhouse', 'kokkoro_guildhouse', 'kyaru_guildhouse'], ['hiyori_guildhouse', 'yui_guildhouse', 'rei_guildhouse'],
					['rabirisuta_guildhouse', 'shizuru_guildhouse', 'rino_guildhouse'], ['nozomi_guildhouse', 'chika_guildhouse', 'tsumugi_guildhouse'],
					['mimi_guildhouse', 'misogi_guildhouse', 'kyouka_guildhouse'], ['misato_guildhouse', 'hatsune_guildhouse', 'aoi_guildhouse'],
					['iriya_guildhouse', 'yori_guildhouse', 'akari_guildhouse', 'shinobu_guildhouse', 'miyako_guildhouse'],
					['jun_guildhouse', 'kurisu_guildhouse', 'tomo_guildhouse', 'matsuri_guildhouse'], ['saren_guildhouse', 'suzume_guildhouse', 'ayane_guildhouse', 'kurumi_guildhouse'],
					['maho_guildhouse', 'makoto_guildhouse', 'kaori_guildhouse'], ['mahiru_guildhouse', 'rima_guildhouse', 'shiori_guildhouse', 'rin_guildhouse'],
					['akino_guildhouse', 'mihuyu_guildhouse', 'yukari_guildhouse', 'tamaki_guildhouse'],
					['ruka_guildhouse', 'mitsuki_guildhouse', 'eriko_guildhouse', 'nanaka_guildhouse', 'anna_guildhouse'], ['io_guildhouse', 'misaki_guildhouse', 'suzuna_guildhouse'],
					['monika_guildhouse', 'yuki_guildhouse', 'ninon_guildhouse', 'kuuka_guildhouse', 'ayumi_guildhouse'], ['yuni_guildhouse', 'kuroe_guildhouse', 'chieru_guildhouse'],
					['kaya_guildhouse', 'inori_guildhouse']],
				albumNames: ['アオイ', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ',
					'イリヤ', 'エリコ', 'カオリ', 'カスミ', 'カスミ (マジカル)', 'カヤ', 'キャル', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア',
					'クロエ', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シオリ', 'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ',
					'チエル', 'チカ', 'ツムギ', 'トモ', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ', 'ヒヨリ', 'ペコリーヌ', 'ペコリーヌ (プリンセス)',
					'マコト', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ', 'ユイ',
					'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ', 'ルナ', 'レイ'],
				albumStickers: ['aoi_album', 'aoi_hennyusei_album', 'akari_album', 'akari_angel_album', 'akino_album', 'ayane_album', 'ayumi_album', 'ayumi_wonder_album', 'arisa_album',
					'an_album', 'anna_album', 'io_album', 'inori_album', 'iriya_album', 'eriko_album', 'kaori_album', 'kasumi_album', 'kasumi_magical_album', 'kaya_album', 'kyaru_album',
					'kyouka_album', 'kuuka_album', 'kuuka_oedo_album', 'kurisu_album', 'kurumi_album', 'gurea_album', 'kuroe_album', 'kokkoro_album', 'kokkoro_princess_album', 'saren_album',
					'jita_album', 'shiori_album', 'shiori_magical_album', 'shizuru_album', 'shinobu_album', 'jun_album', 'suzuna_album', 'suzume_album', 'tamaki_album', 'chieru_album',
					'chika_album', 'tsumugi_album', 'tomo_album', 'nanaka_album','ninon_album', 'ninon_oedo_album', 'neneka_album', 'nozomi_album', 'hatsune_album', 'hiyori_album',
					'peko_album', 'peko_princess_album', 'makoto_album', 'matsuri_album', 'mahiru_album', 'mahiru_ranger_album', 'maho_album', 'misaki_album', 'misato_album', 'misogi_album',
					'mitsuki_album', 'mihuyu_album', 'mimi_album', 'miyako_album', 'muimi_album', 'monika_album', 'yui_album', 'yui_princess_album', 'yukari_album', 'yuki_album',
					'yuni_album', 'yori_album', 'rabirisuta_album', 'rino_album', 'rino_wonder_album', 'rima_album', 'rin_album', 'rin_ranger_album', 'ruu_album', 'ruka_album',
					'runa_album', 'rei_album'],
				happeningNames: ['間欠泉', 'トルネード', '向かい風', 'バナナジャンプ', '超低空飛行', 'アユミのうちわ',  'ジズ', 'スーパーボール', '落雷', 'バナナスライド', '成層圏突入',
					'追い風', 'ニノンの爆裂忍法', 'ロケット', '腹すべり', 'メサルティム', 'アクダイカン像', '土砂降り雨', '目回し', 'ドリル'],
				happeningStickers: ['geyser_giant_slalom', 'tornado_giant_slalom', 'headwind_giant_slalom', 'banana_jump_giant_slalom', 'ultra_low_flight_giant_slalom',
					'ayumis_fan_giant_slalom', 'jizu_giant_slalom', 'super_ball_giant_slalom', 'lightning_strike_giant_slalom', 'banana_slide_giant_slalom', 'atmospheric_entry_giant_slalom',
					'tailwind_giant_slalom', 'ninons_explosive_ninja_giant_slalom', 'rocket_giant_slalom', 'belly_slide_giant_slalom', 'mesaruthimu_giant_slalom',
					'akudaikan_statue_giant_slalom', 'downpour_giant_slalom', 'giddy_giant_slalom', 'drill_giant_slalom']
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
			<div class="uk-container">
				<ul uk-tab class="uk-margin-top">
					<li><a href="#">クラチャ</a></li>
					<li><a href="#">ギルドハウス</a></li>
					<li><a href="#">思い出アルバム</a></li>
					<li><a href="#">クウカ大回転</a></li>
				</ul>
				<ul class="uk-switcher">
					<li>
						<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
							<div v-for="(clanChatName, i) in clanChatNames">
								<div class="uk-text-bold uk-margin-small-bottom">{{clanChatName}}</div>
								<div><img class="clan-chat-sticker" v-bind:id="clanChatStikcers[i]" v-bind:data-src="'img/' + clanChatStikcers[i] + '.png'" v-bind:alt="clanChatName" uk-img></div>
								<div v-if="clipboardImpled"><button v-on:click="copyImage(clanChatStikcers[i])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
								<div><button v-on:click="copyLink(clanChatStikcers[i])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button> </div>
							</div>
						</div>
					</li>
					<li>
						<template v-for="(guildName, i) in guildNames">
							<div class="uk-text-bold uk-margin-top uk-margin-bottom">{{guildName}}</div>
							<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
								<div v-for="guildSticker in guildStickers[i]">
									<div><img v-bind:id="guildSticker" v-bind:data-src="'img/' + guildSticker + '.png'" v-bind:alt="guildSticker" uk-img></div>
									<div v-if="clipboardImpled"><button v-on:click="copyImage(guildSticker)" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
									<div><button v-on:click="copyLink(guildSticker)" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button></div>
								</div>
							</div>
						</template>
					</li>
					<li>
						<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
							<div v-for="(albumName, i) in albumNames">
								<div class="album-name uk-text-bold uk-margin-small-bottom">{{albumName}}</div>
								<div><img class="album-sticker" v-bind:id="albumStickers[i]" v-bind:data-src="'img/' + albumStickers[i] + '.png'" v-bind:alt="albumName" uk-img></div>
								<div v-if="clipboardImpled"><button v-on:click="copyImage(albumStickers[i])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
								<div><button v-on:click="copyLink(albumStickers[i])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button></div>
							</div>
						</div>
					</li>
					<li>
						<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
							<div v-for="(happeningName, i) in happeningNames">
								<div class="uk-text-bold uk-margin-small-bottom">{{happeningName}}</div>
								<div><img class="happening-sticker" v-bind:id="happeningStickers[i]" v-bind:data-src="'img/' + happeningStickers[i] + '.png'" v-bind:alt="happeningName" uk-img></div>
								<div v-if="clipboardImpled"><button v-on:click="copyImage(happeningStickers[i])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
								<div><button v-on:click="copyLink(happeningStickers[i])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button></div>
							</div>
						</div>
					</li>
				</ul>
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

