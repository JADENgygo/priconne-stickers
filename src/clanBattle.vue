<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">クランバトル</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, nameIndex) in bossNames">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="bossStickers[nameIndex]" v-bind:src="bossStickers[nameIndex]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', bossStickers[nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created: function() {
		/*
		this.bossStickers = [
			require('./img/goblin_great_clan_battle.webp'),
			require('./img/rairai_clan_battle.webp'),
			require('./img/wraith_lord_clan_battle.webp'),
			require('./img/dark_gargoyle_clan_battle.webp'),
			require('./img/guratton_clan_battle.webp'),
			require('./img/orc_chief_clan_battle.webp'),
			require('./img/obsidian_wyvern_clan_battle.webp'),
			require('./img/Lesath_pult_clan_battle.webp')
		];
		*/
		this.bossStickers = [
			'./img/goblin_great_clan_battle.webp',
			'./img/rairai_clan_battle.webp',
			'./img/wraith_lord_clan_battle.webp',
			'./img/dark_gargoyle_clan_battle.webp',
			'./img/guratton_clan_battle.webp',
			'./img/orc_chief_clan_battle.webp',
			'./img/obsidian_wyvern_clan_battle.webp',
			'./img/Lesath_pult_clan_battle.webp'
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			bossNames: [
				'ゴブリングレート',
				'ライライ',
				'レイスロード',
				'ダークガーゴイル',
				'グラットン',
				'オークチーフ',
				'オブシダンワイバーン',
				'レサトパルト'
			],
			bossStickers: [],
		}
	},
}
</script>
<style scoped>
</style>
