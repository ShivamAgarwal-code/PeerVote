import { type NextPage } from "next";
import Head from "next/head";
import { Layout } from "../features/Layout";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
