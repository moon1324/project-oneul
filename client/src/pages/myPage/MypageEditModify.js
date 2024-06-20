import React, {useState,useRef} from 'react';
import S from './style';
import {Link,useNavigate} from 'react-router-dom';
import OneulInput from '../../components/input/OneulInput';
import OneulButton from '../../components/button/OneulButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { updateSignUpData, resetSignUpData } from "../../modules/signUp";

const MypageEditModify = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.login.currentUser);
    const {register, handleSubmit, formState: {isSubmitting}, setValue} = useForm({mode: "onChange"});
    const navigate = useNavigate();

    const [avatarURL, setAvatarURL] = useState(currentUser.profileImg ? process.env.PUBLIC_URL + currentUser.profileImg : '');
    const fileUploadRef = useRef();

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.click();
    }

    const uploadImageDisplay = async () => {
        const uploadedFile = fileUploadRef.current.files[0];
        const cachedURL = URL.createObjectURL(uploadedFile);
        setAvatarURL(cachedURL);
    }

    const onSubmit = async (data) => {
    //     const formData = new FormData();
    //     formData.append('email', currentUser.email);
    //     formData.append('password', data.password);
    //     formData.append('name', data.name);
    //     formData.append('mobile', data.mobile);
    //     formData.append('nickname', data.nickname);
    //     formData.append('statusMessage', data.statusMessage);
    //     if (fileUploadRef.current.files[0]) {
    //         formData.append('profileImg', fileUploadRef.current.files[0]);
    //     }
    //     formData.append('token', currentUser.token);
    //    console.log(formData)
    //    console.log(data)
        try{
            const response  = await fetch("http://localhost:8000/user/update", {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: currentUser.email,
                    password : data.password,
                    mobile : data.mobile,
                    name: data.name,
                    nickname : data.nickname,
                    statusMessage : data.statusMessage,
                    profileImg : data.profileImg,
                }),
            });
            console.log(response, "response data");

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || "modifying failed");
            }
            window.location.replace("/mypage")
            navigate("/mypage");
        }catch (error) {
            console.error("Error during sign-up:", error);
        }
        NavigationPreloadManager()
    };
    

    return (
        <S.Form action="/user/upadate" onSubmit={handleSubmit(onSubmit)}>
            <S.PageTitle>
                <h2>프로필 변경</h2>
            </S.PageTitle>   
            <S.ProfilePictureWrapper>
                <div className="pictureBox">
                    <img src={avatarURL} alt="Avatar" />
                    <form id="form" encType="multipart/form-data">
                        <button type="button" onClick={handleImageUpload} className="uploadBtn">
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </button>
                        <input type="file" id="file" ref={fileUploadRef} onChange={uploadImageDisplay} hidden />
                    </form>
                </div>
            </S.ProfilePictureWrapper>
            <S.InputContainer>
                <S.InputWrapper>
                    <p>이메일을 변경해주세요</p>
                    <OneulInput name="email" value={currentUser.email} readOnly />
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>비밀번호을 변경해주세요</p>
                    <OneulInput type="password" name="currentPassword" defaultValue={currentUser.password} {...register("password")} onBlur={(e) => setValue('password',e.target.value)}/>
                </S.InputWrapper>
                {/* <S.InputWrapper>
                    <p>비밀번호을 확인해주세요</p>
                    <OneulInput type="password" name="passwordCheck" {...register("passwordCheck")} />
                </S.InputWrapper> */}
                <S.InputWrapper>
                    <p>이름을 변경해주세요</p>
                    <OneulInput name="name" defaultValue={currentUser.name} {...register("name")} onBlur={(e) => setValue('name',e.target.value)}/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>전화번호를 변경해주세요</p>
                    <OneulInput name="mobile" defaultValue={currentUser.mobile} {...register("mobile")} onBlur={(e) => setValue('mobile',e.target.value)} />
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>닉네임을 변경해주세요</p>
                    <OneulInput name="nickname" defaultValue={currentUser.nickname} {...register("nickname")} onBlur={(e) => setValue('nickname',e.target.value)}/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <p>상태메세지를 변경해주세요</p>
                    <OneulInput name="statusMessage" defaultValue={currentUser.statusMessage} {...register("statusMessage")} onBlur={(e) => setValue('statusMessage',e.target.value)} />
                </S.InputWrapper>
            </S.InputContainer>
            <S.buttonWrapper>
                <OneulButton type="submit" variant="indigo" color="white" size="large" border="default" disabled={isSubmitting}>
                    수정 완료
                </OneulButton>
            </S.buttonWrapper>
        </S.Form>
    );
};

export default MypageEditModify;