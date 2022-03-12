import type { NextPage } from "next";
import Image from "next/image";

export const stickers = [
  {
    name: "次世代へ継承すべき新言語",
    path: "/img/angel/chieru.webp",
    width: 800,
    height: 680,
  },
  {
    name: "私はとても作文が苦手です",
    path: "/img/angel/kuroe.webp",
    width: 800,
    height: 680,
  },
  {
    name: "飛翔へと至るまで",
    path: "/img/angel/yuni.webp",
    width: 800,
    height: 680,
  },
  {
    name: "閃きましたわ!",
    path: "/img/angel/akino.webp",
    width: 800,
    height: 680,
  },
  {
    name: "組み立てにゃ!",
    path: "/img/angel/tamaki.webp",
    width: 800,
    height: 680,
  },
  {
    name: "私こんなの書いたっけ…?",
    path: "/img/angel/yukari.webp",
    width: 800,
    height: 680,
  },
  {
    name: "このままにしておけないわ",
    path: "/img/angel/mihuyu.webp",
    width: 800,
    height: 680,
  },
  {
    name: "特別講座を終えて",
    path: "/img/angel/mercurius.webp",
    width: 800,
    height: 680,
  },
  {
    name: "考察",
    path: "/img/angel/nakayoshix1.webp",
    width: 800,
    height: 680,
  },
  {
    name: "試作機完成",
    path: "/img/angel/nakayoshix2.webp",
    width: 800,
    height: 680,
  },
  {
    name: "最終工程",
    path: "/img/angel/nakayoshix3.webp",
    width: 800,
    height: 680,
  },
];

const Angel: NextPage = () => {
  return (
    <div className="container">
      <div className="row gy-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 text-center">
        {stickers.map((value) => (
          <div className="col" key={value.path}>
            <div className="mb-1">{value.name}</div>
            <Image
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

export default Angel;
