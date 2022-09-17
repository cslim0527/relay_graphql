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

// interface RepoListProps {
//   list: any;
//   isLoading?: boolean;
//   relay: any;
// }

const RepoList = (props: any) => {
  const { data, loadNext, hasNext } = usePaginationFragment(
    SearchedRepoListFragment,
    props.initialQueryRef
  );

  console.log("[data]", data);
  console.log("[hasNext]", loadNext);

  if (data.search.edges < 1) {
    return <CenteredText>레포지터리를 찾을 수 없습니다 🙀</CenteredText>;
  }

  return (
    <>
      <ul>
        {data.search.edges.map(({ node }: any) => (
          <RepoItem key={node.id} details={node} />
        ))}
      </ul>
      <StyledBtnBox>
        <StyledMoreBtn
          type="button"
          disabled={!hasNext}
          onClick={() => loadNext(20)}
        >
          더 보기
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
