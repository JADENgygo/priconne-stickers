import type { NextPage } from 'next'
import Image from 'next/image'

const Shiritori: NextPage = () => {
  const stickers = [
    { name: 'リンゴ', path: '/img/shiritori/apple.webp', width: 120, height: 120 },
    { name: 'ゴリラ', path: '/img/shiritori/gorilla.webp', width: 120, height: 120 },
    { name: 'ラッパ', path: '/img/shiritori/trumpet.webp', width: 120, height: 120 },
    { name: 'パイナップル', path: '/img/shiritori/pineapple.webp', width: 120, height: 120 },
    { name: 'ルビー', path: '/img/shiritori/ruby.webp', width: 120, height: 120 },
    { name: 'ビールっぽいもの', path: '/img/shiritori/beer.webp', width: 120, height: 120 },
    { name: 'ゆみや', path: '/img/shiritori/bow_and_row.webp', width: 120, height: 120 },
    { name: 'おんぷ', path: '/img/shiritori/note.webp', width: 120, height: 120 },
    { name: 'えのぐ', path: '/img/shiritori/paint.webp', width: 120, height: 120 },
    { name: 'けん', path: '/img/shiritori/sword.webp', width: 120, height: 120 },
    { name: 'めがね', path: '/img/shiritori/glasses.webp', width: 120, height: 120 },
    { name: 'むしめがね', path: '/img/shiritori/loupe.webp', width: 120, height: 120 },
    { name: 'にく', path: '/img/shiritori/meat.webp', width: 120, height: 120 },
    { name: 'つき', path: '/img/shiritori/moon.webp', width: 120, height: 120 },
    { name: 'こうもり', path: '/img/shiritori/bat.webp', width: 120, height: 120 },
    { name: 'とり', path: '/img/shiritori/bird.webp', width: 120, height: 120 },
    { name: 'くつ', path: '/img/shiritori/shoes.webp', width: 120, height: 120 },
    { name: 'ねこ', path: '/img/shiritori/cat.webp', width: 120, height: 120 },
    { name: 'きんぎょ', path: '/img/shiritori/goldfish.webp', width: 120, height: 120 },
    { name: 'ねずみ', path: '/img/shiritori/mouse.webp', width: 120, height: 120 },
    { name: 'たまご', path: '/img/shiritori/egg.webp', width: 120, height: 120 },
    { name: 'ふね', path: '/img/shiritori/ship.webp', width: 120, height: 120 },
    { name: 'ぎゅうにゅう', path: '/img/shiritori/milk.webp', width: 120, height: 120 },
    { name: 'チョコレート', path: '/img/shiritori/chocolate.webp', width: 120, height: 120 },
    { name: 'どんぐり', path: '/img/shiritori/acorn.webp', width: 120, height: 120 },
    { name: 'いちご', path: '/img/shiritori/strawberry.webp', width: 120, height: 120 },
    { name: 'とら', path: '/img/shiritori/tiger.webp', width: 120, height: 120 },
    { name: 'ぬいぐるみ', path: '/img/shiritori/stuffed_animal.webp', width: 120, height: 120 },
    { name: 'ばくだん', path: '/img/shiritori/bomb.webp', width: 120, height: 120 },
    { name: 'すいか', path: '/img/shiritori/watermelon.webp', width: 120, height: 120 },
    { name: 'うま', path: '/img/shiritori/horse.webp', width: 120, height: 120 },
    { name: 'いす', path: '/img/shiritori/chair.webp', width: 120, height: 120 },
    { name: 'うみ', path: '/img/shiritori/sea.webp', width: 120, height: 120 },
    { name: 'やどかり', path: '/img/shiritori/hermit_crab.webp', width: 120, height: 120 },
    { name: 'ふえ', path: '/img/shiritori/whistle.webp', width: 120, height: 120 },
    { name: 'ほん', path: '/img/shiritori/book.webp', width: 120, height: 120 },
    { name: 'さかな', path: '/img/shiritori/fish.webp', width: 120, height: 120 },
    { name: 'ツリー', path: '/img/shiritori/tree.webp', width: 120, height: 120 },
    { name: 'あめ', path: '/img/shiritori/candy.webp', width: 120, height: 120 },
    { name: 'ハンマー', path: '/img/shiritori/hammer.webp', width: 120, height: 120 },
    { name: 'ほし', path: '/img/shiritori/star.webp', width: 120, height: 120 },
    { name: 'ぼうし', path: '/img/shiritori/hat.webp', width: 120, height: 120 },
    { name: 'カップ', path: '/img/shiritori/cup.webp', width: 120, height: 120 },
    { name: 'いぬ', path: '/img/shiritori/dog.webp', width: 120, height: 120 },
    { name: 'はた', path: '/img/shiritori/flag.webp', width: 120, height: 120 },
    { name: 'ケーキ', path: '/img/shiritori/cake.webp', width: 120, height: 120 },
    { name: 'マイク', path: '/img/shiritori/microphone.webp', width: 120, height: 120 },
    { name: 'くちべに', path: '/img/shiritori/lipstick.webp', width: 120, height: 120 },
    { name: 'もち', path: '/img/shiritori/mochi.webp', width: 120, height: 120 },
    { name: 'ようせい', path: '/img/shiritori/fairy.webp', width: 120, height: 120 },
    { name: 'かさ', path: '/img/shiritori/umbrella.webp', width: 120, height: 120 },
    { name: 'さいころ', path: '/img/shiritori/dice.webp', width: 120, height: 120 },
    { name: 'てがみ', path: '/img/shiritori/letter.webp', width: 120, height: 120 },
    { name: 'ブドウ', path: '/img/shiritori/grape.webp', width: 120, height: 120 },
    { name: 'ひつじ', path: '/img/shiritori/sheep.webp', width: 120, height: 120 },
    { name: 'とうふ', path: '/img/shiritori/tofu.webp', width: 120, height: 120 },
    { name: 'あひる', path: '/img/shiritori/duck.webp', width: 120, height: 120 },
    { name: 'とんぼ', path: '/img/shiritori/dragonfly.webp', width: 120, height: 120 },
    { name: 'はっぱ', path: '/img/shiritori/leaf.webp', width: 120, height: 120 },
    { name: 'ゆびわ', path: '/img/shiritori/ring.webp', width: 120, height: 120 },
    { name: 'なわ', path: '/img/shiritori/rope.webp', width: 120, height: 120 },
    { name: 'たて', path: '/img/shiritori/shield.webp', width: 120, height: 120 },
    { name: 'おかね', path: '/img/shiritori/money.webp', width: 120, height: 120 },
    { name: 'プリンアラモード', path: '/img/shiritori/pudding.webp', width: 120, height: 120 },
    { name: 'ネックレス', path: '/img/shiritori/necklace.webp', width: 120, height: 120 },
    { name: 'いなほ', path: '/img/shiritori/rice_ear.webp', width: 120, height: 120 },
    { name: 'しょうゆ', path: '/img/shiritori/soy_sauce.webp', width: 120, height: 120 },
    { name: 'ベルトコンベア', path: '/img/shiritori/belt_conveyor.webp', width: 120, height: 120 },
    { name: 'シャンデリア', path: '/img/shiritori/chandelier.webp', width: 120, height: 120 },
    { name: 'しお', path: '/img/shiritori/salt.webp', width: 120, height: 120 },
    { name: 'うずしお', path: '/img/shiritori/whirlpool.webp', width: 120, height: 120 },
    { name: 'つりざお', path: '/img/shiritori/rod.webp', width: 120, height: 120 },
    { name: 'なべ', path: '/img/shiritori/pot.webp', width: 120, height: 120 },
    { name: 'シーソー', path: '/img/shiritori/seesaw.webp', width: 120, height: 120 },
    { name: 'ふで', path: '/img/shiritori/brush.webp', width: 120, height: 120 },
    { name: 'きんトレ', path: '/img/shiritori/work_out.webp', width: 120, height: 120 },
    { name: 'おばけ', path: '/img/shiritori/ghost.webp', width: 120, height: 120 },
    { name: 'ヒヨリ', path: '/img/shiritori/hiyori.webp', width: 120, height: 120 },
    { name: 'ユイ', path: '/img/shiritori/yui.webp', width: 120, height: 120 },
    { name: 'レイ', path: '/img/shiritori/rei.webp', width: 120, height: 120 },
    { name: 'ミソギ', path: '/img/shiritori/misogi.webp', width: 120, height: 120 },
    { name: 'マツリ', path: '/img/shiritori/matsuri.webp', width: 120, height: 120 },
    { name: 'アカリ', path: '/img/shiritori/akari.webp', width: 120, height: 120 },
    { name: 'ミヤコ', path: '/img/shiritori/miyako.webp', width: 120, height: 120 },
    { name: 'ユキ', path: '/img/shiritori/yuki.webp', width: 120, height: 120 },
    { name: 'アンナ', path: '/img/shiritori/anna.webp', width: 120, height: 120 },
    { name: 'マホ', path: '/img/shiritori/maho.webp', width: 120, height: 120 },
    { name: 'リノ', path: '/img/shiritori/rino.webp', width: 120, height: 120 },
    { name: 'ハツネ', path: '/img/shiritori/hatsune.webp', width: 120, height: 120 },
    { name: 'ナナカ', path: '/img/shiritori/nanaka.webp', width: 120, height: 120 },
    { name: 'カスミ', path: '/img/shiritori/kasumi.webp', width: 120, height: 120 },
    { name: 'ミサト', path: '/img/shiritori/misato.webp', width: 120, height: 120 },
    { name: 'スズナ', path: '/img/shiritori/suzuna.webp', width: 120, height: 120 },
    { name: 'カオリ', path: '/img/shiritori/kaori.webp', width: 120, height: 120 },
    { name: 'イオ', path: '/img/shiritori/io.webp', width: 120, height: 120 },
    { name: 'ミミ', path: '/img/shiritori/mimi.webp', width: 120, height: 120 },
    { name: 'クルミ', path: '/img/shiritori/kurumi.webp', width: 120, height: 120 },
    { name: 'ヨリ', path: '/img/shiritori/yori.webp', width: 120, height: 120 },
    { name: 'アヤネ', path: '/img/shiritori/ayane.webp', width: 120, height: 120 },
    { name: 'スズメ', path: '/img/shiritori/suzume.webp', width: 120, height: 120 },
    { name: 'リン', path: '/img/shiritori/rin.webp', width: 120, height: 120 },
    { name: 'エリコ', path: '/img/shiritori/eriko.webp', width: 120, height: 120 },
    { name: 'サレン', path: '/img/shiritori/saren.webp', width: 120, height: 120 },
    { name: 'ノゾミ', path: '/img/shiritori/nozomi.webp', width: 120, height: 120 },
    { name: 'ニノン', path: '/img/shiritori/ninon.webp', width: 120, height: 120 },
    { name: 'シノブ', path: '/img/shiritori/shinobu.webp', width: 120, height: 120 },
    { name: 'アキノ', path: '/img/shiritori/akino.webp', width: 120, height: 120 },
    { name: 'マヒル', path: '/img/shiritori/mahiru.webp', width: 120, height: 120 },
    { name: 'ユカリ', path: '/img/shiritori/yukari.webp', width: 120, height: 120 },
    { name: 'キョウカ', path: '/img/shiritori/kyouka.webp', width: 120, height: 120 },
    { name: 'トモ', path: '/img/shiritori/tomo.webp', width: 120, height: 120 },
    { name: 'シオリ', path: '/img/shiritori/shiori.webp', width: 120, height: 120 },
    { name: 'アオイ', path: '/img/shiritori/aoi.webp', width: 120, height: 120 },
    { name: 'チカ', path: '/img/shiritori/chika.webp', width: 120, height: 120 },
    { name: 'マコト', path: '/img/shiritori/makoto.webp', width: 120, height: 120 },
    { name: 'イリヤ', path: '/img/shiritori/iriya.webp', width: 120, height: 120 },
    { name: 'クウカ', path: '/img/shiritori/kuuka.webp', width: 120, height: 120 },
    { name: 'タマキ', path: '/img/shiritori/tamaki.webp', width: 120, height: 120 },
    { name: 'ジュン', path: '/img/shiritori/jun.webp', width: 120, height: 120 },
    { name: 'ミフユ', path: '/img/shiritori/mihuyu.webp', width: 120, height: 120 },
    { name: 'シズル', path: '/img/shiritori/shizuru.webp', width: 120, height: 120 },
    { name: 'ミサキ', path: '/img/shiritori/misaki.webp', width: 120, height: 120 },
    { name: 'ミツキ', path: '/img/shiritori/mitsuki.webp', width: 120, height: 120 },
    { name: 'リマ', path: '/img/shiritori/rima.webp', width: 120, height: 120 },
    { name: 'モニカ', path: '/img/shiritori/monika.webp', width: 120, height: 120 },
    { name: 'ツムギ', path: '/img/shiritori/tsumugi.webp', width: 120, height: 120 },
    { name: 'アユミ', path: '/img/shiritori/ayumi.webp', width: 120, height: 120 },
    { name: 'ルカ', path: '/img/shiritori/ruka.webp', width: 120, height: 120 },
    { name: 'ジータ', path: '/img/shiritori/jita.webp', width: 120, height: 120 },
    { name: 'ペコリーヌ', path: '/img/shiritori/peko.webp', width: 120, height: 120 },
    { name: 'コッコロ', path: '/img/shiritori/kokkoro.webp', width: 120, height: 120 },
    { name: 'キャル', path: '/img/shiritori/kyaru.webp', width: 120, height: 120 },
    { name: 'ムイミ', path: '/img/shiritori/muimi.webp', width: 120, height: 120 },
    { name: 'アリサ', path: '/img/shiritori/arisa.webp', width: 120, height: 120 },
    { name: 'ネネカ', path: '/img/shiritori/neneka.webp', width: 120, height: 120 },
    { name: 'クリスティーナ', path: '/img/shiritori/kurisu.webp', width: 120, height: 120 },
    { name: 'イノリ', path: '/img/shiritori/inori.webp', width: 120, height: 120 },
    { name: 'カヤ', path: '/img/shiritori/kaya.webp', width: 120, height: 120 },
    { name: 'ホマレ', path: '/img/shiritori/homare.webp', width: 120, height: 120 },
    { name: 'クロエ', path: '/img/shiritori/kuroe.webp', width: 120, height: 120 },
    { name: 'チエル', path: '/img/shiritori/chieru.webp', width: 120, height: 120 },
    { name: 'ユニ', path: '/img/shiritori/yuni.webp', width: 120, height: 120 },
  ];
  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 text-center">
      {
        stickers.map(value => (
          <div className="col mb-3" key={ value.path }>
            <div className="mb-1">{ value.name }</div>
            <Image src={ value.path } width={ value.width } height={ value.height } alt={ value.name } />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Shiritori
