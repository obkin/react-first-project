import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsService from '../API/PostsService';
import '../styles/PostPage.css';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchByPostId, isLoading, error] = useFetching(async () => {
        const result = await PostsService.getPost(params.id);
        setPost(result.data);
    });

    useEffect(() => {
        fetchByPostId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {error
                ? 
                    <h1>Error: {error}</h1>
                :
                    <div className='post__page__wrapper'>
                {isLoading
                    ? 
                        <Loader/>
                    : 
                        <div className='post__page__content'>
                        <h1 className='post__page__title'>post #{post.id}</h1>
                        <h2>{post.title}</h2>
                        <h2>{post.body}</h2>
                        <h5>User: {post.userId}</h5>
                </div>
                }
            </div>
            }
        </div>
    );
};

export default PostPage;