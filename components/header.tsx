import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "../lib/useTheme";

export const pageLinks = [
  { name: "ギルドハウス", path: "/guild" },
  { name: "クランチャット", path: "/chat" },
  { name: "思い出アルバム", path: "/album" },
  { name: "クランバトル", path: "/boss" },
  { name: "お兄ちゃん争奪！", path: "/valentine" },
  { name: "クウカ大回転", path: "/rotation" },
  { name: "しりとりドラゴンズ", path: "/shiritori" },
  { name: "チーズお守り大作戦！", path: "/cheese" },
  { name: "森の臆病者と聖なる学舎の異端児", path: "/alone" },
  { name: "授けの財団と聖なる学舎の異端児", path: "/angel" },
  { name: "絆、つないで。こころ、結んで。", path: "/bond" },
  { name: "エンドレスサマープロデュース", path: "/produce" },
];

export const Header = () => {
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    const classes = document.body.classList;
    if (theme === "light") {
      classes.remove("bg-dark");
      classes.remove("text-light");
    }
    else {
      classes.add("bg-dark");
      classes.add("text-light");
    }
  }, [theme]);

  const changeMode = () => {
    router.push(router.pathname + `?theme=${theme === "light" ? "dark" : "light"}`);
  };

  return (
    <div className="container">
      <div className="bgsecondary pt-1">
        <div className="text-end mb-3">ダークモード: <span className="theme" onClick={changeMode}>{ theme === "light" ? "オフ" : "オン" }</span></div>
        <div className="text-center fs-3">
          <Link href={"/?theme=" + theme}>
            <a className={`title ${theme === "light" ? "link-dark" : "link-light"}`}>プリコネスタンプ</a>
          </Link>
        </div>
      </div>
      <div className="mt-5 mb-5">
        {pageLinks.map((value) => value.path).includes(router.pathname) && (
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href={"/?theme=" + theme}>
                  <a className={`link ${theme === "light" ? "link-dark" : "link-light"}`}>トップ</a>
                </Link>
              </li>
              <li className={`breadcrumb-item active ${theme === "light" ? "" : "text-white-50"}`}>
                {
                  pageLinks.find((value) => value.path === router.pathname)
                    ?.name
                }
              </li>
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};
