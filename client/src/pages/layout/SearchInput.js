import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import OneulInput from '../../components/input/OneulInput';

const SearchInput = () => {
    // useLocation을 써서 메인, 우리의오늘, 검색일때 화면에 header 표시
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;
    const showHeader = path === "/" || path === "/ourToday" || path === `/search` || path === '/writeToday';

    // 검색버튼 눌렀을 시 검색 인풋 활성화
    const [isSearchActive, setIsSearchActive] = useState(false);
    // useInput hook 사용
    const [searchValue, setSearchValue, handleSearchChange] = useInput("");
    const [searchFilter, setSearchFilter ] = useState([]);
    const searchRef = useRef(null);


    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    const handleSearchSubmit = () => {
        navigate(`/search?value=${searchValue}`);
        // console.log(searchValue);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearchSubmit();
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchActive(false);
                setSearchValue("");
            }
        };

        if (isSearchActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSearchActive, setSearchValue]);

    const getValue = (e) => {
        setSearchValue(e.target.value);
    }

    const searched = searchFilter.filter((post)=>{
        post.content.includes(searchValue)
    });

    return (
        <>
             {showHeader && (
                    <S.Header ref={searchRef}>
                        <S.HeaderContainer className={isSearchActive ? "active" : ""}>
                            <S.ProfileContainer>
                                <S.ThumbnailWrapper>
                                    <Link to={"/myPage"}>
                                        <img src={process.env.PUBLIC_URL + "global/images/profile.jpg"} alt="profile-img" />
                                    </Link>
                                </S.ThumbnailWrapper>
                            </S.ProfileContainer>
                            <S.WelcomeMessage className={isSearchActive ? "display-none" : ""}>michael님, 반가워요!</S.WelcomeMessage>
                            <OneulInput
                                variant={"active"}
                                size={"default"}
                                className={isSearchActive ? "" : "display-none"}
                                value={searchValue}
                                onChange={handleSearchChange}
                                onKeyPress={handleKeyPress}
                            />
                            <S.SearchButtonWrapper className={isSearchActive ? "active" : ""} onClick={isSearchActive ? handleSearchSubmit : toggleSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </S.SearchButtonWrapper>
                        </S.HeaderContainer>
                    </S.Header>
                )}   
        </>
    );
};

export default SearchInput;