import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'This is my first and main language.' },
    { id: 2, title: 'JavaScript', body: 'I did not try this language yet.' },
    { id: 3, title: 'JavaScript', body: 'I really want to try these thechnologies.' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function createPost(e) {
    e.preventDefault();
    
    if (title && body) {
      const newPost = {
        id: Date.now(),
        title: title,
        body: body,
      }

      setPosts([...posts, newPost]);
      setTitle('');
      setBody('');
    }
  }

  return (
    <div className="App">
      <MyInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        type='text'
        placeholder='Type title'
      />
      <MyInput
        value={body}
        onChange={e => setBody(e.target.value)}
        type='text'
        placeholder='Type title'
      />
      <MyButton onClick={createPost}>create</MyButton>
      <PostList posts={posts} title={'JavaScript'}/>
    </div>
  );
}

export default App;
