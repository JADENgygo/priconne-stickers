<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">森の臆病者と聖なる学舎の異端児</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, i) in names">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="stickers[i]" v-bind:src="stickers[i]"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			names: [
				'どうしてこんなことに…?',
				'ごきげんようが言えなくて',
				'やっちゃった!',
				'ユニさんはこんな人',
				'クロエさんはこんな人',
				'チエルさんはこんな人',
				'知的なユニさん',
				'優しいクエロさん',
				'憧れのチエルさん',
				'特別講座の練習',
				'いよいよ特別講座',
				'さすがBB団の団長さん!',
				'マンドラゴラでパニック',
				'最終日'
			],
			stickers: [
				'./img/day1_chicken.webp',
				'./img/day2_chicken.webp',
				'./img/day3_chicken.webp',
				'./img/day4_chicken.webp',
				'./img/day5_chicken.webp',
				'./img/day6_chicken.webp',
				'./img/day7_chicken.webp',
				'./img/day8_chicken.webp',
				'./img/day9_chicken.webp',
				'./img/day10_chicken.webp',
				'./img/day11_chicken.webp',
				'./img/day12_chicken.webp',
				'./img/day13_chicken.webp',
				'./img/day14_chicken.webp'
			]
		}
	},
}
</script>
<style scoped>
</style>
