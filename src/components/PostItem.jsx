import React from 'react';
import '../styles/App.css';

const PostItem = ({ post, postId }) => {
    return (
    <div className='post'>
        <div className='post__content'>
            <strong>{postId}. {post.title}</strong>
            <div>
                {post.body}
            </div>
        </div>
            <div className='post__btns'>
                <button>delete</button>
            </div>
    </div>
    );
};

export default PostItem;