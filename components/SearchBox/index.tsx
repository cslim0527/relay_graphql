import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";

interface SearchBoxProps {
  handler?: any;
  isLoading?: boolean;
}

const SearchBox = ({ handler, isLoading }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState<string>("");

  const keywordLengthValidation = () => {
    return keyword.length < 2;
  };

  const handleSearchEvent = () => {
    console.log("[handleSearchEvent]");
    if (keywordLengthValidation()) {
      alert("최소 2글자 이상으로 검색해주세요.");
      return;
    }

    handler && handler(keyword);
  };

  const handleEnterKeyEvent = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    if (keywordLengthValidation()) {
      alert("최소 2글자 이상으로 검색해주세요.");
      return;
    }

    handler && handler(keyword);
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <StyledSearchBox>
      <StyledSearchInput
        type="text"
        onChange={handleChangeKeyword}
        onKeyUp={handleEnterKeyEvent}
      />
      <StyledSearchBtn
        type="button"
        onClick={handleSearchEvent}
        disabled={isLoading}
      >
        검색
      </StyledSearchBtn>
    </StyledSearchBox>
  );
};

export default SearchBox;

const StyledSearchBox = styled.article`
  position: sticky;
  top: 0;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  gap: 5px;
  background-color: #fff;
`;

const StyledSearchInput = styled.input`
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  border: 1px solid #e8e8e8;
  flex: 1;
  max-width: 40%;
`;

const StyledSearchBtn = styled(StyledButton)`
  color: #666;
  font-size: 0.9rem;
`;
