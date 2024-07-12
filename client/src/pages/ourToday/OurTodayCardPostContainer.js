import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { useSelector } from 'react-redux';
import OurTodayCardPost from './OurTodayCardPost';

const OurTodayCardPostContainer = ({tabActive, setTabActive}) => {
    const [posts, setPosts] = useState([]);
    const [postModalStatus, setPostModalStatus] = useState(false)
    const [isDeleteOk, setIsDeleteOk] = useState(false)
    const [ourTodayUpdate, setOurTodayUpdate] = useState(false);
    const currentUser = useSelector((state) => state.login.currentUser);

    const getPost = async () => {
        const response = await fetch(`http://localhost:8000/ourToday/checkPost`);
        const dayPosts = await response.json();
        if(tabActive === "myToday") {
            const todayPosts = dayPosts.filter((dayPost) => currentUser.email === dayPost.userEmail);
            return todayPosts
        }else if(tabActive === "ourToday"){
            const todayPosts = dayPosts
            return todayPosts
        }
    }
            
    useEffect(()=>{ 
        getPost().then(setPosts);
    }, [tabActive, ourTodayUpdate])

    const modalBackground = useRef();

    const handleCloseModal = () => {
       return setPostModalStatus(!postModalStatus)
    }

    const handleBackgroundModal = (e) => {
        if(e.target === modalBackground.current) {
            setPostModalStatus(!postModalStatus)
        }
    }

    const handleDeleteOk = () => {
        // 모달을 끈다.
        setPostModalStatus(!postModalStatus)
        // // 컨테이너의 의존성 배열을 바꾼다.
        // setOurTodayUpdate(!ourTodayUpdate);
        // delete쿼리
        setIsDeleteOk(!isDeleteOk);
        return;
    }



    return (
        <ul>
            { posts && posts.map((post, i) =>
                    <OurTodayCardPost 
                        post={post}
                        key={i}
                        tabActive={tabActive}
                        posts={posts} 
                        isDeleteOk={isDeleteOk}
                        setIsDeleteOk={setIsDeleteOk}
                        ourTodayUpdate={ourTodayUpdate}
                        setOurTodayUpdate={setOurTodayUpdate}
                        postModalStatus={postModalStatus} setPostModalStatus={setPostModalStatus}
                    />
                )
            }
            {
                postModalStatus && 
                <S.modalContainer ref={modalBackground} onClick={handleBackgroundModal}>
                    <S.modalWrapper>
                        <S.modalTitle>삭제</S.modalTitle>
                        <S.modalDescriptionWrapper>
                            <S.modalDescription>
                            게시물을 정말로 삭제하시겠습니까?<br/>
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
            <S.gap></S.gap>
        </ul>
    );
};

export default OurTodayCardPostContainer;