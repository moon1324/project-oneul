import React from 'react';
import Reaction from './Reaction';
import S from './style';

const OurDay = () => {
    return (
        <S.cardPostWrapper>
            <S.postProfileContainer>
                <S.ThumbnailWrapper>
                    <img src={process.env.PUBLIC_URL + "global/images/profile.jpg"} alt="profile-img" />
                </S.ThumbnailWrapper>
                <S.userNameWrapper>
                    Michael
                </S.userNameWrapper>
            </S.postProfileContainer>
            <S.postContentWrapper></S.postContentWrapper>
            <S.reactionContainer>
                    <Reaction/>
            </S.reactionContainer>
        </S.cardPostWrapper>
    );
};

export default OurDay;