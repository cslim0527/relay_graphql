import React from "react";
import styled from "styled-components";

import StarBtn from "../StarBtn";

interface RepoDetailProps {
  readonly id?: string;
  readonly name?: string;
  readonly shortDescriptionHTML?: any;
  readonly stargazerCount?: number;
  readonly url?: any;
  readonly viewerHasStarred?: boolean;
}

interface Props {
  details: RepoDetailProps;
}

const RepoItem = ({ details }: Props) => {
  return (
    <StyledRepoItem key={details?.id}>
      <a href={details?.url} target="_blank" rel="noreferrer">
        {details?.name}
      </a>

      <p dangerouslySetInnerHTML={{ __html: details?.shortDescriptionHTML }} />

      <StarBtn
        starrableId={details?.id as string}
        hasStarred={details?.viewerHasStarred}
        stargazerCount={details?.stargazerCount}
      />
    </StyledRepoItem>
  );
};

export default RepoItem;

const StyledRepoItem = styled.li`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: inherit;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    text-decoration: none;
  }

  p {
    margin-bottom: 10px;
  }
`;
