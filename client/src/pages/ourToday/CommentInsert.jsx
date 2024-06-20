import React from 'react';
import S from './style';
import useInput from '../../hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// 변수로 {comments, isCommentUpdate, setIsCommentUpdate} 받을 것
const CommentInsert = () => {
    const [value, setValue, onChangeValue] = useInput("")

    // CRUD
    // POST
    // const onKeyDownAddComment = async (e) => {
    //     if(e.key === 'Enter'){
    //         if(!window.confirm('이대로 추가하시겠습니까?')) return;
    //         await fetch('http://localhost:3000/ourToday', {
    //             method : 'POST',
    //             headers : {
    //                 'Content-type' : 'application/json'
    //             }, 
    //             body : JSON.stringify({
    //                 id : (comments.length+1).toString(),
    //                 commentContent : value,
    //                 isChecked : false   
    //             })
    //         }).then((response) => {
    //             if(!response.ok) return console.log(`Error ${response}`)
    //             setIsCommentUpdate(!isCommentUpdate)
    //             setValue("")                 
    //         })
    //     }
    // }
    
    // const clickAddComment = async (e) => {
    //     if(!window.confirm('이대로 추가하시겠습니까?')) return;
    //         await fetch('http://localhost:3000/ourToday', {
    //             method : 'POST',
    //             headers : {
    //                 'Content-type' : 'application/json'
    //             }, 
    //             body : JSON.stringify({
    //                 id : (comments.length+1).toString(),
    //                 commentContent : value,
    //                 isChecked : false   
    //             })
    //         }).then((response) => {
    //             if(!response.ok) return console.log(`Error ${response}`)
    //             setIsCommentUpdate(!isCommentUpdate)
    //             setValue("")                 
    //         })
    // }

    return (
        <>
            <S.commentCountWrapper>
                <span>댓글</span>
                <span>1</span>
            </S.commentCountWrapper>
            <S.commentInputContainer>
                <S.commentThumbnailWrapper>
                    <img src={process.env.PUBLIC_URL + "global/images/profile.jpg"} alt="profile-img" />
                </S.commentThumbnailWrapper>
                <S.commentInputWrapper>
                    {/* S.commentInput에 onChange={onChangeValue} onKeyDown={onKeyDownAddComment} 이벤트 및 value={value} 추가 */}
                    <S.commentInput type='text' placeholder='다른사람과 소통해볼까요?' 
                        value={value}
                        onChange={onChangeValue}
                    />
                    {/* S.commentForwardButton에 onClick={clickAddComment} 추가  */}
                    <S.commentForwardButton><FontAwesomeIcon icon={faPaperPlane} className='paperPlane' /></S.commentForwardButton>
                </S.commentInputWrapper>
            </S.commentInputContainer>
        </>
    );
};

export default CommentInsert;