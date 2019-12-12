import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import BlogItem from "./Blogitem";
import BlogService from "services/BlogService";


const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        BlogService.getPosts().then(entries => {
            setPosts(entries)
        });
    }, []);

    return (
        <BlogItemComponent>
            {posts && posts.map((fields, i) => (
                <BlogItem key={i} {...fields} />
            ))}
        </BlogItemComponent>
    );
}

export default Blog;

const BlogItemComponent = styled.div`
display: flex;
flex-flow: row wrap;
    margin-left: -8px;
    width: 100%;
    height: 100%;
& > * {
    padding: 20px;
}
`;