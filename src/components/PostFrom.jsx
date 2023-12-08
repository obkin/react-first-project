import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/inputs/MyInput';

const PostFrom = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '', createdAt: Date.now() });

    function createNewPost(e) {
      e.preventDefault();
      
      if (post.title !== '' && post.body !== '') {
        const newPost = {
            ...post, id: Date.now(),
        };
        create(newPost);
        setPost({ title: '', body: '' });
  
        console.log(post); // need to delete
      }
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Type title'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='Type title'
            />
            <MyButton onClick={createNewPost}>create</MyButton>
        </form>
    );
};

export default PostFrom;