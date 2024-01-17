import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsService from '../API/PostsService';
import '../styles/PostPage.css';

const PostPage = () => {
    const [post, setPost] = useState({});
    const params = useParams();

    async function getPost(postId) {
        const result = await PostsService.getPost(postId);
        setPost(result.data);
    }

    useEffect(() => {
        getPost(params.id);
    }, []);

    return (
        <div className='post__page__wrapper'>
            <div className='post__page__content'>
                <h1 className='post__page__title'>post #{post.id}</h1>
                <h2>{post.title}</h2>
                <h2>{post.body}</h2>
            </div>
        </div>
    );
};

export default PostPage;