import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";

import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";

import {
  StarBtn_AddStar_Mutation,
  StarBtn_AddStar_Mutation$data,
} from "../../__generated__/StarBtn_AddStar_Mutation.graphql";
import {
  StarBtn_RemoveStar_Mutation,
  StarBtn_RemoveStar_Mutation$data,
} from "../../__generated__/StarBtn_RemoveStar_Mutation.graphql";

interface UpdateStarParams {
  stargazerCount: string;
  viewerHasStarred: boolean;
}

const RepositoryAddStarMutation = graphql`
  mutation StarBtn_AddStar_Mutation($starrableId: ID!) {
    addStar(input: { starrableId: $starrableId }) {
      starrable {
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

const RepositoryRemoveStarMutation = graphql`
  mutation StarBtn_RemoveStar_Mutation($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      starrable {
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

interface StarBtnProps {
  hasStarred: boolean | undefined;
  stargazerCount: string;
  starrableId: string;
}

const StarBtn = ({ starrableId, hasStarred, stargazerCount }: StarBtnProps) => {
  const [starrable, setStarrable] = useState(hasStarred);
  const [startCount, setStarCount] = useState(stargazerCount);
  const [commitStarAddMutation, isStarAddMutationInFlight] =
    useMutation<StarBtn_AddStar_Mutation>(RepositoryAddStarMutation);
  const [commitStarRemoveMutation, isStarRemoveMutationInFlight] =
    useMutation<StarBtn_RemoveStar_Mutation>(RepositoryRemoveStarMutation);

  const updateStarBtn = ({
    stargazerCount,
    viewerHasStarred,
  }: UpdateStarParams) => {
    setStarrable(viewerHasStarred);
    setStarCount(stargazerCount);
  };

  const handleClickAddStar = async () => {
    commitStarAddMutation({
      variables: { starrableId },
      onCompleted(response: StarBtn_AddStar_Mutation$data) {
        const {
          addStar: {
            starrable: { stargazerCount, viewerHasStarred },
          },
        }: any = response;
        updateStarBtn({ stargazerCount, viewerHasStarred });
      },
    });
  };

  const handleClickRemoveStar = async () => {
    commitStarRemoveMutation({
      variables: { starrableId },
      onCompleted(response: StarBtn_RemoveStar_Mutation$data) {
        const {
          removeStar: {
            starrable: { stargazerCount, viewerHasStarred },
          },
        }: any = response;
        updateStarBtn({ stargazerCount, viewerHasStarred });
      },
    });
  };

  if (!starrable) {
    return (
      <StyledStarBtn
        type="button"
        onClick={handleClickAddStar}
        disabled={isStarAddMutationInFlight}
      >
        <span>⭐</span>
        <span>{startCount}</span>
      </StyledStarBtn>
    );
  }

  if (starrable) {
    return (
      <StyledStarredBtn
        type="button"
        onClick={handleClickRemoveStar}
        disabled={isStarRemoveMutationInFlight}
      >
        <span>⭐</span>
        <span>{startCount}</span>
      </StyledStarredBtn>
    );
  }

  return null;
};

export default StarBtn;

const StyledCommonStarBtn = styled(StyledButton)`
  font-size: 0.9rem;

  &:active {
    background-color: #fdde7c;
  }

  &:disabled {
    background-color: #fff;
  }

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

const StyledStarBtn = styled(StyledCommonStarBtn)`
  background-color: #fff;
`;

const StyledStarredBtn = styled(StyledCommonStarBtn)`
  background-color: #fffbb8;
  border-color: #ffaa00;
`;
