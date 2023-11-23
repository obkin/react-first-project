import React, { useState } from 'react';
import PostList from './components/PostList';
import PostFrom from './components/PostFrom';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'This is my first and main language.' },
    { id: 2, title: 'JavaScript', body: 'I did not try this language yet.' },
    { id: 3, title: 'JavaScript', body: 'I really want to try these thechnologies.' },
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
        <PostFrom create={createPost}/>
        <PostList posts={posts} title={'JavaScript'}/>
    </div>
  );
}

export default App;
