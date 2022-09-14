import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";

interface RepoListProps {
  list: any;
  isLoading?: boolean;
}

const RepoList = ({ list, isLoading }: RepoListProps) => {
  if (isLoading) {
    return <>...검색중...</>;
  }
  return (
    <>
      <ul>
        <StyledRepoItem>
          <strong>garter</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque1
            autem deleniti ducimus esse facere itaque molestias non numquam
            praesentium, quibusdam recusandae tempora, tempore vel veniam vero,
            voluptates. Facere, tempore.
          </p>
          <StyledStarBtn type="button">
            <span>⭐</span>
            <span>24</span>
          </StyledStarBtn>
        </StyledRepoItem>

        <StyledRepoItem>
          <strong>garter</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque1
            autem deleniti ducimus esse facere itaque molestias non numquam
            praesentium, quibusdam recusandae tempora, tempore vel veniam vero,
            voluptates. Facere, tempore.
          </p>
          <StyledStarBtn type="button">
            <span>⭐</span>
            <span>24</span>
          </StyledStarBtn>
        </StyledRepoItem>
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

const StyledRepoItem = styled.li`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    display: block;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const StyledStarBtn = styled(StyledButton)`
  font-size: 0.9rem;
  background-color: #fff;

  span {
    &:first-child {
      font-size: 12px;
      margin-right: 8px;
    }

    &:last-child {
      font-size: 14px;
    }
  }
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
