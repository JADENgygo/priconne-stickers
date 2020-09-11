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
				guildStickers: [['peko', 'kokkoro', 'kyaru'], ['hiyori', 'yui', 'rei'], ['rabirisuta', 'shizuru', 'rino'], ['nozomi', 'chika', 'tsumugi'], ['mimi', 'misogi', 'kyouka'],
					['misato', 'hatsune', 'aoi'], ['iriya', 'yori', 'akari', 'shinobu', 'miyako'], ['jun', 'kurisu', 'tomo', 'matsuri'], ['saren', 'suzume', 'ayane', 'kurumi'],
					['maho', 'makoto', 'kaori'], ['mahiru', 'rima', 'shiori', 'rin'], ['akino', 'mihuyu', 'yukari', 'tamaki'], ['ruka', 'mitsuki', 'eriko', 'nanaka', 'anna'],
					['io', 'misaki', 'suzuna'], ['monika', 'yuki', 'ninon', 'kuuka', 'ayumi'], ['yuni', 'kuroe', 'chieru'], ['kaya', 'inori']],
				albumNames: ['アオイ', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ',
					'イリヤ', 'エリコ', 'カオリ', 'カスミ', 'カスミ (マジカル)', 'カヤ', 'キャル', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア',
					'クロエ', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シオリ', 'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ',
					'チエル', 'チカ', 'ツムギ', 'トモ', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ', 'ヒヨリ', 'ペコリーヌ', 'ペコリーヌ (プリンセス)',
					'マコト', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ', 'ユイ',
					'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ', 'ルナ', 'レイ'],
				albumStickers: ['aoi', 'aoi_hennyusei', 'akari', 'akari_angel', 'akino', 'ayane', 'ayumi', 'ayumi_wonder', 'arisa', 'an', 'anna', 'io', 'inori', 'iriya', 'eriko',
					'kaori', 'kasumi', 'kasumi_magical', 'kaya', 'kyaru', 'kyouka', 'kuuka', 'kuuka_oedo', 'kurisu', 'kurumi', 'gurea', 'kuroe', 'kokkoro', 'kokkoro_princess',
					'saren', 'jita', 'shiori', 'shiori_magical', 'shizuru', 'shinobu', 'jun', 'suzuna', 'suzume', 'tamaki', 'chieru', 'chika', 'tsumugi', 'tomo', 'nanaka','ninon',
					'ninon_oedo', 'neneka', 'nozomi', 'hatsune', 'hiyori', 'peko', 'peko_princess', 'makoto', 'matsuri', 'mahiru', 'mahiru_ranger', 'maho', 'misaki', 'misato',
					'misogi', 'mitsuki', 'mihuyu', 'mimi', 'miyako', 'muimi', 'monika', 'yui', 'yui_princess', 'yukari', 'yuki', 'yuni', 'yori', 'rabirisuta', 'rino', 'rino_wonder',
					'rima', 'rin', 'rin_ranger', 'ruu', 'ruka', 'runa', 'rei']
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
				</ul>
				<ul class="uk-switcher">
					<li>
						<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
							<div v-for="(clanChatName, i) in clanChatNames">
								<div class="uk-text-bold uk-margin-small-bottom">{{clanChatName}}</div>
								<div><img class="clan-chat-sticker" v-bind:id="clanChatStikcers[i]" v-bind:data-src="'img/' + clanChatStikcers[i]+ '.png'" class="uk-text-center" v-bind:alt="clanChatStikcers[i]" uk-img></div>
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
									<div><img v-bind:id="guildSticker + '_guildhouse'" v-bind:data-src="'img/' + guildSticker + '_guildhouse.png'" v-bind:alt="guildSticker" uk-img></div>
									<div v-if="clipboardImpled"><button v-on:click="copyImage(guildSticker + '_guildhouse')" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
									<div><button v-on:click="copyLink(guildSticker + '_guildhouse')" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button></div>
								</div>
							</div>
						</template>
					</li>
					<li>
						<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
							<div v-for="(albumName, i) in albumNames">
								<div class="uk-text-bold uk-margin-small-bottom">{{albumName}}</div>
								<div><img class="album-sticker" v-bind:id="albumStickers[i] + '_album'" v-bind:data-src="'img/' + albumStickers[i] + '_album.png'" v-bind:alt="albumStickers[i]" uk-img></div>
								<div v-if="clipboardImpled"><button v-on:click="copyImage(albumStickers[i] + '_album')" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
								<div><button v-on:click="copyLink(albumStickers[i] + '_album')" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button></div>
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

