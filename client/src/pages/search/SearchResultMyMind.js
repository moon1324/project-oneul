import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './style';
import EmptyPostAlarm from './EmptyPostAlarm';

const SearchResultMyMind = () => {
    
    return (
        <>
            <S.myMindContainer>
            <S.cardPostContainer>
                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>오늘 내가 느낀 감정</div>
                </S.ContentWrapper>
                <S.postContentWrapper>
                    <EmptyPostAlarm />
                </S.postContentWrapper>
            </S.cardPostContainer>
            <S.cardPostContainer>
                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>감정에 대한 상황</div>
                </S.ContentWrapper>
                <S.postContentWrapper>
                    <EmptyPostAlarm />
                </S.postContentWrapper>
            </S.cardPostContainer>
            <S.cardPostContainer>
                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>내가 바라는 것</div>
                </S.ContentWrapper>
                <S.postContentWrapper>
                    <EmptyPostAlarm />
                </S.postContentWrapper>
            </S.cardPostContainer>
            <S.cardPostContainer>
                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>내가 남에게 듣고 싶은 말</div>
                </S.ContentWrapper>
                <S.postContentWrapper>
                    <EmptyPostAlarm />
                </S.postContentWrapper>
            </S.cardPostContainer>
            <S.cardPostContainer>
                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>내가 나에게 해주고 싶은 말</div>
                </S.ContentWrapper>
                <S.postContentWrapper>
                    <EmptyPostAlarm />
                </S.postContentWrapper>
            </S.cardPostContainer>
            <S.cardPostContainer>
                <S.ContentWrapper>
                    <FontAwesomeIcon icon={faCloudMoon} className="cloudMoonIcon" />
                    <div>마음일지를 쓰고 난 후 나의 마음</div>
                </S.ContentWrapper>
                <S.postContentWrapper>
                    <EmptyPostAlarm />
                </S.postContentWrapper>
            </S.cardPostContainer>
            </S.myMindContainer>
    </>
    );
};

export default SearchResultMyMind;