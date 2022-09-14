import type { NextPage } from "next";

import Head from "next/head";
import RepoList from "../components/RepoList";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";
import { useState } from "react";

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const handleSearchRepo = (keyword: string) => {
    console.log("[handleSearchRepo]", keyword);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <Head>
        <title>그린랩스</title>
        <meta name="description" content="Greenlabs Front-End Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <SearchBox handler={handleSearchRepo} isLoading={isLoading} />
        <RepoList list={[]} isLoading={isLoading} />
      </Container>
    </>
  );
};

export default Home;
