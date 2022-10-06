import type { NextPage } from "next";
import Image from "next/future/image";

export const stickers = [
  {
    name: "間欠泉",
    path: "/img/rotation/geyser.webp",
    width: 100,
    height: 100,
  },
  {
    name: "トルネード",
    path: "/img/rotation/tornado.webp",
    width: 100,
    height: 100,
  },
  {
    name: "向かい風",
    path: "/img/rotation/headwind.webp",
    width: 100,
    height: 100,
  },
  {
    name: "バナナジャンプ",
    path: "/img/rotation/banana_jump.webp",
    width: 100,
    height: 100,
  },
  {
    name: "超低空飛行",
    path: "/img/rotation/ultra_low_flight.webp",
    width: 100,
    height: 100,
  },
  {
    name: "アユミのうちわ",
    path: "/img/rotation/ayumis_fan.webp",
    width: 100,
    height: 100,
  },
  { name: "ジズ", path: "/img/rotation/jizu.webp", width: 100, height: 100 },
  {
    name: "スーパーボール",
    path: "/img/rotation/super_ball.webp",
    width: 100,
    height: 100,
  },
  {
    name: "落雷",
    path: "/img/rotation/lightning_strike.webp",
    width: 100,
    height: 100,
  },
  {
    name: "バナナスライド",
    path: "/img/rotation/banana_slide.webp",
    width: 100,
    height: 100,
  },
  {
    name: "成層圏突入",
    path: "/img/rotation/atmospheric_entry.webp",
    width: 100,
    height: 100,
  },
  {
    name: "追い風",
    path: "/img/rotation/tailwind.webp",
    width: 100,
    height: 100,
  },
  {
    name: "ニノンの爆裂忍法",
    path: "/img/rotation/ninons_explosive_ninja.webp",
    width: 100,
    height: 100,
  },
  {
    name: "ロケット",
    path: "/img/rotation/rocket.webp",
    width: 100,
    height: 100,
  },
  {
    name: "腹すべり",
    path: "/img/rotation/belly_slide.webp",
    width: 100,
    height: 100,
  },
  {
    name: "メサルティム",
    path: "/img/rotation/mesarthim.webp",
    width: 100,
    height: 100,
  },
  {
    name: "アクダイカン像",
    path: "/img/rotation/akudaikan_statue.webp",
    width: 100,
    height: 100,
  },
  {
    name: "土砂降り雨",
    path: "/img/rotation/downpour.webp",
    width: 100,
    height: 100,
  },
  { name: "目回し", path: "/img/rotation/giddy.webp", width: 100, height: 100 },
  { name: "ドリル", path: "/img/rotation/drill.webp", width: 100, height: 100 },
];

const Rotation: NextPage = () => {
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

export default Rotation;
