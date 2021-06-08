<template>
	<div class="uk-container">
		<div class="uk-margin-top">{{ title[subject] }}</div>
		<div uk-grid class="uk-grid-small uk-margin-top uk-text-center uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l">
			<div v-for="(name, i) in content[subject].names" v-bind:key="name">
				<div class="uk-text-bold uk-margin-small-bottom">{{ name }}</div>
				<img v-bind:src="content[subject].stickers[i]">
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
	props: {
		subject: String
	}
});

@Component
export default class OtherSticker extends Props {
	title: {[key: string]: string} = {
		'clan-chat': 'クランチャット', 'album': '思い出アルバム', 'clan-battle': 'クランバトル', 'scramble': 'お兄ちゃん争奪', 'giant-slalom': 'クウカ大回転', 'shiritori': 'しりとりドラゴンズ', 'cheese': 'チーズお守り大作戦', 'forest': '森の臆病者と聖なる学舎の異端児',
		'angel': '授けの財団と聖なる学舎の異端', 'connect-bond': '絆、つないで。こころ、結んで。'
	};
	content: {[key: string]: {[key: string]: string[]}} = {
		'clan-chat': {
			names: [
				'ペコリーヌ', 'コッコロ', 'キャル', 'ヒヨリ', 'ユイ', 'レイ', 'ミソギ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'スズナ', 'カオリ', 'ミミ', 'クルミ', 'ヨリ', 'アヤネ', 'スズメ', 'エリコ', 'サレン', 'ノゾミ', 'シノブ', 'ユカリ', 'キョウカ', 'アオイ',
				'イリヤ', 'クウカ', 'タマキ', 'ミフユ', 'シズル', 'ミサキ', 'モニカ'
			],
			stickers: [
				'./img/clan_chat/peko.webp', './img/clan_chat/kokkoro.webp', './img/clan_chat/kyaru.webp', './img/clan_chat/hiyori.webp', './img/clan_chat/yui.webp', './img/clan_chat/rei.webp', './img/clan_chat/misogi.webp', './img/clan_chat/anna.webp', './img/clan_chat/maho.webp', './img/clan_chat/rino.webp', './img/clan_chat/hatsune.webp', './img/clan_chat/suzuna.webp',
				'./img/clan_chat/kaori.webp', './img/clan_chat/mimi.webp', './img/clan_chat/kurumi.webp', './img/clan_chat/yori.webp', './img/clan_chat/ayane.webp', './img/clan_chat/suzume.webp', './img/clan_chat/eriko.webp', './img/clan_chat/saren.webp', './img/clan_chat/nozomi.webp', './img/clan_chat/shinobu.webp', './img/clan_chat/yukari.webp', './img/clan_chat/kyouka.webp',
				'./img/clan_chat/aoi.webp', './img/clan_chat/iriya.webp', './img/clan_chat/kuuka.webp', './img/clan_chat/tamaki.webp', './img/clan_chat/mihuyu.webp', './img/clan_chat/shizuru.webp', './img/clan_chat/misaki.webp', './img/clan_chat/monika.webp'
			],
		},
		'album': {
			names: [
				'アオイ', 'アオイ (作業服)', 'アオイ (編入生)', 'アカリ', 'アカリ (エンジェル)', 'アキノ', 'アヤネ', 'アユミ', 'アユミ (ワンダー)', 'アリサ', 'アン', 'アンナ', 'イオ', 'イノリ', 'イノリ (タイムトラベル)', 'イリヤ', 'エリコ', 'カオリ', 'カスミ',
				'カスミ (マジカル)', 'カヤ', 'カヤ (タイムトラベル)', 'キャル', 'キャル (プリンセス)', 'キョウカ', 'クウカ', 'クウカ (オーエド)', 'クリスティーナ', 'クルミ', 'グレア', 'クロエ', 'クロエ (聖学祭)', 'コッコロ', 'コッコロ (プリンセス)', 'サレン', 'ジータ', 'シェフィ', 'シオリ',
				'シオリ (マジカル)', 'シズル', 'シノブ', 'ジュン', 'スズナ', 'スズメ', 'タマキ', 'タマキ (作業服)', 'チエル', 'チエル (聖学祭)', 'チカ', 'ツムギ', 'トモ', 'トモ (マジカル)', 'ナナカ', 'ニノン', 'ニノン (オーエド)', 'ネネカ', 'ノゾミ', 'ハツネ',
				'ヒヨリ', 'ヒヨリ (プリンセス)', 'ペコリーヌ', 'ペコリーヌ (プリンセス)', 'マコト', 'マコト (シンデレラ)', 'マツリ', 'マヒル', 'マヒル (レンジャー)', 'マホ', 'マホ (シンデレラ)', 'ミサキ', 'ミサト', 'ミソギ', 'ミツキ', 'ミフユ', 'ミミ', 'ミヤコ', 'ムイミ', 'モニカ',
				'モニカ (マジカル)', 'ユイ', 'ユイ (プリンセス)', 'ユカリ', 'ユキ', 'ユニ', 'ヨリ', 'ヨリ (エンジェル)', 'ラビリスタ', 'リノ', 'リノ (ワンダー)', 'リマ', 'リマ (シンデレラ)', 'リン', 'リン (レンジャー)', 'ルゥ', 'ルカ', 'ルナ', 'レイ'
			],
			stickers: [
				'./img/album/aoi.webp', './img/album/aoi_work_clothes.webp', './img/album/aoi_hennyusei.webp', './img/album/akari.webp', './img/album/akari_angel.webp', './img/album/akino.webp', './img/album/ayane.webp', './img/album/ayumi.webp', './img/album/ayumi_wonder.webp', './img/album/arisa.webp', './img/album/an.webp', './img/album/anna.webp',
				'./img/album/io.webp', './img/album/inori.webp', './img/album/inori_timetravel.webp', './img/album/iriya.webp', './img/album/eriko.webp', './img/album/kaori.webp', './img/album/kasumi.webp', './img/album/kasumi_magical.webp', './img/album/kaya.webp', './img/album/kaya_timetravel.webp', './img/album/kyaru.webp', './img/album/kyaru_princess.webp', './img/album/kyouka.webp', './img/album/kuuka.webp',
				'./img/album/kuuka_oedo.webp', './img/album/kurisu.webp', './img/album/kurumi.webp', './img/album/gurea.webp', './img/album/kuroe.webp', './img/album/kuroe_seigakusai.webp', './img/album/kokkoro.webp', './img/album/kokkoro_princess.webp', './img/album/saren.webp', './img/album/jita.webp', './img/album/sheffi.webp', './img/album/shiori.webp', './img/album/shiori_magical.webp',
				'./img/album/shizuru.webp', './img/album/shinobu.webp', './img/album/jun.webp', './img/album/suzuna.webp', './img/album/suzume.webp', './img/album/tamaki.webp', './img/album/tamaki_work_clothes.webp', './img/album/chieru.webp', './img/album/chieru_seigakusai.webp', './img/album/chika.webp', './img/album/tsumugi.webp', './img/album/tomo.webp', './img/album/tomo_magical.webp', './img/album/nanaka.webp','./img/album/ninon.webp',
				'./img/album/ninon_oedo.webp', './img/album/neneka.webp', './img/album/nozomi.webp', './img/album/hatsune.webp', './img/album/hiyori.webp', './img/album/hiyori_princess.webp', './img/album/peko.webp', './img/album/peko_princess.webp', './img/album/makoto.webp', './img/album/makoto_cinderella.webp', './img/album/matsuri.webp', './img/album/mahiru.webp', './img/album/mahiru_ranger.webp',
				'./img/album/maho.webp', './img/album/maho_cinderella.webp', './img/album/misaki.webp', './img/album/misato.webp', './img/album/misogi.webp', './img/album/mitsuki.webp', './img/album/mihuyu.webp', './img/album/mimi.webp', './img/album/miyako.webp', './img/album/muimi.webp', './img/album/monika.webp', './img/album/monika_magical.webp', './img/album/yui.webp',
				'./img/album/yui_princess.webp', './img/album/yukari.webp', './img/album/yuki.webp', './img/album/yuni.webp', './img/album/yori.webp', './img/album/yori_angel.webp', './img/album/rabirisuta.webp', './img/album/rino.webp', './img/album/rino_wonder.webp', './img/album/rima.webp', './img/album/rima_cinderella.webp', './img/album/rin.webp',
				'./img/album/rin_ranger.webp', './img/album/ruu.webp', './img/album/ruka.webp', './img/album/runa.webp', './img/album/rei.webp'
			]
		},
		'clan-battle': {
			names: [
				'ゴブリングレート', 'ライライ', 'レイスロード', 'ダークガーゴイル', 'グラットン', 'オークチーフ', 'オブシダンワイバーン', 'レサトパルト', 'ワイバーン', 'ワイルドグリフォン', 'スカイワルキューレ', 'マスターセンリ', 'サジタリウス', 'ランドスロース', 'ニードルクリーパー', 'トライロッカー', 'アルゲティ',
				'ライデン', 'ネプテリオン', 'アクアリオス', 'バリジスク', 'メサルティム', 'ティタノタートル', 'ミノタウロス', 'スピリットホーン', 'ツインピッグス'
			],
			stickers: [
				'./img/clan_battle/goblin_great.webp', './img/clan_battle/rairai.webp', './img/clan_battle/wraith_lord.webp', './img/clan_battle/dark_gargoyle.webp', './img/clan_battle/guratton.webp', './img/clan_battle/orc_chief.webp', './img/clan_battle/obsidian_wyvern.webp',
				'./img/clan_battle/lesath_pult.webp', './img/clan_battle/wyvern.webp', './img/clan_battle/wild_griffon.webp', './img/clan_battle/sky_valkyrie.webp', './img/clan_battle/master_senri.webp', './img/clan_battle/sagittarius.webp',
				'./img/clan_battle/land_sloth.webp', './img/clan_battle/needle_creeper.webp', './img/clan_battle/tri_rocker.webp', './img/clan_battle/argeti.webp', './img/clan_battle/raiden.webp', './img/clan_battle/neptalion.webp', './img/clan_battle/aquarius.webp',
				'./img/clan_battle/basilisk.webp', './img/clan_battle/mesarthim.webp', './img/clan_battle/titanoturtle.webp', './img/clan_battle/minotaur.webp', './img/clan_battle/spirit_horn.webp', './img/clan_battle/twin_pigs.webp'
			]
		},
		'scramble': {
			names: [
				'普通のカカオ',
				'完熟カカオ',
				'極上カカオ'
			],
			stickers: [
				'./img/scramble/ordinary_cacao.webp',
				'./img/scramble/ripe_cacao.webp',
				'./img/scramble/best_cacao.webp'
			]
		},
		'giant-slalom': {
			names: [
				'間欠泉', 'トルネード', '向かい風', 'バナナジャンプ', '超低空飛行', 'アユミのうちわ', 'ジズ', 'スーパーボール', '落雷', 'バナナスライド', '成層圏突入', '追い風', 'ニノンの爆裂忍法', 'ロケット', '腹すべり', 'メサルティム', 'アクダイカン像', '土砂降り雨',
				'目回し', 'ドリル'
			],
			stickers: [
				'./img/giant_slalom/geyser.webp', './img/giant_slalom/tornado.webp', './img/giant_slalom/headwind.webp', './img/giant_slalom/banana_jump.webp', './img/giant_slalom/ultra_low_flight.webp', './img/giant_slalom/ayumis_fan.webp',
				'./img/giant_slalom/jizu.webp', './img/giant_slalom/super_ball.webp', './img/giant_slalom/lightning_strike.webp', './img/giant_slalom/banana_slide.webp', './img/giant_slalom/atmospheric_entry.webp', './img/giant_slalom/tailwind.webp',
				'./img/giant_slalom/ninons_explosive_ninja.webp', './img/giant_slalom/rocket.webp', './img/giant_slalom/belly_slide.webp', './img/giant_slalom/mesarthim.webp', './img/giant_slalom/akudaikan_statue.webp', './img/giant_slalom/downpour.webp',
				'./img/giant_slalom/giddy.webp', './img/giant_slalom/drill.webp'
			]
		},
		'shiritori': {
			names: [
				'リンゴ', 'ゴリラ', 'ラッパ', 'パイナップル', 'ルビー', 'ビールっぽいもの', 'ゆみや', 'おんぷ', 'えのぐ', 'けん', 'めがね', 'むしめがね', 'にく', 'つき', 'こうもり', 'とり', 'くつ', 'ねこ', 'きんぎょ', 'ねずみ',
				'たまご', 'ふね', 'ぎゅうにゅう', 'チョコレート', 'どんぐり', 'いちご', 'とら', 'ぬいぐるみ', 'ばくだん', 'すいか', 'うま', 'いす', 'うみ', 'やどかり', 'ふえ', 'ほん', 'さかな', 'ツリー', 'あめ', 'ハンマー',
				'ほし', 'ぼうし', 'カップ', 'いぬ', 'はた', 'ケーキ', 'マイク', 'くちべに', 'もち', 'ようせい', 'かさ', 'さいころ', 'てがみ', 'ブドウ', 'ひつじ', 'とうふ', 'あひる', 'とんぼ', 'はっぱ', 'ゆびわ', 'なわ', 'たて',
				'おかね', 'プリンアラモード', 'ネックレス', 'いなほ', 'しょうゆ', 'ベルトコンベア', 'シャンデリア', 'しお', 'うずしお', 'つりざお', 'なべ', 'シーソー', 'ふで', 'きんトレ', 'おばけ', 'ヒヨリ', 'ユイ', 'レイ',
				'ミソギ', 'マツリ', 'アカリ', 'ミヤコ', 'ユキ', 'アンナ', 'マホ', 'リノ', 'ハツネ', 'ナナカ', 'カスミ', 'ミサト', 'スズナ', 'カオリ', 'イオ', 'ミミ', 'クルミ', 'ヨリ', 'アヤネ', 'スズメ', 'リン', 'エリコ', 'サレン',
				'ノゾミ', 'ニノン', 'シノブ', 'アキノ', 'マヒル', 'ユカリ', 'キョウカ', 'トモ', 'シオリ', 'アオイ', 'チカ', 'マコト', 'イリヤ', 'クウカ', 'タマキ', 'ジュン', 'ミフユ', 'シズル', 'ミサキ', 'ミツキ', 'リマ', 'モニカ',
				'ツムギ', 'アユミ', 'ルカ', 'ジータ', 'ペコリーヌ', 'コッコロ', 'キャル', 'ムイミ', 'アリサ', 'ネネカ', 'クリスティーナ', 'イノリ', 'カヤ', 'ホマレ', 'クロエ', 'チエル', 'ユニ'
			],
			stickers: [
				'./img/shiritori/apple.webp', './img/shiritori/gorilla.webp', './img/shiritori/trumpet.webp', './img/shiritori/pineapple.webp', './img/shiritori/ruby.webp', './img/shiritori/beer.webp', './img/shiritori/bow_and_row.webp', './img/shiritori/note.webp', './img/shiritori/paint.webp', './img/shiritori/sword.webp',
				'./img/shiritori/glasses.webp', './img/shiritori/loupe.webp', './img/shiritori/meat.webp', './img/shiritori/moon.webp', './img/shiritori/bat.webp', './img/shiritori/bird.webp', './img/shiritori/shoes.webp', './img/shiritori/cat.webp', './img/shiritori/goldfish.webp', './img/shiritori/mouse.webp',
				'./img/shiritori/egg.webp', './img/shiritori/ship.webp', './img/shiritori/milk.webp', './img/shiritori/chocolate.webp', './img/shiritori/acorn.webp', './img/shiritori/strawberry.webp', './img/shiritori/tiger.webp', './img/shiritori/stuffed_animal.webp', './img/shiritori/bomb.webp', './img/shiritori/watermelon.webp',
				'./img/shiritori/horse.webp', './img/shiritori/chair.webp', './img/shiritori/sea.webp', './img/shiritori/hermit_crab.webp', './img/shiritori/whistle.webp', './img/shiritori/book.webp', './img/shiritori/fish.webp', './img/shiritori/tree.webp', './img/shiritori/candy.webp', './img/shiritori/hammer.webp',
				'./img/shiritori/star.webp', './img/shiritori/hat.webp', './img/shiritori/cup.webp', './img/shiritori/dog.webp', './img/shiritori/flag.webp', './img/shiritori/cake.webp', './img/shiritori/microphone.webp', './img/shiritori/lipstick.webp', './img/shiritori/mochi.webp', './img/shiritori/fairy.webp',
				'./img/shiritori/umbrella.webp', './img/shiritori/dice.webp', './img/shiritori/letter.webp', './img/shiritori/grape.webp', './img/shiritori/sheep.webp', './img/shiritori/tofu.webp', './img/shiritori/duck.webp', './img/shiritori/dragonfly.webp', './img/shiritori/leaf.webp', './img/shiritori/ring.webp',
				'./img/shiritori/rope.webp', './img/shiritori/shield.webp', './img/shiritori/money.webp', './img/shiritori/pudding.webp', './img/shiritori/necklace.webp', './img/shiritori/rice_ear.webp', './img/shiritori/soy_sauce.webp', './img/shiritori/belt_conveyor.webp', './img/shiritori/chandelier.webp', './img/shiritori/salt.webp',
				'./img/shiritori/whirlpool.webp', './img/shiritori/rod.webp', './img/shiritori/pot.webp', './img/shiritori/seesaw.webp', './img/shiritori/brush.webp', './img/shiritori/work_out.webp', './img/shiritori/ghost.webp', './img/shiritori/hiyori.webp', './img/shiritori/yui.webp', './img/shiritori/rei.webp',
				'./img/shiritori/misogi.webp', './img/shiritori/matsuri.webp', './img/shiritori/akari.webp', './img/shiritori/miyako.webp', './img/shiritori/yuki.webp', './img/shiritori/anna.webp', './img/shiritori/maho.webp', './img/shiritori/rino.webp', './img/shiritori/hatsune.webp', './img/shiritori/nanaka.webp',
				'./img/shiritori/kasumi.webp', './img/shiritori/misato.webp', './img/shiritori/suzuna.webp', './img/shiritori/kaori.webp', './img/shiritori/io.webp', './img/shiritori/mimi.webp', './img/shiritori/kurumi.webp', './img/shiritori/yori.webp', './img/shiritori/ayane.webp', './img/shiritori/suzume.webp',
				'./img/shiritori/rin.webp', './img/shiritori/eriko.webp', './img/shiritori/saren.webp', './img/shiritori/nozomi.webp', './img/shiritori/ninon.webp', './img/shiritori/shinobu.webp', './img/shiritori/akino.webp', './img/shiritori/mahiru.webp', './img/shiritori/yukari.webp', './img/shiritori/kyouka.webp',
				'./img/shiritori/tomo.webp', './img/shiritori/shiori.webp', './img/shiritori/aoi.webp', './img/shiritori/chika.webp', './img/shiritori/makoto.webp', './img/shiritori/iriya.webp', './img/shiritori/kuuka.webp', './img/shiritori/tamaki.webp', './img/shiritori/jun.webp', './img/shiritori/mihuyu.webp',
				'./img/shiritori/shizuru.webp', './img/shiritori/misaki.webp', './img/shiritori/mitsuki.webp', './img/shiritori/rima.webp', './img/shiritori/monika.webp', './img/shiritori/tsumugi.webp', './img/shiritori/ayumi.webp', './img/shiritori/ruka.webp', './img/shiritori/jita.webp', './img/shiritori/peko.webp',
				'./img/shiritori/kokkoro.webp', './img/shiritori/kyaru.webp', './img/shiritori/muimi.webp', './img/shiritori/arisa.webp', './img/shiritori/neneka.webp', './img/shiritori/kurisu.webp', './img/shiritori/inori.webp', './img/shiritori/kaya.webp', './img/shiritori/homare.webp', './img/shiritori/kuroe.webp',
				'./img/shiritori/chieru.webp', './img/shiritori/yuni.webp'
			]
		},
		'cheese': {
			names: [
				'観察開始!', '熟成', '麗しき青', '誘惑1', '誘惑2', '謎は謎のままに', '木槌', '魔法の小槌', 'マヒルお手製ハリセン', '打ちでの小槌', '駆け出しのチュウ', '韋駄天のチュウタ', '草土竜のチュウヤ', 'ステゴロのチュウザ', 'ひよ子', '益荒男のチュウジ',
				'怒髪天のチュウジ', '金庫破りのチュウサブロウ'
			],
			stickers: [
				'./img/cheese/start_observation.webp', './img/cheese/ripe.webp', './img/cheese/beautiful_blue.webp', './img/cheese/temptation1.webp', './img/cheese/temptation2.webp', './img/cheese/mystery_remains_mystery.webp', './img/cheese/mallet.webp',
				'./img/cheese/magical_mallet.webp', './img/cheese/harisen.webp', './img/cheese/mallet_of_luck.webp', './img/cheese/chuu.webp', './img/cheese/chuuta.webp', './img/cheese/chuuya.webp', './img/cheese/chuuza.webp', './img/cheese/chick.webp',
				'./img/cheese/masurao_chuuji.webp', './img/cheese/dohatsuten_chuuji.webp', './img/cheese/chuusaburou.webp'
			]
		},
		'forest': {
			names: [
				'どうしてこんなことに…?', 'ごきげんようが言えなくて', 'やっちゃった!', 'ユニさんはこんな人', 'クロエさんはこんな人', 'チエルさんはこんな人', '知的なユニさん', '優しいクエロさん', '憧れのチエルさん', '特別講座の練習', 'いよいよ特別講座',
				'さすがBB団の団長さん!', 'マンドラゴラでパニック', '最終日'
			],
			stickers: [
				'./img/forest/day1.webp', './img/forest/day2.webp', './img/forest/day3.webp', './img/forest/day4.webp', './img/forest/day5.webp', './img/forest/day6.webp', './img/forest/day7.webp', './img/forest/day8.webp', './img/forest/day9.webp',
				'./img/forest/day10.webp', './img/forest/day11.webp', './img/forest/day12.webp', './img/forest/day13.webp', './img/forest/day14.webp'
			]
		},
		'angel': {
			names: [
				'次世代へ継承すべき新言語', '私はとても作文が苦手です', '飛翔へと至るまで', '閃きましたわ!', '組み立てにゃ!', '私こんなの書いたっけ…?', 'このままにしておけないわ', '特別講座を終えて', '考察', '試作機完成', '最終工程'
			],
			stickers: [
				'./img/angel/chieru.webp', './img/angel/kuroe.webp', './img/angel/yuni.webp', './img/angel/akino.webp', './img/angel/tamaki.webp', './img/angel/yukari.webp', './img/angel/mihuyu.webp', './img/angel/mercurius.webp',
				'./img/angel/nakayoshix1.webp', './img/angel/nakayoshix2.webp', './img/angel/nakayoshix3.webp'
			]
		},
		'connect-bond': {
			names: [
				'大切なみなさまへ', 'ペコリーヌさまのご挨拶', 'キャルさまの真心', 'わたくしの、主さま', 'あの笑顔はいつも、胸の中に', '懐かしの場所へ', '信じられません…！', '光明と、惑いと', '心の安らぎ、掴むべき未来',
				'ありがとう、では足りません', 'ただいま、わたくしの食卓'
			],
			stickers: [
				'./img/connect_bond/taisetsunaminasamahe.webp', './img/connect_bond/pekoriinusamanogoaisatsu.webp', './img/connect_bond/kyarusamanomagokoro.webp', './img/connect_bond/watakushinoarujisama.webp',
				'./img/connect_bond/anoegaohaitsumomunenonakani.webp', './img/connect_bond/natsukashinobashohe.webp', './img/connect_bond/shinjiraremasen.webp', './img/connect_bond/koumyoutotomadoito.webp',
				'./img/connect_bond/kokoronoyasuragitsukamubekimirai.webp', './img/connect_bond/arigatoudehatarimasen.webp', './img/connect_bond/tadaimawatakushinoshokutaku.webp',
			]
		}
	};
}
</script>
<style scoped>
</style>
