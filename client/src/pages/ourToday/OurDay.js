import React from 'react';
import Reaction from './Reaction';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const OurDay = () => {
    return (
        <S.cardPostContainer>
            <S.postProfileContainer>
                <S.ThumbnailWrapper>
                    <img src={process.env.PUBLIC_URL + "global/images/profile.jpg"} alt="profile-img" />
                </S.ThumbnailWrapper>
                <S.userNameWrapper>
                    Michael
                </S.userNameWrapper>
                <S.correctionButtonContainer>
                    <S.correctionButtonWrapper>
                        <S.correctionButton><FontAwesomeIcon icon={faPenToSquare} className='pen' /></S.correctionButton>
                    </S.correctionButtonWrapper>
                    <S.correctionButtonWrapper>
                        <S.correctionButton><FontAwesomeIcon icon={faTrashCan} className='trash' /></S.correctionButton>
                    </S.correctionButtonWrapper>
                </S.correctionButtonContainer>
            </S.postProfileContainer>
            <S.postContentWrapper></S.postContentWrapper>
            <S.reactionContainer>
                    <Reaction/>
            </S.reactionContainer>
        </S.cardPostContainer>
    );
};

export default OurDay;