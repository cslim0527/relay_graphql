import React from "react";
import styled from "styled-components";

import StarBtn from "../StarBtn";

const RepoItem = ({ details }: any) => {
  return (
    <StyledRepoItem key={details?.id}>
      <a href={details?.url} target="_blank">
        {details?.name}
      </a>

      <p dangerouslySetInnerHTML={{ __html: details?.shortDescriptionHTML }} />

      <StarBtn
        starrableId={details?.id}
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
