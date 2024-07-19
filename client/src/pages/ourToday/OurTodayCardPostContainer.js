import React, { useEffect, useState } from 'react';
import S from './style';
import { useSelector } from 'react-redux';
import OurTodayCardPost from './OurTodayCardPost';

const OurTodayCardPostContainer = ({tabActive, setTabActive}) => {
    // 게시글 데이터 정보를 담기위한 상태관리
    const [posts, setPosts] = useState([]);
    // 게시글의 정보가 update됨을 관리할 상태 관리
    const [ourTodayUpdate, setOurTodayUpdate] = useState(false);
    // currentUser 전역변수
    const currentUser = useSelector((state) => state.login.currentUser);

    // 게시글의 데이터 정보를 불러올 fetch GET method
    const getPost = async () => {
        const response = await fetch(`http://localhost:8000/ourToday/checkPost`);
        const dayPosts = await response.json();
        if(tabActive === "myToday") {
            const todayPosts = dayPosts.filter((dayPost) => currentUser.email === dayPost.userEmail);
            return todayPosts
        }else if(tabActive === "ourToday"){
            const todayPosts = dayPosts
            return todayPosts
        }
    }
            
    // getPost 함수의 side effect를 제어하고 getPost함수를 실행할 useEffect 함수
    useEffect(()=>{ 
        getPost().then(setPosts);
    }, [tabActive, ourTodayUpdate])


    return (
        <ul>
            { posts && posts.map((post, i) =>
                    <OurTodayCardPost 
                        post={post}
                        key={i}
                        tabActive={tabActive}
                        setTabActive={setTabActive}
                        posts={posts} 
                        ourTodayUpdate={ourTodayUpdate}
                        setOurTodayUpdate={setOurTodayUpdate}
                    />
                )
            }
            <S.gap></S.gap>
        </ul>
    );
};

export default OurTodayCardPostContainer;