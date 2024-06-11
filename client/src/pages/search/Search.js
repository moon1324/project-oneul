import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import S from "./style";
import SearchResultPost from "./SearchResultPost";


const Search = () => {
    return (
        <>
            <S.Wrapper>
                <S.header>
                    <S.searchSection>나의 마음보기</S.searchSection>
                    <S.viewAll>모두보기<FontAwesomeIcon icon={faAngleRight} /></S.viewAll>
                </S.header>
                <S.searchContainer>
                    <SearchResultPost />
                </S.searchContainer>
            </S.Wrapper>
            <S.searchOurDayWrapper>
                <S.header>
                    <S.searchSection>우리의 오늘</S.searchSection>
                    <S.viewAll>모두보기<FontAwesomeIcon icon={faAngleRight} /></S.viewAll>
                </S.header>
                <S.searchContainer>
                    <SearchResultPost />
                </S.searchContainer>
            </S.searchOurDayWrapper>
        </>
    );
};

export default Search;
