import type { NextPage } from "next";
import Image from "next/future/image";
import { GetServerSideProps } from "next";

export const stickers = [
  { name: "アオイ", path: "/img/album/aoi.webp", width: 512, height: 383 },
  {
    name: "アオイ (作業服)",
    path: "/img/album/aoi_work_clothes.webp",
    width: 512,
    height: 383,
  },
  {
    name: "アオイ (編入生)",
    path: "/img/album/aoi_hennyusei.webp",
    width: 512,
    height: 383,
  },
  { name: "アカリ", path: "/img/album/akari.webp", width: 512, height: 383 },
  {
    name: "アカリ (エンジェル)",
    path: "/img/album/akari_angel.webp",
    width: 512,
    height: 383,
  },
  { name: "アキノ", path: "/img/album/akino.webp", width: 512, height: 383 },
  { name: "アヤネ", path: "/img/album/ayane.webp", width: 512, height: 383 },
  { name: "アユミ", path: "/img/album/ayumi.webp", width: 512, height: 383 },
  {
    name: "アユミ (ワンダー)",
    path: "/img/album/ayumi_wonder.webp",
    width: 512,
    height: 383,
  },
  { name: "アリサ", path: "/img/album/arisa.webp", width: 512, height: 383 },
  { name: "アン", path: "/img/album/an.webp", width: 512, height: 383 },
  { name: "アンナ", path: "/img/album/anna.webp", width: 512, height: 383 },
  { name: "イオ", path: "/img/album/io.webp", width: 512, height: 383 },
  {
    name: "イオ (ノワール)",
    path: "/img/album/io_noir.webp",
    width: 512,
    height: 383,
  },
  { name: "イノリ", path: "/img/album/inori.webp", width: 512, height: 383 },
  {
    name: "イノリ (タイムトラベル)",
    path: "/img/album/inori_timetravel.webp",
    width: 512,
    height: 383,
  },
  { name: "イリヤ", path: "/img/album/iriya.webp", width: 512, height: 383 },
  { name: "エリコ", path: "/img/album/eriko.webp", width: 512, height: 383 },
  { name: "カオリ", path: "/img/album/kaori.webp", width: 512, height: 383 },
  { name: "カスミ", path: "/img/album/kasumi.webp", width: 512, height: 383 },
  {
    name: "カスミ (マジカル)",
    path: "/img/album/kasumi_magical.webp",
    width: 512,
    height: 383,
  },
  { name: "カヤ", path: "/img/album/kaya.webp", width: 512, height: 383 },
  {
    name: "カヤ (タイムトラベル)",
    path: "/img/album/kaya_timetravel.webp",
    width: 512,
    height: 383,
  },
  { name: "カリン", path: "/img/album/karin.webp", width: 512, height: 383 },
  { name: "キャル", path: "/img/album/kyaru.webp", width: 512, height: 383 },
  {
    name: "キャル (プリンセス)",
    path: "/img/album/kyaru_princess.webp",
    width: 512,
    height: 383,
  },
  { name: "キョウカ", path: "/img/album/kyouka.webp", width: 512, height: 383 },
  { name: "クウカ", path: "/img/album/kuuka.webp", width: 512, height: 383 },
  {
    name: "クウカ (オーエド)",
    path: "/img/album/kuuka_oedo.webp",
    width: 512,
    height: 383,
  },
  {
    name: "クウカ (ノワール)",
    path: "/img/album/kuuka_noir.webp",
    width: 512,
    height: 383,
  },
  {
    name: "クリスティーナ",
    path: "/img/album/kurisu.webp",
    width: 512,
    height: 383,
  },
  { name: "クルミ", path: "/img/album/kurumi.webp", width: 512, height: 383 },
  {
    name: "クルミ (ステージ)",
    path: "/img/album/kurumi_stage.webp",
    width: 512,
    height: 383,
  },
  { name: "グレア", path: "/img/album/gurea.webp", width: 512, height: 383 },
  {
    name: "クレジッタ",
    path: "/img/album/kurejitta.webp",
    width: 512,
    height: 383,
  },
  { name: "クロエ", path: "/img/album/kuroe.webp", width: 512, height: 383 },
  {
    name: "クロエ (聖学祭)",
    path: "/img/album/kuroe_seigakusai.webp",
    width: 512,
    height: 383,
  },
  {
    name: "コッコロ",
    path: "/img/album/kokkoro.webp",
    width: 512,
    height: 383,
  },
  {
    name: "コッコロ (プリンセス)",
    path: "/img/album/kokkoro_princess.webp",
    width: 512,
    height: 383,
  },
  { name: "サレン", path: "/img/album/saren.webp", width: 512, height: 383 },
  { name: "ジータ", path: "/img/album/jita.webp", width: 512, height: 383 },
  { name: "シェフィ", path: "/img/album/sheffi.webp", width: 512, height: 383 },
  { name: "シオリ", path: "/img/album/shiori.webp", width: 512, height: 383 },
  {
    name: "シオリ (マジカル)",
    path: "/img/album/shiori_magical.webp",
    width: 512,
    height: 383,
  },
  { name: "シズル", path: "/img/album/shizuru.webp", width: 512, height: 383 },
  { name: "シノブ", path: "/img/album/shinobu.webp", width: 512, height: 383 },
  { name: "ジュン", path: "/img/album/jun.webp", width: 512, height: 383 },
  { name: "スズナ", path: "/img/album/suzuna.webp", width: 512, height: 383 },
  { name: "スズメ", path: "/img/album/suzume.webp", width: 512, height: 383 },
  { name: "タマキ", path: "/img/album/tamaki.webp", width: 512, height: 383 },
  {
    name: "タマキ (作業服)",
    path: "/img/album/tamaki_work_clothes.webp",
    width: 512,
    height: 383,
  },
  { name: "チエル", path: "/img/album/chieru.webp", width: 512, height: 383 },
  {
    name: "チエル (聖学祭)",
    path: "/img/album/chieru_seigakusai.webp",
    width: 512,
    height: 383,
  },
  { name: "チカ", path: "/img/album/chika.webp", width: 512, height: 383 },
  { name: "ツムギ", path: "/img/album/tsumugi.webp", width: 512, height: 383 },
  { name: "トモ", path: "/img/album/tomo.webp", width: 512, height: 383 },
  {
    name: "トモ (マジカル)",
    path: "/img/album/tomo_magical.webp",
    width: 512,
    height: 383,
  },
  { name: "ナナカ", path: "/img/album/nanaka.webp", width: 512, height: 383 },
  { name: "ニノン", path: "/img/album/ninon.webp", width: 512, height: 383 },
  {
    name: "ニノン (オーエド)",
    path: "/img/album/ninon_oedo.webp",
    width: 512,
    height: 383,
  },
  { name: "ネネカ", path: "/img/album/neneka.webp", width: 512, height: 383 },
  { name: "ノゾミ", path: "/img/album/nozomi.webp", width: 512, height: 383 },
  { name: "ハツネ", path: "/img/album/hatsune.webp", width: 512, height: 383 },
  {
    name: "ハツネ&シオリ",
    path: "/img/album/hatsune_and_shiori.webp",
    width: 512,
    height: 383,
  },
  { name: "ヒヨリ", path: "/img/album/hiyori.webp", width: 512, height: 383 },
  {
    name: "ヒヨリ (プリンセス)",
    path: "/img/album/hiyori_princess.webp",
    width: 512,
    height: 383,
  },
  { name: "ペコリーヌ", path: "/img/album/peko.webp", width: 512, height: 383 },
  {
    name: "ペコリーヌ (プリンセス)",
    path: "/img/album/peko_princess.webp",
    width: 512,
    height: 383,
  },
  { name: "ホマレ", path: "/img/album/homare.webp", width: 512, height: 383 },
  { name: "マコト", path: "/img/album/makoto.webp", width: 512, height: 383 },
  {
    name: "マコト (シンデレラ)",
    path: "/img/album/makoto_cinderella.webp",
    width: 512,
    height: 383,
  },
  { name: "マツリ", path: "/img/album/matsuri.webp", width: 512, height: 383 },
  { name: "マヒル", path: "/img/album/mahiru.webp", width: 512, height: 383 },
  {
    name: "マヒル (レンジャー)",
    path: "/img/album/mahiru_ranger.webp",
    width: 512,
    height: 383,
  },
  { name: "マホ", path: "/img/album/maho.webp", width: 512, height: 383 },
  {
    name: "マホ (シンデレラ)",
    path: "/img/album/maho_cinderella.webp",
    width: 512,
    height: 383,
  },
  { name: "ミサキ", path: "/img/album/misaki.webp", width: 512, height: 383 },
  {
    name: "ミサキ (ステージ)",
    path: "/img/album/misaki_stage.webp",
    width: 512,
    height: 383,
  },
  { name: "ミサト", path: "/img/album/misato.webp", width: 512, height: 383 },
  { name: "ミソギ", path: "/img/album/misogi.webp", width: 512, height: 383 },
  {
    name: "ミソギ&ミミ&キョウカ",
    path: "/img/album/misogi_mimi_kyouka.webp",
    width: 512,
    height: 383,
  },
  { name: "ミツキ", path: "/img/album/mitsuki.webp", width: 512, height: 383 },
  {
    name: "ミツキ (オーエド)",
    path: "/img/album/mitsuki_oedo.webp",
    width: 512,
    height: 383,
  },
  { name: "ミフユ", path: "/img/album/mihuyu.webp", width: 512, height: 383 },
  {
    name: "ミフユ (作業服)",
    path: "/img/album/mihuyu_work_clothes.webp",
    width: 512,
    height: 383,
  },
  { name: "ミミ", path: "/img/album/mimi.webp", width: 512, height: 383 },
  { name: "ミヤコ", path: "/img/album/miyako.webp", width: 512, height: 383 },
  { name: "ムイミ", path: "/img/album/muimi.webp", width: 512, height: 383 },
  { name: "モニカ", path: "/img/album/monika.webp", width: 512, height: 383 },
  {
    name: "モニカ (マジカル)",
    path: "/img/album/monika_magical.webp",
    width: 512,
    height: 383,
  },
  { name: "ユイ", path: "/img/album/yui.webp", width: 512, height: 383 },
  {
    name: "ユイ (プリンセス)",
    path: "/img/album/yui_princess.webp",
    width: 512,
    height: 383,
  },
  { name: "ユカリ", path: "/img/album/yukari.webp", width: 512, height: 383 },
  { name: "ユキ", path: "/img/album/yuki.webp", width: 512, height: 383 },
  {
    name: "ユキ (オーエド)",
    path: "/img/album/yuki_oedo.webp",
    width: 512,
    height: 383,
  },
  { name: "ユニ", path: "/img/album/yuni.webp", width: 512, height: 383 },
  {
    name: "ユニ (聖学祭)",
    path: "/img/album/yuni_seigakusai.webp",
    width: 512,
    height: 383,
  },
  { name: "ヨリ", path: "/img/album/yori.webp", width: 512, height: 383 },
  {
    name: "ヨリ (エンジェル)",
    path: "/img/album/yori_angel.webp",
    width: 512,
    height: 383,
  },
  {
    name: "ラビリスタ",
    path: "/img/album/rabirisuta.webp",
    width: 512,
    height: 383,
  },
  { name: "ランファ", path: "/img/album/ranpha.webp", width: 512, height: 383 },
  { name: "リノ", path: "/img/album/rino.webp", width: 512, height: 383 },
  {
    name: "リノ (ワンダー)",
    path: "/img/album/rino_wonder.webp",
    width: 512,
    height: 383,
  },
  { name: "リマ", path: "/img/album/rima.webp", width: 512, height: 383 },
  {
    name: "リマ (シンデレラ)",
    path: "/img/album/rima_cinderella.webp",
    width: 512,
    height: 383,
  },
  { name: "リン", path: "/img/album/rin.webp", width: 512, height: 383 },
  {
    name: "リン (レンジャー)",
    path: "/img/album/rin_ranger.webp",
    width: 512,
    height: 383,
  },
  { name: "ルゥ", path: "/img/album/ruu.webp", width: 512, height: 383 },
  { name: "ルカ", path: "/img/album/ruka.webp", width: 512, height: 383 },
  { name: "ルナ", path: "/img/album/runa.webp", width: 512, height: 383 },
  { name: "レイ", path: "/img/album/rei.webp", width: 512, height: 383 },
  {
    name: "レイ (プリンセス)",
    path: "/img/album/rei_princess.webp",
    width: 512,
    height: 383,
  },
];
const Album: NextPage = () => {
  return (
    <div className="container">
      <div className="row gy-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 text-center">
        {stickers.map((value) => (
          <div className="col" key={value.path}>
            <div className="mb-1">{value.name}</div>
            <Image
              className="img-fluid"
              src={value.path}
              width={value.width}
              height={value.height}
              alt={value.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {}};
}
