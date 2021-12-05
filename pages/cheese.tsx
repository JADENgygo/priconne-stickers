import type { NextPage } from 'next'
import Image from 'next/image'

const Cheese: NextPage = () => {
  const stickers = [
      { name: '観察開始!', path: '/img/cheese/start_observation.webp', width: 800, height: 680 },
      { name: '熟成', path: '/img/cheese/ripe.webp', width: 800, height: 680 },
      { name: '麗しき青', path: '/img/cheese/beautiful_blue.webp', width: 800, height: 680 },
      { name: '誘惑1', path: '/img/cheese/temptation1.webp', width: 800, height: 680 },
      { name: '誘惑2', path: '/img/cheese/temptation2.webp', width: 800, height: 680 },
      { name: '謎は謎のままに', path: '/img/cheese/mystery_remains_mystery.webp', width: 800, height: 680 },
      { name: '木槌', path: '/img/cheese/mallet.webp', width: 115, height: 155 },
      { name: '魔法の小槌', path: '/img/cheese/magical_mallet.webp', width: 117, height: 164 },
      { name: '打ちでの小槌', path: '/img/cheese/mallet_of_luck.webp', width: 119, height: 161 },
      { name: 'マヒルお手製ハリセン', path: '/img/cheese/harisen.webp', width: 142, height: 182 },
      { name: '駆け出しのチュウ', path: '/img/cheese/chuu.webp', width: 249, height: 213 },
      { name: '韋駄天のチュウタ', path: '/img/cheese/chuuta.webp', width: 245, height: 241 },
      { name: '草土竜のチュウヤ', path: '/img/cheese/chuuya.webp', width: 260, height: 215 },
      { name: 'ステゴロのチュウザ', path: '/img/cheese/chuuza.webp', width: 340, height: 273 },
      { name: '益荒男のチュウジ', path: '/img/cheese/masurao_chuuji.webp', width: 401, height: 293 },
      { name: '怒髪天のチュウジ', path: '/img/cheese/dohatsuten_chuuji.webp', width: 404, height: 292 },
      { name: '金庫破りのチュウサブロウ', path: '/img/cheese/chuusaburou.webp', width: 231, height: 228 },
      { name: 'ひよ子', path: '/img/cheese/chick.webp', width: 94, height: 129 },
  ]
  return (
    <div className="container">
      <div className="row gy-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 text-center">
      {
        stickers.map(value => (
          <div className="col" key={ value.path }>
            <div className="mb-1">{ value.name }</div>
            <Image src={ value.path } width={ value.width } height={ value.height } alt={ value.name } />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Cheese
