import type { NextPage } from "next";
import Image from "next/future/image";
import React from "react";

export const stickers = [
  {
    name: "美食殿",
    images: [
      { path: "/img/guild/peko.webp", width: 308, height: 408 },
      { path: "/img/guild/kokkoro.webp", width: 308, height: 408 },
      { path: "/img/guild/kyaru.webp", width: 308, height: 431 },
      { path: "/img/guild/sheffi.webp", width: 308, height: 408 },
    ],
  },
  {
    name: "トゥインクルウィッシュ",
    images: [
      { path: "/img/guild/hiyori.webp", width: 308, height: 407 },
      { path: "/img/guild/yui.webp", width: 309, height: 431 },
      { path: "/img/guild/rei.webp", width: 308, height: 431 },
    ],
  },
  {
    name: "ラビリンス",
    images: [
      { path: "/img/guild/rabirisuta.webp", width: 308, height: 407 },
      { path: "/img/guild/shizuru.webp", width: 308, height: 407 },
      { path: "/img/guild/rino.webp", width: 309, height: 408 },
    ],
  },
  {
    name: "カルミナ",
    images: [
      { path: "/img/guild/nozomi.webp", width: 308, height: 407 },
      { path: "/img/guild/chika.webp", width: 309, height: 408 },
      { path: "/img/guild/tsumugi.webp", width: 309, height: 408 },
    ],
  },
  {
    name: "リトルリリカル",
    images: [
      { path: "/img/guild/mimi.webp", width: 308, height: 407 },
      { path: "/img/guild/misogi.webp", width: 309, height: 408 },
      { path: "/img/guild/kyouka.webp", width: 308, height: 380 },
    ],
  },
  {
    name: "フォレスティエ",
    images: [
      { path: "/img/guild/misato.webp", width: 308, height: 407 },
      { path: "/img/guild/hatsune.webp", width: 308, height: 408 },
      { path: "/img/guild/aoi.webp", width: 308, height: 408 },
    ],
  },
  {
    name: "ディアボロス",
    images: [
      { path: "/img/guild/iriya.webp", width: 308, height: 431 },
      { path: "/img/guild/yori.webp", width: 308, height: 408 },
      { path: "/img/guild/akari.webp", width: 308, height: 381 },
      { path: "/img/guild/shinobu.webp", width: 309, height: 408 },
      { path: "/img/guild/miyako.webp", width: 308, height: 407 },
    ],
  },
  {
    name: "NIGHTMARE",
    images: [
      { path: "/img/guild/jun.webp", width: 309, height: 408 },
      { path: "/img/guild/kurisu.webp", width: 308, height: 408 },
      { path: "/img/guild/tomo.webp", width: 309, height: 407 },
      { path: "/img/guild/matsuri.webp", width: 308, height: 408 },
    ],
  },
  {
    name: "サレンディア救護院",
    images: [
      { path: "/img/guild/saren.webp", width: 308, height: 408 },
      { path: "/img/guild/suzume.webp", width: 308, height: 407 },
      { path: "/img/guild/ayane.webp", width: 309, height: 381 },
      { path: "/img/guild/kurumi.webp", width: 309, height: 407 },
    ],
  },
  {
    name: "カォン",
    images: [
      { path: "/img/guild/maho.webp", width: 308, height: 431 },
      { path: "/img/guild/makoto.webp", width: 309, height: 408 },
      { path: "/img/guild/kaori.webp", width: 308, height: 408 },
      { path: "/img/guild/kasumi.webp", width: 308, height: 408 },
    ],
  },
  {
    name: "エリザベスパーク",
    images: [
      { path: "/img/guild/mahiru.webp", width: 308, height: 431 },
      { path: "/img/guild/rima.webp", width: 309, height: 357 },
      { path: "/img/guild/shiori.webp", width: 308, height: 381 },
      { path: "/img/guild/rin.webp", width: 309, height: 408 },
    ],
  },
  {
    name: "メルクリウス財団",
    images: [
      { path: "/img/guild/akino.webp", width: 309, height: 408 },
      { path: "/img/guild/mihuyu.webp", width: 309, height: 407 },
      { path: "/img/guild/yukari.webp", width: 308, height: 408 },
      { path: "/img/guild/tamaki.webp", width: 308, height: 408 },
    ],
  },
  {
    name: "トワイライトキャラバン",
    images: [
      { path: "/img/guild/ruka.webp", width: 308, height: 410 },
      { path: "/img/guild/mitsuki.webp", width: 308, height: 408 },
      { path: "/img/guild/eriko.webp", width: 309, height: 408 },
      { path: "/img/guild/nanaka.webp", width: 309, height: 381 },
      { path: "/img/guild/anna.webp", width: 309, height: 408 },
    ],
  },
  {
    name: "ルーセント学院",
    images: [
      { path: "/img/guild/io.webp", width: 308, height: 407 },
      { path: "/img/guild/misaki.webp", width: 308, height: 407 },
      { path: "/img/guild/suzuna.webp", width: 309, height: 381 },
    ],
  },
  {
    name: "ヴァイスフリューゲルランドソル支部",
    images: [
      { path: "/img/guild/monika.webp", width: 308, height: 431 },
      { path: "/img/guild/yuki.webp", width: 308, height: 408 },
      { path: "/img/guild/ninon.webp", width: 309, height: 431 },
      { path: "/img/guild/kuuka.webp", width: 309, height: 408 },
      { path: "/img/guild/ayumi.webp", width: 309, height: 408 },
    ],
  },
  {
    name: "なかよし部",
    images: [
      { path: "/img/guild/yuni.webp", width: 308, height: 408 },
      { path: "/img/guild/kuroe.webp", width: 309, height: 407 },
      { path: "/img/guild/chieru.webp", width: 308, height: 408 },
    ],
  },
  {
    name: "ドラゴンズネスト",
    images: [
      { path: "/img/guild/homare.webp", width: 308, height: 431 },
      { path: "/img/guild/kaya.webp", width: 308, height: 408 },
      { path: "/img/guild/inori.webp", width: 309, height: 408 },
    ],
  },
];

const Guild: NextPage = () => {
  return (
    <div className="container">
      <div className="row gy-3">
        {stickers.map((value) => (
          <React.Fragment key={value.name}>
            <div className="col-12">{value.name}</div>
            {value.images.map((v, i) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={v.path}>
                <Image
                  className="img-fluid"
                  src={v.path}
                  width={v.width}
                  height={v.height}
                  alt={value.name + i.toString()}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Guild;
