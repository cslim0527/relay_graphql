import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";
import RepoItem from "../RepoItem";

interface RepoListProps {
  list: any;
  isLoading?: boolean;
}

const RepoList = ({ list, isLoading }: RepoListProps) => {
  if (isLoading) {
    return <StyledCenteredBlock>...검색중...</StyledCenteredBlock>;
  }

  if (list === null) {
    return (
      <StyledCenteredBlock>
        레포지터리 이름으로 검색하세요 🔍
      </StyledCenteredBlock>
    );
  }

  if (list.length < 1) {
    return (
      <StyledCenteredBlock>
        레포지터리를 찾을 수 없습니다 🙀
      </StyledCenteredBlock>
    );
  }

  return (
    <>
      <ul>
        {list.map((repo: any) => (
          <RepoItem key={repo.id} details={repo} />
        ))}
      </ul>

      <StyledBtnBox>
        <StyledMoreBtn type="button" disabled>
          더 보기
        </StyledMoreBtn>
      </StyledBtnBox>
    </>
  );
};

export default RepoList;

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
