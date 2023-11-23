import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
                {title}
            </h1>
            {posts.map((post, index) => 
                <PostItem remove={remove} post={post} postId={index + 1} key={post.id}
            />)}
        </div>
    );
};

export default PostList;