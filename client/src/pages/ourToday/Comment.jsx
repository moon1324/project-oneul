import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faPenToSquare, faTrash, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import S from './style';

// 변수로 {comment, getComments, setComments, isCommentUpdate, setIsCommentUpdate}을 받을 것
const Comment = () => {

    // const { id, commentContent } = comment;
    // const [isChecked, setIsChecked] = useState(comment.isChecked);
    // //수정 중인지 아닌지에 대한 상태 변화를 준비하기 위해 useState사용
    // const [isEdit, setIsEdit] = useState(false);
    // const [inputValue, setInputValue] = useState(commentContent);

    // const handleEdit = () => {
    //     setIsEdit(!isEdit)
    // }
    // console.log(isEdit);  // isEdit의 현재 상태를 확인하기 위해 출력해본다.

    // // title 수정
    // const onChangeInput = (e) => {
    //     //e.target.value의 값이(즉, 유저가 입력한 내용이) 잘 들어오는지 확인작업
    //     // console.log(e.target.value);
    //     setInputValue(e.target.value)
    // }

    // const onChangeUpdateComment = async () => {
    //  // console.log("정확히 수정이 완료되었습니다.");
    //  // fetch PUT 메서드를 이용한 value값 수정
    //     await fetch(`http://localhost:3000/ourToday/${id}`, {
    //                 method : 'PUT',
    //                 headers : {
    //                     'Content-Type' : 'application/json'    
    //                 },
    //                 body: JSON.strigify({
    //                     ...comment,
    //                     commentContent : inputValue
    //                 })
    //     }).then((response) => {
    //         console.log(response, '리스폰스 데이터')
    //         if(!response.ok) return console.log(`error ${response}`)
    //         setIsEdit(!isEdit)      
    //         setIsCommentUpdate(!isCommentUpdate) 
    //         // getComments().then(setComments)  => 클릭했을 때 수정이 가능하도록 
    //     })
    // }

    // CRUD
    // UPDATE, 체크리스트 수정
    // const handleChecked = async () => {
    //     // setIsChecked(!isChecked)
    //     await fetch(`http://localhost:3000/ourToday/${id}`, {
    //            method : 'PUT',
    //            headers : {
    //                'Content-Type' : 'application/json'
    //            },
    //            body: JSON.stringify({
    //                ...todo,
    //                isChecked: !isChecked
    //            })
    //     }).then((response)=>{
    //            console.log(response)
    //            if(!response.ok) return console.log(`error ${response}`)
    //            setIsChecked(!isChecked)
    //        })
    // }

    // DELETE, comment 삭제
    // const handleRemoveComment = async () => {
    //     if(window.confirm('정말로 삭제하시겠습니까?')){
    //         console.log(id)
    //         // fetch DELETE 요청
    //         // 해당 아이디 삭제
    //         await fetch(`http://localhost:4000/ourToday${id}`, { 
    //             method : 'DELETE'
    //         }).then((response)=>{
    //                if(response.ok) {
    //                    console.log('정상적으로 삭제가 완료 되었습니다.', response);
    //                    getComments().then(setComments)
    //                }
    //            })
    //     }
    // }

   
    return (
        <S.commentContainer>
            <li>
                <S.commentUserInfoWrapper>
                    <S.commentThumbnailWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/profile.jpg"} alt="profile-img" />
                    </S.commentThumbnailWrapper>
                    <S.commentNameAndDate>
                        <S.commentUserName>Michael</S.commentUserName>
                        <S.commentDate>2024년 6월 20일</S.commentDate>
                    </S.commentNameAndDate>
                    <S.correctionButtonContainer>
                    <S.correctionButtonWrapper>
                        <S.correctionButton><FontAwesomeIcon icon={faPenToSquare} className='pen' /></S.correctionButton>
                    </S.correctionButtonWrapper>
                    <S.correctionButtonWrapper>
                        <S.correctionButton><FontAwesomeIcon icon={faTrashCan} className='trash' /></S.correctionButton>
                    </S.correctionButtonWrapper>
                </S.correctionButtonContainer>
                </S.commentUserInfoWrapper>
                <S.commentWrapper>
                    <S.comment type="text" className='comment' value={"이게 최선입니까? 확실해요?"} />
                </S.commentWrapper>
                {/* <div>
                <input type="checkbox" checked={isChecked} onChange={handleChecked}/>   
                { isEdit ? (
                    <>
                        <input className='update-input' type='text' value={inputValue}/>
                    </>
                ):(
                    <>
                        <div className={ isChecked ? "complete" : ""}>
                            {commentContent}
                        </div>
                    </>
                )}
                </div> */}
                {/* <div>
                { isEdit ? (
                    <>
                        <button onClick={onChangeUpdateComment}><FontAwesomeIcon icon={faCheck} className='check'/></button>
                        <button onClick={handleEdit}><FontAwesomeIcon icon={faX} className='exit'/></button> 
                    </>
                ) : (
                    <>
                        <button onClick={handleEdit}><FontAwesomeIcon icon={faPen} className='pen'/></button>
                    </>
                )}
                    <button onClick={handleRemoveComment}><FontAwesomeIcon icon={faTrash} className='trash'/></button>
                </div> */}
            </li>
        </S.commentContainer>
    );
};

export default Comment;