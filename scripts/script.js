window.addEventListener('load', () => {
	const component = {
		data: function() {
			return {
				clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
				clanChatStikcers: ['peko', 'kokkoro', 'kyaru', 'hiyori', 'yui', 'rei', 'misogi', 'anna', 'maho', 'rino', 'hatsune', 'suzuna', 'kaori', 'mimi', 'kurumi', 'yori',
					'ayane', 'suzume', 'eriko', 'saren', 'nozomi', 'shinobu', 'yukari', 'kyouka', 'aoi', 'iriya', 'kuuka', 'tamaki', 'mihuyu', 'shizuru', 'misaki', 'monika'],
				guilds: ['美食殿', 'トゥインクルウィッシュ', 'ラビリンス', 'カルミナ', 'リトルリリカル', 'フォレスティエ', 'ディアボロス', 'NIGHTMARE', 'サレンディア救護院',
					'カォン (カスミちゃん準備中)', 'エリザベスパーク', 'メルクリウス財団', 'トワイライトキャラバン', 'ルーセント学院', 'ヴァイスフリューゲルランドソル支部',
					'なかよし部', 'ドラゴンズネスト'],
				guildStickers: [['peko', 'kokkoro', 'kyaru'], ['hiyori', 'yui', 'rei'], ['rabirisuta', 'shizuru', 'rino'], ['nozomi', 'chika', 'tsumugi'], ['mimi', 'misogi', 'kyouka'],
					['misato', 'hatsune', 'aoi'], ['iriya', 'yori', 'akari', 'shinobu', 'miyako'], ['jun', 'kurisu', 'tomo', 'matsuri'], ['saren', 'suzume', 'ayane', 'kurumi'],
					['maho', 'makoto', 'kaori'], ['mahiru', 'rima', 'shiori', 'rin'], ['akino', 'mihuyu', 'yukari', 'tamaki'], ['ruka', 'mitsuki', 'eriko', 'nanaka', 'anna'],
					['io', 'misaki', 'suzuna'], ['monika', 'yuki', 'ninon', 'kuuka', 'ayumi'], ['yuni', 'kuroe', 'chieru'], ['kaya', 'inori']]
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
				</ul>
				<ul class="uk-switcher">
					<li>
						<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
							<div v-for="clanChatStikcer in clanChatStikcers">
								<div><img v-bind:id="clanChatStikcer" v-bind:data-src="'img/' + clanChatStikcer + '.png'" class="uk-text-center" v-bind:alt="clanChatStikcer" uk-img></div>
								<div v-if="clipboardImpled"><button v-on:click="copyImage(clanChatStikcer)" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
								<div><button v-on:click="copyLink(clanChatStikcer)" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button> </div>
							</div>
						</div>
					</li>
					<li>
						<template v-for="(guild, index) in guilds">
							<div class="uk-text-lead uk-margin-top uk-margin-bottom">{{guild}}</div>
							<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-text-center" uk-grid>
								<template v-for="guildSticker in guildStickers[index]">
									<div>
										<div><img v-bind:id="guildSticker + '_guildhouse'" v-bind:data-src="'img/' + guildSticker + '_guildhouse.png'" v-bind:alt="guildSticker" uk-img></div>
										<div v-if="clipboardImpled"><button v-on:click="copyImage(guildSticker + '_guildhouse')" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
										<div><button v-on:click="copyLink(guildSticker + '_guildhouse')" class="uk-button uk-button-default uk-button-small uk-margin-small-top">リンクコピー</button></div>
									</div>
								</template>
							</div>
						</template>
					</li>
				</ul>
				<div class="uk-margin-top">
					<span class="uk-text-muted">サイト作成者: </span><a class="uk-link-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a>
				</div>
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

