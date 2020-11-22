<template>
	<div>
		<div class="uk-panel uk-padding uk-background-secondary uk-light uk-text-center">
			<router-link to="/" class="uk-logo">プリコネスタンプ</router-link>
		</div>
		<div class="uk-container">
			<router-view class="uk-margin-bottom" v-on:click="copyImage($event)"></router-view>
			<div class="uk-margin-bottom"><span class="uk-text-muted">サイト作成者: </span><a class="uk-link-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
			<canvas id="canvas"></canvas>
		</div>
	</div>
</template>
<script>
import UIkit from 'uikit';
import guildHouse from './guildHouse';
import clanChat from './clanChat';
import album from './album';
import clanBattle from './clanBattle';
import scramble from './scramble';
import giantSlalom from './giantSlalom';
import shiritori from './shiritori';
import cheese from './cheese';
import forest from './forest';
import angel from './angel';
export default {
	components: {
		'guild-house': guildHouse,
		'clan-chat': clanChat,
		'album': album,
		'clan-battle': clanBattle,
		'scramble': scramble,
		'giant-slalom': giantSlalom,
		'shiritori': shiritori,
		'cheese': cheese,
		'forest': forest,
		'angel': angel
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
canvas {
	display: none;
}
</style>
