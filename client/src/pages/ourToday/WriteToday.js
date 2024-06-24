import React, { useState } from 'react';
import S from './style';
import useTextarea from '../../hooks/useTextarea';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const WriteToday = () => {
    const navigate = useNavigate()
    const [postValue, setPostValue, handlePostChange] = useTextarea();
    const {register, handleSubmit, getValues, formState : { isSubmitting, isSubmitted, errors }} = useForm({mode : "onChange"})

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/post/write', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    content: postValue,
                    postProfileImg: data.profileImg,
                    postNickname: data.nickname,
                    like: [],
                    heart: [],
                    smile: [],
                    angry: [],
                    sad: [],
                    comment: [] })
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
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
            <S.writeForm onSubmit={handleSubmit(onSubmit)}>
                <S.explanationWritingPostWrapper>
                    나의 오늘을 다른사람과 나눠볼까요?
                </S.explanationWritingPostWrapper>
                <S.textWrapper>
                    <S.todayText className='writeTodayText' 
                        value={postValue}
                        onChange={handlePostChange}
                        {...register('content', { required: true })}    
                    />
                </S.textWrapper>
                <S.writeButtonWrapper>
                    <S.completeWriteButton type="submit" disabled={isSubmitting}>작성 완료</S.completeWriteButton>
                </S.writeButtonWrapper>
            </S.writeForm>
        </S.writeTodayContainer>
    );
};

export default WriteToday;