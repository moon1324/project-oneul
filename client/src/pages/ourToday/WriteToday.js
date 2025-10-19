import React from 'react';
import S from './style';
import useTextarea from '../../hooks/useTextarea';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL } from '../../api/Api';

const WriteToday = () => {
    const navigate = useNavigate()
    const [postValue, setPostValue, handlePostChange] = useTextarea();
    const {register, handleSubmit, getValues, formState : { isSubmitting, isSubmitted, errors }} = useForm({mode : "onChange"})

    const currentUser = useSelector((state)=>state.login.currentUser);

    const onSubmit = async (data) => {
        console.log(data);
        console.log(currentUser.profileImg);
        try {
            const response = await fetch(`${API_URL}/ourToday/write`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userEmail: currentUser.email,
                    content: data.content,
                    userProfileImg: currentUser.profileImg,
                    userNickname: currentUser.nickname,
                    heart: [],
                    like: [],
                    smile: [],
                    angry: [],
                    sad: [],
                })
            });

            
            if (response.ok) {
                const result = await response.json();
                navigate('/ourToday'); // 성공 시 리디렉션
            } else {
                console.error('Failed to submit post');
            }
        } catch (error) {
            console.error('An error occurred while submitting the post:', error);
        }
    };

    return (
        <S.writeTodayContainer>
            <S.writeForm onSubmit={handleSubmit(onSubmit)} >
                <S.explanationWritingPostWrapper>
                    나의 오늘을 다른사람과 나눠볼까요?
                </S.explanationWritingPostWrapper>
                <S.textWrapper>
                    <S.todayText className='writeTodayText' 
                        value={postValue}
                        onChange={handlePostChange}
                        placeholder='나의 오늘을 작성해주세요'
                        autoFocus  
                        {...register('content', { required: true })}
                    />
                </S.textWrapper>
                <S.writeButtonWrapper> 
                    <S.completeWriteButton type="submit" disabled={isSubmitting} >작성 완료</S.completeWriteButton>
                </S.writeButtonWrapper>
                <S.writeButtonWrapper> 
                    <Link to={'/ourToday'}><S.cancleWriteButton type="button" >취소</S.cancleWriteButton></Link>
                </S.writeButtonWrapper>
            </S.writeForm>
        </S.writeTodayContainer>
    );
};

export default WriteToday;