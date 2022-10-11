import type { NextPage } from "next";
import Image from "next/future/image";
import { GetServerSideProps } from "next";

export const stickers = [
  {
    name: "どうしてこんなことに…?",
    path: "/img/alone/day1.webp",
    width: 800,
    height: 680,
  },
  {
    name: "ごきげんようが言えなくて",
    path: "/img/alone/day2.webp",
    width: 800,
    height: 680,
  },
  {
    name: "やっちゃった!",
    path: "/img/alone/day3.webp",
    width: 800,
    height: 680,
  },
  {
    name: "ユニさんはこんな人",
    path: "/img/alone/day4.webp",
    width: 800,
    height: 680,
  },
  {
    name: "クロエさんはこんな人",
    path: "/img/alone/day5.webp",
    width: 800,
    height: 680,
  },
  {
    name: "チエルさんはこんな人",
    path: "/img/alone/day6.webp",
    width: 800,
    height: 680,
  },
  {
    name: "知的なユニさん",
    path: "/img/alone/day7.webp",
    width: 800,
    height: 680,
  },
  {
    name: "優しいクエロさん",
    path: "/img/alone/day8.webp",
    width: 800,
    height: 680,
  },
  {
    name: "憧れのチエルさん",
    path: "/img/alone/day9.webp",
    width: 800,
    height: 680,
  },
  {
    name: "特別講座の練習",
    path: "/img/alone/day10.webp",
    width: 800,
    height: 680,
  },
  {
    name: "いよいよ特別講座",
    path: "/img/alone/day11.webp",
    width: 800,
    height: 680,
  },
  {
    name: "さすがBB団の団長さん!",
    path: "/img/alone/day12.webp",
    width: 800,
    height: 680,
  },
  {
    name: "マンドラゴラでパニック",
    path: "/img/alone/day13.webp",
    width: 800,
    height: 680,
  },
  { name: "最終日", path: "/img/alone/day14.webp", width: 800, height: 680 },
];

const Alone: NextPage = () => {
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

export default Alone;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {}};
}
