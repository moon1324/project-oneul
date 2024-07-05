import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
import { motion } from "framer-motion";
import theme from "../../global/theme";

const S = {};

S.Wrapper = styled.div`
        width: 100%;
        margin-top: 20px;
`

S.searchOurDayWrapper = styled.div`
        width: 100%;
        margin-top: 20px;
        margin-bottom: 70px;
`

S.header = styled.div`
    width: 100%;
    display: flex;
`

S.searchSection = styled.h4`
    margin-left: 10px;
    margin-right: auto;
    font-family: 'Pretendard';
`

S.viewAll = styled.p`
    margin-right: 10px;
    margin-left: auto;
    cursor: pointer;
`

S.searchContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    ${flexCenterColumn}
`
S.myMindContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

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
    border-bottom: 1px solid #EEEEEE;
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
    position: relative;
    list-style-type: none;
    ${flexCenterColumn}
`;

// 각각의 comment list를 감쌀 Container(in Comment)
S.commentContainer = styled.div`
    position: relative;
    width: 360px;
    margin-top: 10px;
`
// 각 댓글의 user 정보(프로필 사진 및 이름)를 감싸는 wrapper(in Comment)
S.commentUserInfoWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 255px;
`
// 각 댓글의 user이름을 감싸는 p태그(in Comment)
S.commentUserName = styled.p`
    position: relative;
    font-size: 14px;
    margin-left: 16px;
`

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
    width : 310px;
    margin-left: 16px;
    border: none;
    box-shadow: none;
`;

S.ContentWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    & .cloudMoonIcon{
        path{
            color:#5487D3;
        }
    }
`

// 검색 결과 존재 x시 보여주는 컴포넌트를 감싸는 Container(in EmptyPostAlarm)
S.searchEmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
` 

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
`

S.searchEmptyTextWrapper = styled.div`
    ${flexCenterColumn};
    width: 180px;
    height: 95px;
`

S.searchEmptyText = styled.p`
    font-family: 'Pretendard';
    font-size: 16px;
    color: #4D4E89;
    text-align: center;
`



export default S;