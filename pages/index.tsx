import type { NextPage } from "next";
import Link from "next/link";
import { pageLinks } from "../components/header";
import { GetServerSideProps } from "next";

const Home: NextPage = () => {
  return (
    <div className="container text-center">
      {pageLinks.map((value) => (
        <div className="mb-3" key={value.path}>
          <Link href={value.path}>
            <a className="link">{value.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {}};
}
