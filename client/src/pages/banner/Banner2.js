import React from 'react';
import S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { faHeartCircleCheck,faCalendarDays, faHouse, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Banner3 = () => {
    return (
        <S.BannerContainer>
            <S.BannerWrapper id="banner2_wrapper">
                <Link to={'/'}><FontAwesomeIcon icon={faCircleXmark} className='faCircleXmark'/></Link>
                <S.BannerImageBox>
                    <img id="image02"src={process.env.PUBLIC_URL+"/images/banner/banner2.svg"}  />
                </S.BannerImageBox>
                <S.BannerConBox>
                    <p>
                        '오늘'은 나의 하루 동안의 마음을 돌아보는 글을 작성하고 '오늘'을 사용하는 다른 사람들과 글로 소통할 수 있는 공간이에요.
                        <br/><br/> '오늘'에는 크게 5가지의 공간이 있어요.
                        <br/> 지금부터 각 공간에 대한 설명을 해드릴게요!
                    </p>
                    
                    <S.IconImageTitle>
                        <FontAwesomeIcon icon={faHeartCircleCheck} className="smallIcon"/> 나의 마음보기 <FontAwesomeIcon icon={faHeartCircleCheck} className="smallIcon"/>
                    </S.IconImageTitle>
                    <S.ImageWrapper>
                        <FontAwesomeIcon icon={faHeartCircleCheck} className="icon" />
                        <div id='textIntoImage'>
                            '마음일지'를 작성하는 공간이에요.
                            <br/> '마음일지'란 내가 오늘 하루 동안 느낀 감정에 대해 기록하는 일지에요.
                            <br/> '마음일지'를 작성하면서 오늘 하루 느낀 감정들을 되돌아보고 성찰할 수 있어요.
                            <br/> 하루를 마무리하는 자기 전 시간에 작성하는 것을 추천드려요.
                        </div>
                    </S.ImageWrapper>

                    <S.IconImageTitle>
                        <FontAwesomeIcon icon={faCalendarDays} className="smallIcon"/> 캘린더 <FontAwesomeIcon icon={faCalendarDays} className="smallIcon"/>
                    </S.IconImageTitle>
                    <S.ImageWrapper>
                        <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                        <div id='textIntoImage'> 
                            내가 작성했던 '마음일지'들을 볼 수 있는 공간이에요.
                            <br/> 드롭 바나 화살표를 눌러 원하는 시기로 이동한 뒤 하단에 파란 점이 있는 날짜를 클릭하면 해당 날짜에 작성한 '마음일지'를 볼 수 있고 상단의 아이콘을 클릭하면 '마음일지'를 수정, 삭제할 수 있어요.
                        </div>
                    </S.ImageWrapper>

                    <S.IconImageTitle>
                        <FontAwesomeIcon icon={faUsers} className="smallIcon"/> 우리의 오늘 <FontAwesomeIcon icon={faUsers} className="smallIcon"/>
                    </S.IconImageTitle>
                    <S.ImageWrapper>
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <div id='textIntoImage'>
                            '오늘'을 사용하는 다른 사람들의 글을 읽고 댓글로 소통할 수 있는 공간이에요.
                            <br/> '나의 오늘'은 내가 오늘 하루 동안 느꼈던 생각, 감정 등을 자유롭게 적을 수 있어요. 
                            <br/>마음일지를 작성한 후 느낀 생각이나 감정을 적어도 좋아요. 
                            <br/> 작성된 '나의 오늘'은 '우리의 오늘'로 공유되어 다른 사람들이 볼 수 있어요.
                            <br/>'우리의 오늘'에서 사람들과 함께 오늘의 하루를 나눠보아요!
                        </div>
                    </S.ImageWrapper>

                    <S.IconImageTitle>
                        <FontAwesomeIcon icon={faHouse} className="smallIcon"/> 홈 <FontAwesomeIcon icon={faHouse} className="smallIcon"/>
                    </S.IconImageTitle>
                    <S.ImageWrapper>
                        <FontAwesomeIcon icon={faHouse} className="icon" />
                        <div id='textIntoImage'>
                            '오늘'의 주요 기능들로 이동할 수 있는 공간이에요.
                            <br/>최상단의 검색 아이콘을 누르고 단어를 입력하면 '우리의 오늘'과 '나의 오늘'에서 해당 단어가 포함된 게시물을 검색할 수 있어요.
                            <br/> 홈의 중앙에 위치한 슬라이드 배너는 마음에 관한 글과 '오늘'에 대한 설명이 있어요.
                            <br/> 하단에 위치한 '우리의 오늘'에서는 사람들에게 공감을 가장 많이 받은 게시물을 볼 수 있어요. 
                        </div>
                    </S.ImageWrapper>

                    <S.IconImageTitle>
                        <FontAwesomeIcon icon={faUser} className="smallIcon"/> 마이페이지 <FontAwesomeIcon icon={faUser} className="smallIcon"/>
                    </S.IconImageTitle>
                    <S.ImageWrapper>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <div id='textIntoImage'>
                            우측 상단의 프로필 아이콘을 클릭하면 내 정보를 수정할 수 있어요.
                            <br/> 중앙에 위치한 '마음일지 작성 일수'에서는 지금까지의 마음일지 작성 일수를 볼 수 있고 '공유된 나의 마음'에서는 '우리의 오늘'에서 내가 지금까지 쓴 나의 마음의 개수를 볼 수 있어요.
                        </div>
                    </S.ImageWrapper>
                </S.BannerConBox>
            </S.BannerWrapper>
        </S.BannerContainer>
    );
};

export default Banner3;