import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/inputs/MyInput';

const PostFrom = ({ func, btnName, postId }) => {

    const [post, setPost] = useState({ title: '', body: '' });

    function createNewPost(e) {
      e.preventDefault();
      
      if (post.title !== '' && post.body !== '' && !postId) {
        func(post);
        setPost({ title: '', body: '' });
      }

      if (postId) {
        func(postId, post);
        setPost({ title: '', body: '' });
      }
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Title'
                style={{ width: '100%', marginTop: '25px' }}
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='Description'
                style={{ width: '100%' }}
            />
            <MyButton onClick={createNewPost} style={{ marginTop: '15px' }}>{btnName}</MyButton>
        </form>
    );
};

export default PostFrom;