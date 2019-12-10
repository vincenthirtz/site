import React, { useEffect, useState } from 'react';
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
        <React.Fragment>
            {posts && posts.map((fields, i) => (
                <BlogItem key={i} {...fields} />
            ))}
        </React.Fragment>
    );
}

export default Blog;
