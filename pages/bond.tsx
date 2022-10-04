import type { NextPage } from "next";

export const stickers = [
  {
    name: "大切なみなさまへ",
    path: "/img/bond/taisetsunaminasamahe.webp",
    width: 800,
    height: 680,
  },
  {
    name: "ペコリーヌさまのご挨拶",
    path: "/img/bond/pekoriinusamanogoaisatsu.webp",
    width: 800,
    height: 680,
  },
  {
    name: "キャルさまの真心",
    path: "/img/bond/kyarusamanomagokoro.webp",
    width: 800,
    height: 680,
  },
  {
    name: "わたくしの、主さま",
    path: "/img/bond/watakushinoarujisama.webp",
    width: 800,
    height: 680,
  },
  {
    name: "あの笑顔はいつも、胸の中に",
    path: "/img/bond/anoegaohaitsumomunenonakani.webp",
    width: 800,
    height: 680,
  },
  {
    name: "懐かしの場所へ",
    path: "/img/bond/natsukashinobashohe.webp",
    width: 800,
    height: 680,
  },
  {
    name: "信じられません…！",
    path: "/img/bond/shinjiraremasen.webp",
    width: 800,
    height: 680,
  },
  {
    name: "光明と、惑いと",
    path: "/img/bond/koumyoutotomadoito.webp",
    width: 800,
    height: 680,
  },
  {
    name: "心の安らぎ、掴むべき未来",
    path: "/img/bond/kokoronoyasuragitsukamubekimirai.webp",
    width: 800,
    height: 680,
  },
  {
    name: "ありがとう、では足りません",
    path: "/img/bond/arigatoudehatarimasen.webp",
    width: 800,
    height: 680,
  },
  {
    name: "ただいま、わたくしの食卓",
    path: "/img/bond/tadaimawatakushinoshokutaku.webp",
    width: 800,
    height: 680,
  },
];

const Bond: NextPage = () => {
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

export default Bond;
