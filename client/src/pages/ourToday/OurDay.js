import React, { useRef, useState } from 'react';
import Reaction from './Reaction';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const OurDay = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    const handleDeleteModal = () => {
        setModalOpen(!modalOpen)
    }


    const handleBackgroundModal = (e) => {
        if(e.target === modalBackground.current) {
            setModalOpen(!modalOpen)
        }
    }
    

    return (
        <>
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
                            <S.correctionButton onClick={handleDeleteModal}><FontAwesomeIcon icon={faTrashCan} className='trash' /></S.correctionButton>
                        </S.correctionButtonWrapper>
                    </S.correctionButtonContainer>
                </S.postProfileContainer>
                <S.postContentWrapper></S.postContentWrapper>
                <S.reactionContainer>
                        <Reaction/>
                </S.reactionContainer>
            </S.cardPostContainer>
            {
                modalOpen && 
                <S.modalContainer ref={modalBackground} onClick={handleBackgroundModal}>
                    <S.modalWrapper>
                        <S.modalTitle>삭제</S.modalTitle>
                        <S.modalDescriptionWrapper>
                            <S.modalDescription>
                            내용을 정말로 삭제하시겠습니까?<br/>
                            삭제 시 복구할 수 없습니다.
                            </S.modalDescription>
                        </S.modalDescriptionWrapper>
                        <S.modalButtonContainer>
                            <S.modalButtonWrapper>
                                <S.modalCancelButton onClick={handleDeleteModal}>취소</S.modalCancelButton>
                            </S.modalButtonWrapper>
                            <S.modalButtonWrapper>
                                <S.modalDeleteButton>삭제</S.modalDeleteButton>
                            </S.modalButtonWrapper>
                        </S.modalButtonContainer>
                    </S.modalWrapper>
                </S.modalContainer>
            }
        </>
    );
};

export default OurDay;