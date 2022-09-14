import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";

interface SearchBoxProps {
  handler?: any;
  isLoading?: boolean;
}

const SearchBox = ({ handler, isLoading }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearchEvent = () => {
    handler && handler(keyword);
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <StyledSearchBox>
      <StyledSearchInput type="text" onChange={handleChangeKeyword} />
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
  max-width: 40%;
  margin: 0 auto 40px auto;
  display: flex;
  gap: 5px;
`;

const StyledSearchInput = styled.input`
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  border: 1px solid #e8e8e8;
  flex: 1;
`;

const StyledSearchBtn = styled(StyledButton)`
  color: #666;
  font-size: 0.9rem;
`;
