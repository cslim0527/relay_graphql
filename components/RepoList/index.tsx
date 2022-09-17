import type { RepoList_list$key } from "../../__generated__/RepoList_list.graphql";
import type { RepoListPaginationQuery } from "../../__generated__/RepoListPaginationQuery.graphql";

import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";
import { graphql, usePaginationFragment } from "react-relay";

import RepoItem from "../RepoItem";
import CenteredText from "../CenteredText";

const SearchedRepoListFragment = graphql`
  fragment RepoList_list on Query
  @argumentDefinitions(
    keyword: { type: "String!" }
    first: { type: "Int", defaultValue: 20 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "RepoListPaginationQuery") {
    search(query: $keyword, type: REPOSITORY, first: $first, after: $cursor)
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
`;

interface RepoDetailProps {
  readonly id?: string;
  readonly name?: string;
  readonly shortDescriptionHTML?: any;
  readonly stargazerCount?: number;
  readonly url?: any;
  readonly viewerHasStarred?: boolean;
}

interface RepoItemProps {
  readonly node: RepoDetailProps | null;
}

interface Props {
  initialQueryRef: RepoList_list$key;
}

const RepoList = ({ initialQueryRef }: Props) => {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    RepoListPaginationQuery,
    RepoList_list$key
  >(SearchedRepoListFragment, initialQueryRef);

  const {
    search: { edges },
  } = data;

  if (!edges || edges.length < 1) {
    return <CenteredText>레포지터리를 찾을 수 없습니다 🙀</CenteredText>;
  }

  return (
    <>
      <ul>
        {edges.map((item: RepoItemProps | null) => (
          <RepoItem
            key={item?.node?.id}
            details={item?.node as RepoDetailProps}
          />
        ))}
      </ul>
      <StyledBtnBox>
        <StyledMoreBtn
          type="button"
          disabled={!hasNext || isLoadingNext}
          onClick={() => loadNext(20)}
        >
          {isLoadingNext ? "...불러오는중..." : "더 보기"}
        </StyledMoreBtn>
      </StyledBtnBox>
    </>
  );
};

export default RepoList;

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
