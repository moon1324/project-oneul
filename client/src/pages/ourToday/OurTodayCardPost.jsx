import React, { useEffect, useState } from 'react';
import S from './style';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Reaction from './Reaction';
import useTextarea from '../../hooks/useTextarea';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

const OurTodayCardPost = ({
    posts, post, tabActive, isDeleteOk, setIsDeleteOk, 
    postModalStatus, setPostModalStatus,
    setOurTodayUpdate, ourTodayUpdate
}) => {
    const postId = post._id;
    const [isPostEdit, setIsPostEdit] = useState(false);
    const [todayProfileImg, setTodayProfileImg] = useState("");
    const [postValue, setPostValue, handlePostChange] = useTextarea();
    const currentUser = useSelector((state) => state.login.currentUser);

    const handleOpenPostEdit = (post) => {
        setIsPostEdit(!isPostEdit)
        setPostValue(post.content)
    }

    const handlePostEdit = () => {
        setIsPostEdit(!isPostEdit)
    }

    const handleOpenDeleteModal = () => {
        return setPostModalStatus(!postModalStatus)
    }


    useEffect(() => {
        const fetchUserProfileImage = async () => {
            try {
                    const response = await fetch(`http://localhost:8000/user/getProfile/${post.userEmail}`);
                    const data = await response.json();
                    setTodayProfileImg(data.profileImg);
                } catch (error) {
                    console.error("Failed to fetch user profile image", error);
                }
        };
        fetchUserProfileImage();
    }, [tabActive, posts]);

    
    const handleUpdatePost = async () => {
        console.log(postValue)
        try {
            const response = await fetch(`http://localhost:8000/ourToday/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ... post,
                    id: post._id,
                    content: postValue,
                }),
            });
            if (response.ok) {
                console.log("게시글이 정상적으로 수정되었습니다.");
                setOurTodayUpdate(!ourTodayUpdate);
                setIsPostEdit(false);
            } else {
                console.error('Failed to update post');
            }
        } catch (error) {
            console.error('An error occurred while updating the post:', error);
        }
    }

    useEffect(() => {
            const handleDeletePost = async () => {
                console.log(postId)
                try {
                    const response = await fetch(`http://localhost:8000/ourToday/delete`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            _id: postId
                        }),
                    });
                    if (response.ok) {
                        setOurTodayUpdate(!ourTodayUpdate);
                        console.log("정상적으로 삭제가 완료되었습니다.");
                    } else {
                        console.error('Failed to delete post');
                    }
                } catch (error) {
                    console.error('An error occurred while deleting the post:', error);
            };
        if (isDeleteOk) {
            handleDeletePost().then(()=>{
                setOurTodayUpdate(!ourTodayUpdate);
                setIsDeleteOk(false);
            });
        }
    }}, [isDeleteOk]);


    return (
        <div>
            <li> 
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
                                {!isPostEdit ? (
                                    <>
                                        <S.correctionButtonWrapper>
                                            <S.correctionButton onClick={()=>{handleOpenPostEdit(post)}}><FontAwesomeIcon icon={faPenToSquare} className='pen' /></S.correctionButton>
                                        </S.correctionButtonWrapper>
                                        <S.correctionButtonWrapper>
                                            <S.correctionButton onClick={handleOpenDeleteModal}><FontAwesomeIcon icon={faTrashCan} className='trash' /></S.correctionButton>
                                        </S.correctionButtonWrapper>
                                    </>) : <></>}
                            </S.correctionButtonContainer>
                        ) 
                        : <></>}
                    </S.postProfileContainer>
                    <S.postContentWrapper>
                        { isPostEdit ? 
                            (<S.todayPostText 
                                defaultValue={postValue}
                                onChange={handlePostChange}
                                autoFocus
                            ></S.todayPostText>) : (
                                <>
                                    {post.content}
                                </>
                            )}
                        
                    </S.postContentWrapper>
                    {!isPostEdit ? 
                        (<>
                            <S.reactionContainer>
                                <Reaction post={post} setOurTodayUpdate={setOurTodayUpdate}
                                 ourTodayUpdate={ourTodayUpdate}
                                />
                            </S.reactionContainer>
                        </>) : 
                        (<S.updateButtonContainer>
                            <S.updateButtonWrapper>
                                <S.updateButton onClick={handleUpdatePost}><FontAwesomeIcon icon={faCheck} className='check'/></S.updateButton>
                            </S.updateButtonWrapper>
                            <S.updateButtonWrapper>
                                <S.cancelUpdateButton onClick={handlePostEdit}><FontAwesomeIcon icon={faX} className='exit'/></S.cancelUpdateButton>
                            </S.updateButtonWrapper>                       
                        </S.updateButtonContainer>)}
                </S.cardPostContainer>
            </li> 
        </div>
    );
};

export default OurTodayCardPost;