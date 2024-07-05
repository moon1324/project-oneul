import React, { useRef, useState } from 'react';
import S from './style';

const DeleteModal = ({
    deleteModalStatus, 
    setDeleteModalStatus, 
    ourTodayUpdate,
    setOurTodayUpdate,
    isDeleteOk,
    setIsDeleteOk,
}) => {
    const [deleteStatus, setDeleteStatus] = useState(false);
    const modalBackground = useRef();

    const handleCloseModal = () => {
       return setDeleteModalStatus(!deleteModalStatus)
    }

    const handleBackgroundModal = (e) => {
        if(e.target === modalBackground.current) {
            setDeleteModalStatus(!deleteModalStatus)
        }
    }

    const handleDeleteOk = () => {
        // 모달을 끈다.
        console.log("deleteModalStatus", deleteModalStatus);
        // 컨테이너의 의존성 배열을 바꾼다.
        setOurTodayUpdate(!ourTodayUpdate);
        // delete쿼리
        setIsDeleteOk(true);
        return;
    }

    return (
        <>
            {
                deleteModalStatus && 
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
                                <S.modalCancelButton onClick={handleCloseModal}>취소</S.modalCancelButton>
                            </S.modalButtonWrapper>
                            <S.modalButtonWrapper>
                                <S.modalDeleteButton onClick={handleDeleteOk}>삭제</S.modalDeleteButton>
                            </S.modalButtonWrapper>
                        </S.modalButtonContainer>
                    </S.modalWrapper>
                </S.modalContainer>
            }
        </>
    );
};

export default DeleteModal;