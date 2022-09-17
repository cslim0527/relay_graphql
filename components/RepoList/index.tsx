import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";
import RepoItem from "../RepoItem";
import { createPaginationContainer, graphql } from "react-relay";
import { getPaginationVariables } from "relay-runtime";

const SearchedRepoListFragment = {
  list: graphql`
    fragment RepoList_list on Query
    @argumentDefinitions(
      keyword: { type: "String!" }
      first: { type: "Int", defaultValue: 20 }
    ) {
      search(query: $keyword, type: REPOSITORY, first: $first)
        @connection(key: "SearchRepoList_list__search") {
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
        pageInfo {
          hasNextPage
        }
      }
    }
  `,
};

interface RepoListProps {
  list: any;
  isLoading?: boolean;
  relay: any;
}

const RepoList = (props: RepoListProps) => {
  const { list } = props;
  const isLoading = props?.relay.isLoading();
  console.log("[props]", props?.relay);
  const {
    search: { edges },
  } = list;

  console.log("[list]", list);

  if (isLoading) {
    return <StyledCenteredBlock>...검색중...</StyledCenteredBlock>;
  }

  if (edges === null) {
    return (
      <StyledCenteredBlock>
        레포지터리 이름으로 검색하세요 🔍
      </StyledCenteredBlock>
    );
  }

  if (edges.length < 1) {
    return (
      <StyledCenteredBlock>
        레포지터리를 찾을 수 없습니다 🙀
      </StyledCenteredBlock>
    );
  }

  return (
    <>
      <ul>
        {edges.map(({ node }: any) => (
          <RepoItem key={node.id} details={node} />
        ))}
      </ul>

      <StyledBtnBox>
        <StyledMoreBtn
          type="button"
          disabled={!props?.relay.hasMore()}
          onClick={() => {
            props?.relay.loadMore(20);
          }}
        >
          더 보기
        </StyledMoreBtn>
      </StyledBtnBox>
    </>
  );
};

export default createPaginationContainer(
  RepoList,
  SearchedRepoListFragment,
  {}
);

const StyledCenteredBlock = styled.div`
  text-align: center;
`;

const StyledBtnBox = styled.div`
  margin-top: 10px;
`;

const StyledMoreBtn = styled(StyledButton)`
  color: #333;
  font-size: 0.9rem;
  border-color: #fdde7c;
  background-color: #fce864;

  &:disabled {
    border-color: #d9d9d9;
    background-color: #e8e8e8;
  }
`;
