import { type NextPage } from "next";
import Head from "next/head";

import { Layout } from "../features/Layout";
import Link from "next/link";

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peer Up BCN Poblenou</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to your Community DAO{" "}
            <span className="text-accent">BCN Poblenou</span>
          </h1>
        </div>
        <div className="flex justify-between px-4 py-16">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://placeholder.pics/svg/300"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Decisions</h2>
              <p>Vote now for existing proposals in our Community DAO</p>
              <div className="card-actions">
                <Link className="btn-accent btn" href="/landingVoting">See Votings</Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://placeholder.pics/svg/300"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Market</h2>
              <p>Lend out unused tools or Borrow tools you need!</p>
              <div className="card-actions">
                <Link className="btn-inactive btn" href="/market/0">
                  Inactive ...
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://placeholder.pics/svg/300"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">

              <h2 className="card-title">Petitions</h2>
              <p>View and vote for existing Petitions or create a new one!</p>
              <div className="card-actions">
                <button className="btn-inactive btn">Coming soon...</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Landing;
