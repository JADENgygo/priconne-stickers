<template>
	<div>
		<div class="uk-container">
			<div class="uk-margin-small-top uk-text-right"><span class="uk-text-muted">サイト作成者: </span><a class="uk-link-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
			<div class="uk-text-lead uk-link-text uk-text-center uk-margin-top">
				<router-link to="/">プリコネスタンプ</router-link>
			</div>
			<router-view class="uk-margin-bottom"></router-view>
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
}
</script>
<style scoped>
</style>
