import type { NextPage } from "next";
import { AppRepositoryNameQueryState } from "../types";
import { pages_index_AppRepositoryNameQuery } from "../__generated__/pages_index_AppRepositoryNameQuery.graphql";

import { useEffect, useState } from "react";
import { useQueryLoader } from "react-relay";
import { graphql, fetchQuery } from "relay-runtime";
import relayEnvironment from "../utils/relayEnvironment";

import Head from "next/head";
import RepoList from "../components/RepoList";
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";

const RepositoryNameQuery = graphql`
  query pages_index_AppRepositoryNameQuery($keyword: String!) {
    search(query: $keyword, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            id
            name
            stargazerCount
            url
            viewerHasStarred
            shortDescriptionHTML
          }
        }
      }
    }
  }
`;

const edgeFormatter = (data: any) => {
  return data?.map((item: any) => item?.node);
};

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<AppRepositoryNameQueryState>(null);
  const [queryRef, loadQuery, disposeQuery] =
    useQueryLoader(RepositoryNameQuery);

  console.log("[queryRef]", queryRef);

  useEffect(() => {}, []);

  const handleSearchRepo = async (keyword: string) => {
    setLoading(true);
    const response = await fetchQuery<pages_index_AppRepositoryNameQuery>(
      relayEnvironment,
      RepositoryNameQuery,
      {
        keyword,
      }
    ).toPromise();

    loadQuery({ keyword }, { fetchPolicy: "store-or-network" });
    setLoading(false);
    setList(edgeFormatter(response?.search.edges));
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
        <RepoList list={list} isLoading={isLoading} />
      </Container>
    </>
  );
};

export default Home;
