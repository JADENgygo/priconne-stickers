<template>
	<div class="uk-text-center">
		<ul class="uk-margin-top uk-list uk-list-disc list">
			<li><router-link to="/sticker/guild-house">ギルドハウス</router-link></li>
			<li v-for="(e, i) in engNames"><router-link v-bind:to="'/sticker/' + engNames[i]">{{ japNames[i] }}</router-link></li>
		</ul>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			engNames: ['clan-chat', 'album', 'clan-battle', 'scramble', 'giant-slalom', 'shiritori', 'cheese', 'forest', 'angel', 'connect-bond'],
			japNames: ['クランチャット', '思い出アルバム', 'クランバトル', 'お兄ちゃん争奪', 'クウカ大回転', 'しりとりドラゴンズ', 'チーズお守り大作戦', '森の臆病者と聖なる学舎の異端児', '授けの財団と聖なる学舎の異端児',
				'絆、つないで。こころ、結んで。']
		};
	}
}
</script>
<style scoped>
.list {
	display: inline-block;
	text-align: left;
}
</style>
