import React, { useEffect, useRef, useState } from 'react';
import Reaction from './Reaction';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import useTextarea from '../../hooks/useTextarea';
import { useSelector } from 'react-redux';

const OurDay = ({tabActive, setTabActive}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [todayProfileImg, setTodayProfileImg] = useState("");
    const [isEditId, setIsEditId] = useState();
    const [postValue, setPostValue, handlePostChange] = useTextarea();
    const currentUser = useSelector((state) => state.login.currentUser);
    const modalBackground = useRef();

    const handleDeleteModal = (id) => {
        setModalOpen(!modalOpen)
    }


    const handleBackgroundModal = (e) => {
        if(e.target === modalBackground.current) {
            setModalOpen(!modalOpen)
        }
    }

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }


    useEffect(()=>{
            let url = `http://localhost:8000/ourToday/checkPost`;
            if(tabActive === "MyToday"){
                url = `http://localhost:8000/ourToday/checkMyPost`
            }
            const getPost = async () => {
                const response = await fetch(url);
                const todayPosts = await response.json();
                console.log(todayPosts);
                return todayPosts;
            }
            getPost().then((todayPosts)=>{setPosts(todayPosts)});
    }, [tabActive])

    // const onChangeUpdateTodo = async () => {
    //     // console.log("정확히 수정이 완료되었습니다.");
    //     // fetch PUT 메서드를 이용한 value값 수정
    //     await fetch(`http://localhost:8000/ourToday/update`, {
    //              method : 'PUT',                                            
    //              headers : {                                                       
    //                     'Content-Type' : 'application/json'  
    //               },
    //               body: JSON.strigify({                                                                                                                        
    //                     content : postValue                                   
    //               })
    //      }).then((response) => {
    //           console.log(response, '리스폰스 데이터')       
    //           if(!response.ok) return console.log(`error ${response}`) 
    //           setIsEdit(!isEdit)  
    //           // getTodos().then(setTodos) 
    //      })

    // }

    useEffect(() => {
        const fetchUserProfileImage = async (post) => {
            try {
                    const response = await fetch(`http://localhost:8000/user/getProfile/${post.userEmail}`);
                    const data = await response.json();
                    setTodayProfileImg(data.profileImg);
                } catch (error) {
                    console.error("Failed to fetch user profile image", error);
                }
        };
        fetchUserProfileImage();
    }, [tabActive]);

        const deletePost = async() => {
            try {
                const response = await fetch(`http://localhost:8000/ourToday/delete`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    }),
                });
                if (response.ok) {
                    const result = await response.json();
                } else {
                    console.error('Failed to submit post');
                }
            } catch (error) {
                console.error('An error occurred while submitting the post:', error);
            }
        }
    

    return (
        <ul>
            { posts && posts.map((post, i) =>
                <li key={i}> 
                        <S.cardPostContainer>
                        <S.postProfileContainer>
                            <S.ThumbnailWrapper>
                                <img src={todayProfileImg} alt="profile-img" />
                            </S.ThumbnailWrapper>
                            <S.userNameWrapper>
                                {post.userNickname}
                            </S.userNameWrapper>
                            {currentUser.email === post.userEmail ? (
                                <S.correctionButtonContainer>
                                    <S.correctionButtonWrapper>
                                        <S.correctionButton onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} className='pen' /></S.correctionButton>
                                    </S.correctionButtonWrapper>
                                    <S.correctionButtonWrapper>
                                        <S.correctionButton onClick={handleDeleteModal}><FontAwesomeIcon icon={faTrashCan} className='trash' /></S.correctionButton>
                                    </S.correctionButtonWrapper>
                                </S.correctionButtonContainer>
                            ) 
                            : <></>}
                        </S.postProfileContainer>
                        <S.postContentWrapper>
                            <S.todayPostText 
                                value={post.content}
                                onChange={handlePostChange}
                            />
                        </S.postContentWrapper>
                        <S.reactionContainer>
                                <Reaction/>
                        </S.reactionContainer>
                    </S.cardPostContainer>
                </li>
                )
            }
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
            <S.gap></S.gap>
        </ul>
    );
};

export default OurDay;