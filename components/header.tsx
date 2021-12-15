import { useRouter } from 'next/router'
import Link from 'next/link'

export const pageLinks = [
  { name: 'ギルドハウス', path: '/guild' },
  { name: 'クランチャット', path: '/chat' },
  { name: '思い出アルバム', path: '/album' },
  { name: 'クランバトル', path: '/boss' },
  { name: 'お兄ちゃん争奪！', path: '/valentine' },
  { name: 'クウカ大回転', path: '/rotation' },
  { name: 'しりとりドラゴンズ', path: '/shiritori' },
  { name: 'チーズお守り大作戦！', path: '/cheese' },
  { name: '森の臆病者と聖なる学舎の異端児', path: '/alone' },
  { name: '授けの財団と聖なる学舎の異端児', path: '/angel' },
  { name: '絆、つないで。こころ、結んで。', path: '/bond' },
  { name: 'エンドレスサマープロデュース', path: '/produce' },
];

export const Header = () => {
  const router = useRouter();
  return (
    <div>
      <div className="text-center bg-dark pt-3 pb-3 fs-3">
        <div className="container">
          <Link href="/"><a className="text-white title">プリコネスタンプ</a></Link>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        {
          router.pathname !== '/' && (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/"><a className="link link-dark">トップ</a></Link></li>
                <li className="breadcrumb-item active">{ pageLinks.find(value => value.path === router.pathname)?.name }</li>
              </ol>
            </nav>
          )
        }
      </div>
    </div>
  );
};
