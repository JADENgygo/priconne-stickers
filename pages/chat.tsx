import type { NextPage } from 'next'
import Image from 'next/image'

const Chat: NextPage = () => {
  const stickers = [
    { name: 'ペコリーヌ', path: '/img/chat/peko.webp', width: 120, height: 100 },
    { name: 'コッコロ', path: '/img/chat/kokkoro.webp', width: 120, height: 100 },
    { name: 'キャル', path: '/img/chat/kyaru.webp', width: 120, height: 100 },
    { name: 'ヒヨリ', path: '/img/chat/hiyori.webp', width: 120, height: 100 },
    { name: 'ユイ', path: '/img/chat/yui.webp', width: 120, height: 100 },
    { name: 'レイ', path: '/img/chat/rei.webp', width: 120, height: 100 },
    { name: 'ミソギ', path: '/img/chat/misogi.webp', width: 120, height: 100 },
    { name: 'アンナ', path: '/img/chat/anna.webp', width: 120, height: 100 },
    { name: 'マホ', path: '/img/chat/maho.webp', width: 120, height: 100 },
    { name: 'リノ', path: '/img/chat/rino.webp', width: 120, height: 100 },
    { name: 'ハツネ', path: '/img/chat/hatsune.webp', width: 120, height: 100 },
    { name: 'スズナ', path: '/img/chat/suzuna.webp', width: 120, height: 100 },
    { name: 'カオリ', path: '/img/chat/kaori.webp', width: 120, height: 100 },
    { name: 'ミミ', path: '/img/chat/mimi.webp', width: 120, height: 100 },
    { name: 'クルミ', path: '/img/chat/kurumi.webp', width: 120, height: 100 },
    { name: 'ヨリ', path: '/img/chat/yori.webp', width: 120, height: 100 },
    { name: 'アヤネ', path: '/img/chat/ayane.webp', width: 120, height: 100 },
    { name: 'スズメ', path: '/img/chat/suzume.webp', width: 120, height: 100 },
    { name: 'エリコ', path: '/img/chat/eriko.webp', width: 120, height: 100 },
    { name: 'サレン', path: '/img/chat/saren.webp', width: 120, height: 100 },
    { name: 'ノゾミ', path: '/img/chat/nozomi.webp', width: 120, height: 100 },
    { name: 'シノブ', path: '/img/chat/shinobu.webp', width: 120, height: 100 },
    { name: 'ユカリ', path: '/img/chat/yukari.webp', width: 120, height: 100 },
    { name: 'キョウカ', path: '/img/chat/kyouka.webp', width: 120, height: 100 },
    { name: 'アオイ', path: '/img/chat/aoi.webp', width: 120, height: 100 },
    { name: 'イリヤ', path: '/img/chat/iriya.webp', width: 120, height: 100 },
    { name: 'クウカ', path: '/img/chat/kuuka.webp', width: 120, height: 100 },
    { name: 'タマキ', path: '/img/chat/tamaki.webp', width: 120, height: 100 },
    { name: 'ミフユ', path: '/img/chat/mihuyu.webp', width: 120, height: 100 },
    { name: 'シズル', path: '/img/chat/shizuru.webp', width: 120, height: 100 },
    { name: 'ミサキ', path: '/img/chat/misaki.webp', width: 120, height: 100 },
    { name: 'モニカ', path: '/img/chat/monika.webp', width: 120, height: 100 },
    { name: 'アユミ', path: '/img/chat/ayumi.webp', width: 120, height: 100 },
    { name: 'マツリ', path: '/img/chat/matsuri.webp', width: 120, height: 100 },
    { name: 'アカリ', path: '/img/chat/akari.webp', width: 120, height: 100 },
    { name: 'ミヤコ', path: '/img/chat/miyako.webp', width: 120, height: 100 },
    { name: 'ユキ', path: '/img/chat/yuki.webp', width: 120, height: 100 },
    { name: 'ナナカ', path: '/img/chat/nanaka.webp', width: 120, height: 100 },
    { name: 'カスミ', path: '/img/chat/kasumi.webp', width: 120, height: 100 },
    { name: 'ミサト', path: '/img/chat/misato.webp', width: 120, height: 100 },
    { name: 'イオ', path: '/img/chat/io.webp', width: 120, height: 100 },
    { name: 'リン', path: '/img/chat/rin.webp', width: 120, height: 100 },
    { name: 'ニノン', path: '/img/chat/ninon.webp', width: 120, height: 100 },
    { name: 'アキノ', path: '/img/chat/akino.webp', width: 120, height: 100 },
    { name: 'マヒル', path: '/img/chat/mahiru.webp', width: 120, height: 100 },
    { name: 'トモ', path: '/img/chat/tomo.webp', width: 120, height: 100 },
    { name: 'シオリ', path: '/img/chat/shiori.webp', width: 120, height: 100 },
    { name: 'チカ', path: '/img/chat/chika.webp', width: 120, height: 100 },
    { name: 'マコト', path: '/img/chat/makoto.webp', width: 120, height: 100 },
    { name: 'ジュン', path: '/img/chat/jun.webp', width: 120, height: 100 },
    { name: 'ミツキ', path: '/img/chat/mitsuki.webp', width: 120, height: 100 },
    { name: 'リマ', path: '/img/chat/rima.webp', width: 120, height: 100 },
    { name: 'ツムギ', path: '/img/chat/tsumugi.webp', width: 120, height: 100 },
    { name: 'ルカ', path: '/img/chat/ruka.webp', width: 120, height: 100 },
    { name: 'ムイミ', path: '/img/chat/muimi.webp', width: 120, height: 100 },
    { name: 'シェフィ', path: '/img/chat/sheffi.webp', width: 120, height: 100 },
    { name: 'カヤ', path: '/img/chat/kaya.webp', width: 120, height: 100 },
    { name: 'イノリ', path: '/img/chat/inori.webp', width: 120, height: 100 },
    { name: 'ホマレ', path: '/img/chat/homare.webp', width: 120, height: 100 },
    { name: 'ラビリスタ', path: '/img/chat/rabirisuta.webp', width: 120, height: 100 },
    { name: 'ネネカ', path: '/img/chat/neneka.webp', width: 120, height: 100 },
    { name: 'クリスティーナ', path: '/img/chat/christina.webp', width: 120, height: 100 },
    { name: 'クロエ', path: '/img/chat/kuroe.webp', width: 120, height: 100 },
    { name: 'チエル', path: '/img/chat/chieru.webp', width: 120, height: 100 },
    { name: 'ユニ', path: '/img/chat/yuni.webp', width: 120, height: 100 },
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

export default Chat
