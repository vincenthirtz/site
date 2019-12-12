import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import * as contentful from 'contentful';
import BlogItem from "./Blogitem";

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESSTOKEN
})

const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.getEntries().then(res => {
            setPosts(res.items)
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