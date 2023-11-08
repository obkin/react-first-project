import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';

function App() {

  const [postsJS, setPostsJS] = useState([
    { id: 1, title: 'JavaScript', body: 'This is my first and main language.' },
    { id: 2, title: 'JavaScript', body: 'I did not try this language yet.' },
    { id: 3, title: 'JavaScript', body: 'I really want to try these thechnologies.' },
  ]);

  function createPost(e) {
    e.preventDefault();
    // ...
  }

  return (
    <div className="App">
      <MyInput/>
      <MyInput/>
      <MyButton>create</MyButton>
      <PostList posts={postsJS} title={'JavaScript'}/>
    </div>
  );
}


export default App;
