import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
import { motion } from "framer-motion";
import theme from "../../global/theme";

const S = {};

// =========================OurDayButton==============================
// "우리의 오늘","나의 오늘","나의 오늘 쓰기" 버튼 전체를 감싸는 Wrapper
S.contentButtonWrapper = styled.div`
    width: 100%;
    height: 90px;
    padding-top: 23px;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    background-color: #EDF3FA;
`;

// "우리의 오늘","나의 오늘" 메뉴 탭 버튼 Container
S.buttonsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 44px;
    & .activeTab {
        color: #5487D3;
        border-bottom: 4px solid #5487D3;
    }
`;

// "우리의 오늘","나의 오늘" 메뉴 탭 버튼을 직접감싸는 wrapper
S.dayButtonWrapper = styled.div`
    width: 100px;
    height: 44px;
    display : flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

// "나의오늘 쓰기" 버튼을 감싸는 wrapper
S.writingButtonWrapper = styled.div`
    width: 120px;
    height: 50px;
    margin: 0 16px 0 auto;
`;

// "나의 오늘 쓰기" 버튼
S.writingButton = styled.button`
    width: 120px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4D4E89;
    color: #FFF;
    border: none;
    cursor: pointer;
`;

// =========================OurTodayCardPost==============================
// 나의 오늘 및 우리의 오늘 각 게시글을 감싸는 Container
S.cardPostContainer = styled.div`
    width: 320px;
    height: 320px;
    background-color: #FFF;
    border-radius: 20px;
    margin: 0 auto;
    box-shadow: 0.1px 0.1px 0.1px rgba(0, 0, 0, 0.25);
    ${flexCenterColumn}
    margin-bottom: 20px;
`;


// 게시글 게시자의 프로필 이미지 및 username을 감싸는 Container
S.postProfileContainer = styled.div`
    width : 100%;
    height: 20%;
    border-bottom: 1px solid #EEE;
    display: flex;
    align-items: center;
`;

// 프로필 이미지를 감싸는 wrapper
S.ThumbnailWrapper = styled.div`
    width: 36px;
    height: 36px;
    margin-left: 16px;
    border-radius: 50%;
    overflow: hidden;
    
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

// 프로필 userName을 감싸는 wrapper
S.userNameWrapper = styled.div`
    font-weight: ${theme.FONT_WEIGHT.regular};
    margin-left: 20px;
`;

// 게시글의 수정 및 삭제 버튼을 담고 있는 container
S.correctionButtonContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 10px;
`

// 게시글의 수정 및 삭제버튼을 바로 감싸고 있는 wrapper
S.correctionButtonWrapper = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

// 수정 및 삭제 버튼을 스타일링한 styled component(button)
S.correctionButton = styled.button`
        cursor: pointer;
        border: none;
        background: none;
        font-size: 16px;
        box-shadow: none;

        & .pen path{
            color : #142146;
        }
        & .pen:hover path{
            color : #5f81f7;
        }

        & .trash path{
            color: #142146;
        }
        & .trash:hover path{
            color: #ec6863;
        }
        & .check path{
            color: #142146;
        }
        & .exit path{
            color: #142146;
        }
`

// 게시글 본문 내용을 감싸는 wrapper
S.postContentWrapper = styled.div`
    width : 100%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// 게시글의 본문 내용을 담고 있는 textarea
S.todayPostText = styled.textarea`
    width: 300px;
    height: 180px;
    font-family: 'Pretendard';
    font-size: 15px;
    border: none;
    resize: none;
`

// 게시글 수정 상태시 버튼을 가지고 있는 container
S.updateButtonContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
`

// 게시글 수정 상태시의 button을 바로 감싸고 있는 wrapper
S.updateButtonWrapper =styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

// 게시글의 수정 상태시 수정완료 버튼
S.updateButton = styled.button`
    border-radius: 20px;
    border: none;
    width: 100px;
    height: 70%;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    background-color: #5487D3;
    cursor: pointer;
    font-size: 18px;
    & .check path{
        color: white;
    }
`
// 게시글의 수정 상태시 수정취소 버튼
S.cancelUpdateButton = styled.button`
    border-radius: 20px;
    border: none;
    width: 100px;
    height: 70%;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    background-color: #EE6161;
    cursor: pointer;
    font-size: 18px;
    & .exit path{
        color: white;
    }
`

// 게시글의 Reaction이 차지할 공간을 만드는 Container
S.reactionContainer = styled.div`
    width: 100%;
    height: 15%;
    border-top: 1px solid #EEE;
    display: flex;
    align-items: center;
`;

// 네비게이션 바만큼의 공간을 차지하여 마지막 게시글까지 다 보여주게 할 gap
S.gap = styled.div`
    width: 100%;
    height: 70px;
`

// =========================Reaction==============================
// Reaction(좋아요, 하트, 화남,... 댓글 등)을 감싸는 Wrapper
S.reactionWrapper = styled.div`
    width: 100%;
    height: 15%;
    ${flexCenter}
`;


// 댓글 icon을 담고 있는 Container
S.commentIconContainer = styled.div`
    width: 20%;
    height: 20px;
    margin-right: auto;
    display: flex;
    align-items: center;
    font-size: 18px;
    & .comment path{
        color: #BEC1C5;
        cursor: pointer;
    }
    & .comment:hover path{
        color: #555657;
        cursor: pointer;
    }
`;

// 댓글 icon을 직접적으로 감싸는 wrapper
S.commentIconWrapper = styled.div`
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.commentCount = styled.div`
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`

// emotion(좋아요, 하트, 화남, 슬픔 등)이 차지할 공간을 마련할 Container
S.emotionContainer = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    align-items: center;
`;

// emotion을 감싸는 Wrapper
S.emotionWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    margin-left: auto;
    font-size: 18px;
    & .heart path{
        color: #FF0000;
        cursor: pointer;
    }
    & .thumbsUp path{
        color: #0057FF;
        font-size: 18px;
        cursor: pointer;
    }
    & .smile path{
        color: #FDD608;
        cursor: pointer;
    }
    & .sad path{
        color: #0094FF;
        cursor: pointer;
    }
    & .angry path{
        color: #A50FEC;
        cursor: pointer;
    }
`;   

// emotion을 목록화해줄 list
S.emotionList = styled.li`
    display: flex;
    margin-right: 5px;
    padding: 0;
`;

// 유저가 클릭한 emotion의 수를 감싸는 wrapper
S.reactionCountWrapper = styled.div`
    width: 18px;
    height: 18px;
    text-align: center;
`;



// 댓글 icon클릭시 나타날 댓글창
S.commentWindow = styled(motion.div)`
    width: 360px;
    height: 350px;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 20px;
    position: fixed;
    bottom: 95px;
    overflow: scroll;
    bottom: 16%;
    &::-webkit-scrollbar{
        width: 8px;
        border-radius: 10px
    }
`;

// =========================CommentInsert==============================
// 댓글 입력창을 담는 container
S.commentInsertContainer = styled.div`
    width: 360px;
    height: 100px;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #EEEEEE;
    background-color: #fff;
`

// 댓글창에서 댓글의 수를 감싸는 wrapper
S.commentCountWrapper = styled.div`
    width: 55px;
    height: 20px;
    padding: 15px 0 0 16px;
`;

// 댓글 입력구간이 차지할 공간을 나타내는 container
S.commentInputContainer = styled.div`
    width: 360px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    & input::placeholder {
        text-align: center;
    }
`;

// 댓글 입력구간에서 입력란 옆의 user의 이미지를 감싸줄 wrapper
S.commentThumbnailWrapper = styled.div`
    width: 36px;
    height: 36px;
    margin-left: 16px;
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

// 댓글 입력 input태그를 감쌀 wrapper
S.commentInputWrapper = styled.div`
    width: 270px;
    height: 60%;
    margin-left: 10px;
    display: flex;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 20px;
`

// 댓글 입력란
S.commentInput = styled.input`
    width: 235px;
    height: 100%;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 20px;
`;

// 댓글 입력시 누를 수 있는 button
S.commentForwardButton = styled.button`
    width: 35px;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4D4E89;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    & .paperPlane path {
        color: #FFF;
        font-size: 16px;
    }
`;

// =========================CommentContainer==============================
// 각각의 댓글을 목록화하는 ul태그
S.commentUnorderedList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
`;

// =========================Comment==============================
// 각각의 comment list를 감쌀 Container
S.commentContainer = styled.div`
    width: 360px;
    margin-top: 10px;
`
// 각 댓글의 user 정보(프로필 사진 및 이름)를 감싸는 wrapper
S.commentUserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
// 각 댓글의 작성자의 이름과 작성시간을 감쌀 wrapper
S.commentNameAndDate = styled.div`
    display: flex;
    align-items: center;
`

// 각 댓글의 user이름을 감싸는 p태그
S.commentUserName = styled.p`
    font-size: 14px;
    margin-left: 16px;
`

// 각 댓글의 작성시간을 감싸는 p태그
S.commentDate = styled.p`
    font-size: 8px;
    color: #BEC1C5;
    margin-left: 16px;
`


// 각 댓글의 내용을 감싸는 wrapper
S.commentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 360px;
    margin-top: 5px;
    margin-left: 70px;
    margin-bottom: 20px;
`;

// 각 댓글의 내용이 들어있는 input요소
S.comment = styled.input`
    width : 270px;
    height: 25px;
    margin-left: 65px;
    border: none;
    box-shadow: none;
`;

// =========================WriteToday==============================
// 나의 오늘 쓰기 상태에서 content를 담은 container
S.writeTodayContainer = styled.div`
    ${flexCenterColumn};
`

// 무엇을 작성할지에 대한 설명을 담은 div태그
S.explanationWritingPostWrapper = styled.div`
    font-family: 'Pretendard';
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
`

// 나의 오늘 쓰기 내용을 작성하는 textarea를 감쌀 wrapper
S.textWrapper = styled.div`
    width: 320px;
    height: 320px;
    margin-top: 20px;
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    ${flexCenterColumn};
    & .writeTodayText::-webkit-scrollbar-thumb {
        border-radius: 20px;
    }
`

// 나의 오늘을 쓰고 보내기 위한 form 태그
S.writeForm = styled.form`
    ${flexCenterColumn};
`

// 나의 오늘을 작성할 textarea
S.todayText = styled.textarea`
    width: 255px;
    height: 280px;
    font-family: 'Pretendard';
    font-size: 15px;
    border: none;
    resize: none;
`

// 나의 오늘 작성을 완료 또는 취소할 버튼을 감싸는 wrapper
S.writeButtonWrapper = styled.div`
    width: 360px;
    height: 44px;
    margin-top: 10px;
    ${flexCenter};
`

// 나의 오늘 작성을 완료할 버튼
S.completeWriteButton = styled.button`
    width: 260px;
    height: 100%;
    color: #fff;
    background-color: #4D4E89;
    border: none;
    cursor: pointer;
`

// 나의 오늘 작성을 취소할 버튼
S.cancleWriteButton = styled.button`
    width: 260px;
    height: 44px;
    color: #fff;
    background-color: #EE6161;
    border: none;
    cursor: pointer;
`

// *삭제 모달창 관련 styled component
// modal 창의 관련 content를 담을 container
S.modalContainer = styled.div`
    width: 360px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`

// 모달창을 직접 감싸는 wrapper
S.modalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    top: 330px;
    width: 320px;
    height: 170px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`

// 모달창의 제목을 담을 h3
S.modalTitle = styled.h3`
    position: absolute;
    top: 15px;
    font-size: 20px;
    font-weight: 600;
`

// 삭제 모달창의 자세한 설명을 감싸는 wrapper
S.modalDescriptionWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

// 삭제 모달창의 내용을 직접 감싸는 p태그
S.modalDescription = styled.p`
    text-align: center;
    color: #EE6161;
`

// 삭제 모달창의 취소와 확인 버튼을 담고있는 container
S.modalButtonContainer = styled.div`
    width : 100%;
    height: 20%;
    display: flex;
    align-items: center;
`

// 삭제 모달창의 버튼을 직접 감싸고 있는 wrapper
S.modalButtonWrapper = styled.div`
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
`

// 삭제 모달창의 취소 버튼
S.modalCancelButton = styled.button`
    background-color: #5487D3;
    border: 2px #5487d3 solid;
    width: 100px;
    height: 44px;
    color: #FFFFFF;
    cursor: pointer;
`

// 삭제 모달창의 확인 버튼
S.modalDeleteButton = styled.button`
    background-color: #EE6161;
    border: 2px #ee6161 solid;
    width: 100px;
    height: 44px;
    color: #FFFFFF;
    cursor: pointer;
`

export default S;