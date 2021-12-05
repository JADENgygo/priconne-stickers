import type { NextPage } from 'next'
import Image from 'next/image'

const Valentine: NextPage = () => {
  const stickers = [
    { name: '普通のカカオ', path: '/img/valentine/ordinary_cacao.webp', width: 50, height: 46 },
    { name: '完熟カカオ', path: '/img/valentine/ripe_cacao.webp', width: 62, height: 60 },
    { name: '極上カカオ', path: '/img/valentine/best_cacao.webp', width: 65, height: 67 },
  ];

  return (
    <div className="container">
      <div className="row gy-3 row-cols-2 row-cols-sm-3 text-center">
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

export default Valentine
