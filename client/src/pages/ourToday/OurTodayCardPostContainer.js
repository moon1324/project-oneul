import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { useSelector } from 'react-redux';
import OurTodayCardPost from './OurTodayCardPost';
import DeleteModal from './DeleteModal';

const OurTodayCardPostContainer = ({tabActive, setTabActive}) => {
    const [posts, setPosts] = useState([]);
    const [deleteModalStatus, setDeleteModalStatus] = useState(false)
    const [isDeleteOk, setIsDeleteOk] = useState(false)
    const [ourTodayUpdate, setOurTodayUpdate] = useState(false);
    const currentUser = useSelector((state) => state.login.currentUser);

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
                        posts={posts} 
                        isDeleteOk={isDeleteOk}
                        setIsDeleteOk={setIsDeleteOk}
                        ourTodayUpdate={ourTodayUpdate}
                        setOurTodayUpdate={setOurTodayUpdate}
                        deleteModalStatus={deleteModalStatus} setDeleteModalStatus={setDeleteModalStatus}
                    />
                )
            }
            <DeleteModal 
                isDeleteOk={isDeleteOk}
                setIsDeleteOk={setIsDeleteOk}
                deleteModalStatus={deleteModalStatus} 
                setDeleteModalStatus={setDeleteModalStatus}
                ourTodayUpdate={ourTodayUpdate}
                setOurTodayUpdate={setOurTodayUpdate}
                />
            <S.gap></S.gap>
        </ul>
    );
};

export default OurTodayCardPostContainer;