import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import S from "./style";
import SearchPosts from "./SearchPosts";
import SearchResultMyMind from "./SearchResultMyMind";
import { useLocation } from "react-router-dom";

const Search = () => {
    // const getPosts = async () => {
    //     try {
    //         console.log(searchValue);
    //         const response = await fetch(`http://localhost:8000/search?value=${searchValue}`);
    //         const data = await response.json();
    //         console.log(data);
    //         return data;
    //     } catch (error) {
    //         console.error("Failed to search", error);
    //     }
    // };

    // getPosts().then(setPosts);
    // console.log(posts);

    // useEffect(() => {
    //     console.log(getPosts());
    //     getPosts().then(setPosts());
    //     console.log(posts);
    // }, []);

    return (
        <>
            <S.Wrapper>
                {/* <S.header>
                    <S.searchSection>우리의 오늘</S.searchSection>
                    <S.viewAll>
                        모두보기
                        <FontAwesomeIcon icon={faAngleRight} />
                    </S.viewAll>
                </S.header> */}
                <S.searchContainer>
                    <SearchPosts />
                </S.searchContainer>
            </S.Wrapper>
            {/* <S.Wrapper>
                <S.header>
                    <S.searchSection>나의 마음보기</S.searchSection>
                    <S.viewAll>
                        모두보기
                        <FontAwesomeIcon icon={faAngleRight} />
                    </S.viewAll>
                </S.header>
                <S.searchContainer>
                    <SearchResultMyMind />
                </S.searchContainer>
            </S.Wrapper>
            <S.searchOurDayWrapper>
                <S.header>
                    <S.searchSection>우리의 오늘</S.searchSection>
                    <S.viewAll>
                        모두보기
                        <FontAwesomeIcon icon={faAngleRight} />
                    </S.viewAll>
                </S.header>
                <S.searchContainer>
                    <SearchResultPost />
                </S.searchContainer>
            </S.searchOurDayWrapper> */}
        </>
    );
};

export default Search;
