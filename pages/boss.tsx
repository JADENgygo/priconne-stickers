import type { NextPage } from 'next'
import Image from 'next/image'

const Boss: NextPage = () => {
  const stickers = [
    { name: 'ゴブリングレート', path: '/img/boss/goblin_great.webp', width: 355, height: 268 },
    { name: 'ライライ', path: '/img/boss/rairai.webp', width: 229, height: 308 },
    { name: 'レイスロード', path: '/img/boss/wraith_lord.webp', width: 335, height: 313 },
    { name: 'ダークガーゴイル', path: '/img/boss/dark_gargoyle.webp', width: 316, height: 328 },
    { name: 'オークチーフ', path: '/img/boss/orc_chief.webp', width: 227, height: 236 },
    { name: 'オブシダンワイバーン', path: '/img/boss/obsidian_wyvern.webp', width: 303, height: 295 },
    { name: 'ワイバーン', path: '/img/boss/wyvern.webp', width: 287, height: 256 },
    { name: 'ワイルドグリフォン', path: '/img/boss/wild_griffon.webp', width: 299, height: 313 },
    { name: 'スカイワルキューレ', path: '/img/boss/sky_valkyrie.webp', width: 216, height: 314 },
    { name: 'マスターセンリ', path: '/img/boss/master_senri.webp', width: 317, height: 228 },
    { name: 'ランドスロース', path: '/img/boss/land_sloth.webp', width: 250, height: 214 },
    { name: 'ニードルクリーパー', path: '/img/boss/needle_creeper.webp', width: 399, height: 286 },
    { name: 'トライロッカー', path: '/img/boss/tri_rocker.webp', width: 297, height: 299 },
    { name: 'ライデン', path: '/img/boss/raiden.webp', width: 346, height: 277 },
    { name: 'ネプテリオン', path: '/img/boss/neptalion.webp', width: 285, height: 291 },
    { name: 'バリジスク', path: '/img/boss/basilisk.webp', width: 186, height: 252 },
    { name: 'ティタノタートル', path: '/img/boss/titanoturtle.webp', width: 245, height: 241 },
    { name: 'スピリットホーン', path: '/img/boss/spirit_horn.webp', width: 307, height: 258 },
    { name: 'シードレイク', path: '/img/boss/sea_drake.webp', width: 395, height: 286 },
    { name: 'ムーバ', path: '/img/boss/muba.webp', width: 233, height: 239 },
    { name: 'ソードコブラ', path: '/img/boss/sword_cobra.webp', width: 377, height: 302 },
    { name: 'アクアリオス', path: '/img/boss/aquarius.webp', width: 266, height: 345 },
    { name: 'メサルティム', path: '/img/boss/mesarthim.webp', width: 255, height: 243 },
    { name: 'ミノタウロス', path: '/img/boss/minotaur.webp', width: 428, height: 303 },
    { name: 'ツインピッグス', path: '/img/boss/twin_pigs.webp', width: 506, height: 266 },
    { name: 'カルキノス', path: '/img/boss/karkinos.webp', width: 375, height: 321 },
    { name: 'オルレオン', path: '/img/boss/orleon.webp', width: 322, height: 292 },
    { name: 'メデューサ', path: '/img/boss/medusa.webp', width: 281, height: 306 },
    { name: 'グラットン', path: '/img/boss/guratton.webp', width: 319, height: 281 },
    { name: 'レサトパルト', path: '/img/boss/lesath_pult.webp', width: 338, height: 258 },
    { name: 'サジタリウス', path: '/img/boss/sagittarius.webp', width: 423, height: 361 },
    { name: 'アルゲティ', path: '/img/boss/argeti.webp', width: 416, height: 348 },
  ];
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

export default Boss
