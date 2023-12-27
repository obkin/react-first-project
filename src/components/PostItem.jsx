import React from 'react';
import MyButton from './UI/buttons/MyButton';
import '../styles/App.css';

const PostItem = ({ post, postNumber, remove }) => {
    return (
    <div className='post'>
        <div className='post__content'>
            <strong>{postNumber}. {post.title}</strong>
            <div>
                {post.body}
            </div>
        </div>
            <div className='post__btns'>
                <MyButton onClick={() => remove(post.id)}>delete</MyButton>
            </div>
    </div>
    );
};

export default PostItem;