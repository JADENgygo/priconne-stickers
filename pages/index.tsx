import type { NextPage } from "next";
import Link from "next/link";
import { pageLinks } from "../components/header";
import { useTheme } from "../lib/useTheme";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <div className="container text-center">
      {pageLinks.map((value) => (
        <div className="mb-3" key={value.path}>
          <Link href={value.path + "?theme=" + theme}>
            <a className={`link ${theme === "light" ? "link-dark" : "link-light"}`}>{value.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
