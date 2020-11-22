<template>
	<div class="uk-container">
		<div class="uk-text-lead uk-margin-top">チーズお守り大作戦</div>
		<div class="uk-margin-top uk-link-muted"><router-link to="/">トップページ</router-link></div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-text-center" uk-grid>
			<div v-for="(name, nameIndex) in cheeseContentNames">
				<div class="uk-text-bold uk-margin-top uk-margin-small-bottom">{{ name }}</div>
				<div><img v-bind:id="cheeseContentStickers[nameIndex]" v-bind:src="cheeseContentStickers[nameIndex]"></div>
				<div v-if="clipboardImpled"><button v-on:click="$emit('click', cheeseContentStickers[nameIndex])" class="uk-button uk-button-default uk-button-small uk-margin-small-top">画像コピー</button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created: function() {
		/*
		this.cheeseContentStickers = [
			require('./img/start_observation_cheese.webp'),
			require('./img/ripe_cheese.webp'),
			require('./img/beautiful_blue_cheese.webp'),
			require('./img/temptation1_cheese.webp'),
			require('./img/temptation2_cheese.webp'),
			require('./img/mystery_remains_mystery_cheese.webp'),
			require('./img/mallet_cheese.webp'),
			require('./img/magical_mallet_cheese.webp'),
			require('./img/harisen_cheese.webp'),
			require('./img/mallet_of_luck_cheese.webp'),
			require('./img/chuu_cheese.webp'),
			require('./img/chuuta_cheese.webp'),
			require('./img/chuuya_cheese.webp'),
			require('./img/chuuza_cheese.webp'),
			require('./img/chick_cheese.webp'),
			require('./img/masurao_chuuji_cheese.webp'),
			require('./img/dohatsuten_chuuji_cheese.webp'),
			require('./img/chuusaburou_cheese.webp')
		];
		*/
		this.cheeseContentStickers = [
			'./img/start_observation_cheese.webp',
			'./img/ripe_cheese.webp',
			'./img/beautiful_blue_cheese.webp',
			'./img/temptation1_cheese.webp',
			'./img/temptation2_cheese.webp',
			'./img/mystery_remains_mystery_cheese.webp',
			'./img/mallet_cheese.webp',
			'./img/magical_mallet_cheese.webp',
			'./img/harisen_cheese.webp',
			'./img/mallet_of_luck_cheese.webp',
			'./img/chuu_cheese.webp',
			'./img/chuuta_cheese.webp',
			'./img/chuuya_cheese.webp',
			'./img/chuuza_cheese.webp',
			'./img/chick_cheese.webp',
			'./img/masurao_chuuji_cheese.webp',
			'./img/dohatsuten_chuuji_cheese.webp',
			'./img/chuusaburou_cheese.webp'
		];
	},
	data: function() {
		return {
			clipboardImpled: typeof navigator.clipboard.write !== 'undefined',
			cheeseContentNames: [
				'観察開始!',
				'熟成',
				'麗しき青',
				'誘惑1',
				'誘惑2',
				'謎は謎のままに',
				'木槌',
				'魔法の小槌',
				'マヒルお手製ハリセン',
				'打ちでの小槌',
				'駆け出しのチュウ',
				'韋駄天のチュウタ',
				'草土竜のチュウヤ',
				'ステゴロのチュウザ',
				'ひよ子',
				'益荒男のチュウジ',
				'怒髪天のチュウジ',
				'金庫破りのチュウサブロウ'
			],
			cheeseContentStickers: []
		};
	},
}
</script>
<style scoped>
</style>
