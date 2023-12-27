import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/inputs/MyInput';

const PostFrom = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' });

    function createNewPost(e) {
      e.preventDefault();
      
      if (post.title !== '' && post.body !== '') {
        create(post);
        setPost({ title: '', body: '' });
  
        console.log(post); // info
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
            <MyButton onClick={createNewPost} style={{ marginTop: '15px' }}>create</MyButton>
        </form>
    );
};

export default PostFrom;