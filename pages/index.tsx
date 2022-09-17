import type { NextPage } from "next";
import type { pages_index_AppRepositoryListQuery } from "../__generated__/pages_index_AppRepositoryListQuery.graphql";

import React, { useState } from "react";
import { QueryRenderer } from "react-relay";
import { graphql, fetchQuery } from "relay-runtime";
import relayEnvironment from "../utils/relayEnvironment";

import Head from "next/head";
import RepoList from "../components/RepoList";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";

const RepositoryListQuery = graphql`
  query pages_index_AppRepositoryListQuery($keyword: String!) {
    ...RepoList_list @arguments(keyword: $keyword)
  }
`;

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState<string>("123");
  const handleSearchRepo = async (keyword: string) => {
    setKeyword(keyword);
  };

  return (
    <>
      <Head>
        <title>그린랩스</title>
        <meta name="description" content="Greenlabs Front-End Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <SearchBox handler={handleSearchRepo} />
        <QueryRenderer<pages_index_AppRepositoryListQuery>
          environment={relayEnvironment}
          query={RepositoryListQuery}
          variables={{
            keyword,
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (!props) {
              return <div>..화면을 로딩중..</div>;
            }
            return (
              <>
                <RepoList list={props} />
              </>
            );
          }}
        />
      </Container>
    </>
  );
};

export default Home;
