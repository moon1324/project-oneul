import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import OneulButton from '../../components/button/OneulButton'
import S from './style'
import {useNavigate} from 'react-router-dom'

const Secession = () => {
    const navigate = useNavigate();

    const goToMypage = () => {
        navigate("/myPage")
    }

    return (
        <>
            <S.MypageNav>
                <FontAwesomeIcon icon={faCircleXmark} onClick={goToMypage}/>
            </S.MypageNav>
            <S.PageTitle>
                <h2 className="secession">탈퇴 전 확인 하세요</h2>
            </S.PageTitle>   
            <S.SecessionCon>
                <p>정말 탈퇴 하시겠습니까?</p>
                <div>
                    <p>1. 프로필 및 작성하신 일지 내용은 모두 사라집니다</p>
                    <p>2.탈퇴로 인해 삭제된 정보는 복구가 불가합니다.</p>
                </div>
                <OneulButton variant={"red"} border={"default"} size={"large"} color={"white"}>탈퇴하기</OneulButton> 
            </S.SecessionCon>
        </>
    );
};

export default Secession;