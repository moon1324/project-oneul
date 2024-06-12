import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
import { motion } from "framer-motion";
import theme from "../../global/theme";

const S = {};

// 우리의 오늘 Container(in ourToday)
S.ourTodayContainer = styled.div`
    overflow: hidden;
`

// "우리의 오늘","나의 오늘","나의 오늘 쓰기" 버튼 전체를 감싸는 Wrapper(in OurDayButton)
S.contentButtonWrapper = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
`;

// "우리의 오늘","나의 오늘" 메뉴 탭 버튼 Container(in OurDayButton)
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

// "우리의 오늘","나의 오늘" 메뉴 탭 버튼을 직접감싸는 wrapper(in OurDayButton)
S.dayButtonWrapper = styled.div`
    width: 100px;
    height: 44px;
    display : flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

// "나의오늘 쓰기" 버튼을 감싸는 wrapper(in OurDayButton)
S.writingButtonWrapper = styled.div`
    width: 120px;
    height: 44px;
    margin: 0 16px 0 auto;
`;

// "나의 오늘 쓰기" 버튼(in OurDayButton)
S.writingButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: #4D4E89;
    color: #FFF;
    border: none;
    cursor: pointer;
`;

// 나의 오늘 및 우리의 오늘 게시글을 감싸는 Container(in OurDay)
S.cardPostContainer = styled.div`
    width: 320px;
    height: 320px;
    background-color: #FFF;
    border-radius: 20px;
    margin: 0 auto;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    ${flexCenterColumn}
`;

// 게시글의 프로필 이미지 및 username을 감싸는 Container(in OurDay)
S.postProfileContainer = styled.div`
    width : 100%;
    height: 20%;
    border-bottom: 1px solid #EEE;
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

// 게시글 본문 내용을 감싸는 wrapper(in OurDay)
S.postContentWrapper = styled.div`
    width : 100%;
    height: 65%;
`;

// 게시글의 Reaction이 차지할 공간을 만드는 Container(in OurDay)
S.reactionContainer = styled.div`
    width: 100%;
    height: 15%;
    border-top: 1px solid #EEE;
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
    & .comment path{
        color: #BEC1C5;
        font-size: 18px;
        cursor: pointer;
    }
    & .comment:hover path{
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
    & .heart path{
        color: #FF0000;
        font-size: 18px;
        cursor: pointer;
    }
    & .thumbsUp path{
        color: #0057FF;
        font-size: 18px;
        cursor: pointer;
    }
    & .smile path{
        color: #FDD608;
        font-size: 18px;
        cursor: pointer;
    }
    & .sad path{
        color: #0094FF;
        font-size: 18px;
        cursor: pointer;
    }
    & .angry path{
        color: #A50FEC;
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
    height: 45vh;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 20px;
    position: fixed;
    will-change: transform;
`;


// 댓글창에서 댓글의 수를 감싸는 wrapper(in CommentInsert)
S.commentCountWrapper = styled.div`
    width: 55px;
    height: 20px;
    margin: 15px 0 10px 16px;
`;

// 댓글 입력구간이 차지할 공간을 나타내는 container(in CommentInsert)
S.commentInputContainer = styled.div`
    width: 360px;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    & input::placeholder {
        text-align: center;
    }
`;

// 댓글 입력구간에서 입력란 옆의 user의 이미지를 감싸줄 wrapper(in CommentInsert)
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

// 댓글 입력란(in CommentInsert)
S.commentInput = styled.input`
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
    width: 35px;
    height: 60%;
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

// 각각의 댓글을 목록화하는 ul태그(in Reaction)
S.commentUnorderedList = styled.ul`
    list-style-type: none;
    ${flexCenterColumn}
`;

// 각각의 comment list를 감쌀 Container(in Comment)
S.commentContainer = styled.div`
    width: 360px;
    margin-top: 10px;
`
// 각 댓글의 user 정보(프로필 사진 및 이름)를 감싸는 wrapper(in Comment)
S.commentUserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 255px;
`
// 각 댓글의 user이름을 감싸는 p태그(in Comment)
S.commentUserName = styled.p`
    font-size: 14px;
    margin-left: 16px;
`

// 각 댓글의 내용을 감싸는 wrapper(in Comment)
S.commentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 360px;
    margin-top: 2px;
`;

// 각 댓글의 내용이 들어있는 input요소(in Comment)
S.comment = styled.input`
    width : 310px;
    margin-left: 16px;
    border: none;
    box-shadow: none;
`;

S.writeTodayContainer = styled.div`
    ${flexCenterColumn};
`

S.explanationWritingPostWrapper = styled.div`
    font-family: 'Pretendard';
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
`

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

S.writeForm = styled.form`
    ${flexCenterColumn};
`

S.todayText = styled.textarea`
    width: 255px;
    height: 280px;
    font-family: 'Pretendard';
    font-size: 15px;
    border: none;
    resize: none;
`

S.writeButtonWrapper = styled.div`
    width: 360px;
    height: 44px;
    margin-top: 20px;
    ${flexCenter};
`

S.completeWriteButton = styled.button`
    width: 260px;
    height: 100%;
    color: #fff;
    background-color: #4D4E89;
    border: none;
    cursor: pointer;
`

export default S;