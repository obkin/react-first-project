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

  const [post, setPost] = useState({ title: '', body: '' });

  function createNewPost(e) {
    e.preventDefault();
    
    if (post.title !== '' || post.body !== '') {
      setPosts([ ...posts, { ...post, id: Date.now() } ]);
      setPost({ title: '', body: '' });

      console.log(post); // need to delete
    }
  }

  return (
    <div className="App">
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
        <PostList posts={posts} title={'JavaScript'}/>
    </div>
  );
}

export default App;
