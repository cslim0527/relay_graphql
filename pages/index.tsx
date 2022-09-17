import type { NextPage } from "next";

import { Suspense, useEffect, useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import relayEnvironment from "../utils/relayEnvironment";

import Head from "next/head";
import RepoList from "../components/RepoList";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";
import CenteredText from "../components/CenteredText";

const AppQuery = graphql`
  query pages_index_AppRepositoryListQuery($keyword: String!) {
    ...RepoList_list @arguments(keyword: $keyword)
  }
`;

const Home: NextPage = () => {
  const [queryRef, setQueryRef] = useState<any>(undefined);
  const [keyword, setKeyword] = useState<string>("");
  const initialQueryRef = useLazyLoadQuery(AppQuery, { keyword });

  const handleSearchRepo = async (keyword: string) => {
    setKeyword(keyword);
  };

  useEffect(() => {
    if (!initialQueryRef) {
      return;
    }

    setQueryRef(initialQueryRef);
  }, [initialQueryRef]);

  return (
    <>
      <Head>
        <title>그린랩스</title>
        <meta name="description" content="Greenlabs Front-End Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <SearchBox handler={handleSearchRepo} />
        {keyword === "" ? (
          <CenteredText>레포지터리 이름으로 검색하세요 🔍</CenteredText>
        ) : (
          <Suspense fallback={<CenteredText>...로딩중...</CenteredText>}>
            <RepoList initialQueryRef={queryRef} />
          </Suspense>
        )}
      </Container>
    </>
  );
};

export default Home;
