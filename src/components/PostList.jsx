import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
                {posts.length ? title : <div>There are no any posts</div>}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition key={post.id} timeout={500} classNames='post'>
                        <PostItem remove={remove} post={post} postId={index + 1}/>
                    </CSSTransition>    
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;