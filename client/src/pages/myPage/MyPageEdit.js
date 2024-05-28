import React from 'react';
import S from './style'
import OneulInput from '../../components/input/OneulInput';
import OneulButton from '../../components/button/OneulButton';

const MyPageEdit = () => {
    return (
        <>
            <S.PageTitle>
                <h2>프로필 변경</h2>
            </S.PageTitle>   
            <S.ProfilePictureWrapper>
                <div className="pictureBox">
                    <img src={process.env.PUBLIC_URL + '/images/mypage/profile_picture.svg'}/>
                </div>
            </S.ProfilePictureWrapper>
            <S.InputContainer>
                <S.InputWrapper>
                    <p>이메일을 변경해주세요</p>
                    <OneulInput name="email" id="email"/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>이름을 변경해주세요</p>
                    <OneulInput name="name" id="name"/> 
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>전화번호을 변경해주세요</p>
                    <OneulInput name="phone" id="phone"/> 
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>닉네임을 변경해주세요</p>
                    <OneulInput name="nickname" id="nickname"/> 
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>상태메세지을 변경해주세요</p>
                    <OneulInput name="statu-message" id="statu-message"/> 
                </S.InputWrapper>
                <OneulButton variant="indigo" color="white" border="default">수정완료</OneulButton>
            </S.InputContainer>
        </>
    );
};

export default MyPageEdit;