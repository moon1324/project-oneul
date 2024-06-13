import React, {useState,useRef} from 'react';
import S from './style';
import OneulInput from '../../components/input/OneulInput';
import OneulButton from '../../components/button/OneulButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {useForm} from 'react-hook-form';


const MyPageEdit = () => {
    
    const {register, handleSubmit, getValues, formState : {isSubmitting, isSubmitted, errors}} = useForm({ mode : "onChange" })
    
    const [avatarURL,setAvatarURL] = useState(process.env.PUBLIC_URL + '/images/mypage/profile_picture.svg');
    const fileUploadRef = useRef();

    const handleImageUpload = (event)=>{
        event.preventDefault();
        fileUploadRef.current.click();
    }

    const uploadImageDisplay = async() => {
        const uploadedFile = fileUploadRef.current.files[0];
        const cachedURL = URL.createObjectURL(uploadedFile);
        setAvatarURL(cachedURL);
    }

    return (
        <form onSubmit ={
            handleSubmit(async (data) => {
                console.log(data)
                const {file,email,name,phone,nickname,statusMessage}
                
            })
        }>
            <S.PageTitle>
                <h2>프로필 변경</h2>
            </S.PageTitle>   
            <S.ProfilePictureWrapper>
                <div className="pictureBox">
                    <img src={avatarURL} alt="Avatar"/>
                    <form id="form" encType="multipart/form-data">
                        <button type="submit" onClick={handleImageUpload} className="uploadBtn">
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </button>
                        <input type="file" id="file" ref={fileUploadRef} onChange={uploadImageDisplay} hidden/>
                    </form>
                </div>
            </S.ProfilePictureWrapper>
            <S.InputContainer>
                <S.InputWrapper>
                    <p>이메일을 변경해주세요</p>
                    <OneulInput name="email" id="email" readonly/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>비밀번호를 변경해주세요</p>
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
                    <OneulInput name="statuMessage" id="statuMessage"/> 
                </S.InputWrapper>
            </S.InputContainer>
            <S.buttonWrapper>
                <OneulButton variant="indigo" color="white" size="large" border="default">수정완료</OneulButton>
            </S.buttonWrapper>
        </form>

    );
};

export default MyPageEdit;