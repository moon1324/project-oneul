import React, { useEffect, useState } from "react";
import Reaction from "./Reaction";
import S from "./style";
import EmptyPostAlarm from "./EmptyPostAlarm";
import SearchPost from "./SearchPost";
import { useLocation } from "react-router-dom";

const SearchPosts = () => {
    const [posts, setPosts] = useState([]);

    const location = useLocation();
    console.log(location);

    const searchValue = decodeURI(location.search.replace("?value=", ""));
    console.log(searchValue);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(`http://localhost:8000/search?value=${searchValue}`);
                const data = await response.json();
                setPosts(data);
                console.log(posts);
            } catch (error) {
                console.error("Failed to fetch search results:", error);
            }
        };

        if (searchValue) {
            getPosts();
        }
    }, [searchValue]);
    console.log(posts);

    return (
        <ul>{posts.length > 0 ? posts.map((post, i) => <SearchPost post={post} key={i} posts={posts} />) : <EmptyPostAlarm searchValue={searchValue} />}</ul>
    );
};

export default SearchPosts;
