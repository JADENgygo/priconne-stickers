import type { NextPage } from "next";

export const stickers = [
  {
    name: "1日目",
    path: "/img/produce/endless_summer_produce0.webp",
    width: 600,
    height: 680,
  },
  {
    name: "2日目",
    path: "/img/produce/endless_summer_produce1.webp",
    width: 600,
    height: 680,
  },
  {
    name: "12日目",
    path: "/img/produce/endless_summer_produce2.webp",
    width: 600,
    height: 680,
  },
  {
    name: "17日目",
    path: "/img/produce/endless_summer_produce3.webp",
    width: 600,
    height: 680,
  },
  {
    name: "23日目",
    path: "/img/produce/endless_summer_produce4.webp",
    width: 600,
    height: 680,
  },
  {
    name: "25日目",
    path: "/img/produce/endless_summer_produce5.webp",
    width: 600,
    height: 680,
  },
  {
    name: "27日目",
    path: "/img/produce/endless_summer_produce6.webp",
    width: 600,
    height: 680,
  },
  {
    name: "31日目",
    path: "/img/produce/endless_summer_produce7.webp",
    width: 600,
    height: 680,
  },
  {
    name: "シズルの思い出",
    path: "/img/produce/endless_summer_produce8.webp",
    width: 600,
    height: 680,
  },
  {
    name: "エリコの思い出",
    path: "/img/produce/endless_summer_produce9.webp",
    width: 600,
    height: 680,
  },
];

const Produce: NextPage = () => {
  return (
    <div className="container">
      <div className="row gy-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 text-center">
        {stickers.map((value) => (
          <div className="col" key={value.path}>
            <div className="mb-1">{value.name}</div>
            <img
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

export default Produce;
