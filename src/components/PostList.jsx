import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loader from './UI/Loader/Loader';

const PostList = ({ posts, title, remove, isLoading }) => {
    return (
        <div>
            {isLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}><Loader/></div>
                : <h1 style={{ textAlign: 'center', marginTop: '40px' }}>{posts.length ? title : <div>There are no any posts</div>}</h1>
            }
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition key={post.id} timeout={500} classNames='post'>
                        <PostItem remove={remove} post={post} postNumber={index + 1}/>
                    </CSSTransition>    
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;