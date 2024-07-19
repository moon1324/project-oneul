import React, { useEffect, useState } from "react";
import Reaction from "./Reaction";
import S from "./style";
import EmptyPostAlarm from "./EmptyPostAlarm";

const SearchPost = ({ posts, post }) => {
    const [todayProfileImg, setTodayProfileImg] = useState("");

    console.log(posts);
    console.log(post);

    useEffect(() => {
        const fetchUserProfileImage = async () => {
            try {
                const response = await fetch(`http://localhost:8000/user/getProfile/${post.userEmail}`);
                const data = await response.json();
                setTodayProfileImg(data.profileImg);
            } catch (error) {
                console.error("Failed to fetch user profile image", error);
            }
        };
        fetchUserProfileImage();
    }, [posts]);

    return (
        <S.cardPostContainer>
            <S.postProfileContainer>
                <S.ThumbnailWrapper>
                    <img src={todayProfileImg} alt="profile-img" />
                </S.ThumbnailWrapper>
                <S.userNameWrapper>{post.userNickname}</S.userNameWrapper>
            </S.postProfileContainer>
            <S.postContentWrapper>{post.content}</S.postContentWrapper>
            <S.reactionContainer>
                <Reaction />
            </S.reactionContainer>
        </S.cardPostContainer>
    );
};

export default SearchPost;
