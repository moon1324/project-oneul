import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
import { motion } from "framer-motion";
import theme from "../../global/theme";

const S = {};

S.Wrapper = styled.div`
    width: 100%;
    margin-top: 20px;
`;

S.searchOurDayWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 70px;
`;

S.header = styled.div`
    width: 100%;
    display: flex;
`;

S.searchSection = styled.h4`
    margin-left: 10px;
    margin-right: auto;
    font-family: "Pretendard";
`;

S.viewAll = styled.p`
    margin-right: 10px;
    margin-left: auto;
    cursor: pointer;
`;

S.searchContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    ${flexCenterColumn}
`;
S.myMindContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

// 나의 오늘 및 우리의 오늘 게시글을 감싸는 Container(in OurDay)
S.cardPostContainer = styled.div`
    width: 320px;
    height: 320px;
    background-color: #fff;
    border-radius: 20px;
    margin: 0 auto 20px;
    box-shadow: 0.1px 0.1px 0.1px rgba(0, 0, 0, 0.25);
    ${flexCenterColumn}
`;

// 게시글의 프로필 이미지 및 username을 감싸는 Container(in OurDay)
S.postProfileContainer = styled.div`
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
`;




// 프로필 이미지를 감싸는 wrapper(in OurDay)
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

// 프로필 userName을 감싸는 wrapper(in OurDay)
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

// 게시글 본문 내용을 감싸는 wrapper(in OurDay)
S.postContentWrapper = styled.div`
    width: 300px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.postContentContainer = styled.div`
    width : 100%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    & textarea:focus {
        outline: none;
    }
`

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

// 게시글의 Reaction이 차지할 공간을 만드는 Container(in OurDay)
S.reactionContainer = styled.div`
    width: 100%;
    height: 15%;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
`;

// Reaction(좋아요, 하트, 화남,... 댓글 등)을 감싸는 Wrapper(in Reaction)
S.reactionWrapper = styled.div`
    width: 100%;
    height: 15%;
    ${flexCenter}
`;

// 댓글 icon을 감싸는 Container(in Reaction)
S.commentIconContainer = styled.div`
    width: 20%;
    height: 20px;
    margin-right: auto;
    display: flex;
    align-items: center;
    & .comment path {
        color: #bec1c5;
        font-size: 18px;
        cursor: pointer;
    }
    & .comment:hover path {
        color: #555657;
        font-size: 18px;
        cursor: pointer;
    }
`;

// 댓글 icon을 직접적으로 감싸는 wrapper(in Reaction)
S.commentIconWrapper = styled.div`
    margin-left: 16px;
`;

// emotion(좋아요, 하트, 화남, 슬픔 등)이 차지할 공간을 마련할 Container(in Reaction)
S.emotionContainer = styled.div`
    width: 80%;
    height: 20px;
    display: flex;
    align-items: center;
`;

// emotion을 감싸는 Wrapper(in Reaction)
S.emotionWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    margin-left: auto;
    & .heart path {
        color: #ff0000;
        font-size: 18px;
        cursor: pointer;
    }
    & .thumbsUp path {
        color: #0057ff;
        font-size: 18px;
        cursor: pointer;
    }
    & .smile path {
        color: #fdd608;
        font-size: 18px;
        cursor: pointer;
    }
    & .sad path {
        color: #0094ff;
        font-size: 18px;
        cursor: pointer;
    }
    & .angry path {
        color: #a50fec;
        font-size: 18px;
        cursor: pointer;
    }
`;

// emotion을 목록화해줄 list(in Reaction)
S.emotionList = styled.li`
    display: flex;
    margin-right: 5px;
    padding: 0;
`;

// 유저가 클릭한 emotion의 수를 감싸는 wrapper(in Reaction)
S.reactionCountWrapper = styled.div`
    width: 17px;
    height: 17px;
    text-align: center;
`;

// 댓글 icon클릭시 나타날 댓글창(in Reaction)
S.commentWindow = styled(motion.div)`
    width: 360px;
    height: 350px;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 20px;
    position: fixed;
    bottom: 16%;
    will-change: transform;
`;

// 댓글창에서 댓글의 수를 감싸는 wrapper(in CommentInsert)
S.commentCountWrapper = styled.div`
    position: relative;
    width: 55px;
    height: 20px;
    margin: 15px 0 10px 16px;
`;

// 댓글 입력구간이 차지할 공간을 나타내는 container(in CommentInsert)
S.commentInputContainer = styled.div`
    position: relative;
    width: 360px;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    & input::placeholder {
        text-align: center;
    }
`;

// 댓글 입력구간에서 입력란 옆의 user의 이미지를 감싸줄 wrapper(in CommentInsert)
S.commentThumbnailWrapper = styled.div`
    position: relative;
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

// 댓글 입력란(in CommentInsert)
S.commentInput = styled.input`
    position: relative;
    width: 235px;
    height: 60%;
    margin-left: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

// 댓글 입력시 누를 수 있는 button(in CommentInsert)
S.commentForwardButton = styled.button`
    position: relative;
    width: 35px;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4d4e89;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    & .paperPlane path {
        color: #fff;
        font-size: 16px;
    }
`;

// 각각의 댓글을 목록화하는 ul태그(in Reaction)
S.commentUnorderedList = styled.ul`
    position: relative;
    list-style-type: none;
    ${flexCenterColumn}
`;

// 각각의 comment list를 감쌀 Container(in Comment)
S.commentContainer = styled.div`
    position: relative;
    width: 360px;
    margin-top: 10px;
`;
// 각 댓글의 user 정보(프로필 사진 및 이름)를 감싸는 wrapper(in Comment)
S.commentUserInfoWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 255px;
`;
// 각 댓글의 user이름을 감싸는 p태그(in Comment)
S.commentUserName = styled.p`
    position: relative;
    font-size: 14px;
    margin-left: 16px;
`;

// 각 댓글의 내용을 감싸는 wrapper(in Comment)
S.commentWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 360px;
    margin-top: 2px;
`;

// 각 댓글의 내용이 들어있는 input요소(in Comment)
S.comment = styled.input`
    position: relative;
    width: 310px;
    margin-left: 16px;
    border: none;
    box-shadow: none;
`;

S.ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    & .cloudMoonIcon {
        path {
            color: #5487d3;
        }
    }
`;

// 검색 결과 존재 x시 보여주는 컴포넌트를 감싸는 Container(in EmptyPostAlarm)
S.searchEmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.searchEmptyIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    & img {
        width: 100%;
        height: 100%;
    }
`;

S.searchEmptyTextWrapper = styled.div`
    ${flexCenterColumn};
    width: 180px;
    height: 95px;
`;

S.searchEmptyText = styled.p`
    font-family: "Pretendard";
    font-size: 16px;
    color: #4d4e89;
    text-align: center;
`;

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

export default S;
