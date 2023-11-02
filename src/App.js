import React, { useState } from 'react';
import PostItem from './components/PostItem';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'This is my first and main language.' },
    { id: 2, title: 'Python', body: 'I did not try this language yet.' },
    { id: 3, title: 'C# + .NET', body: 'I really want to try these thechnologies.' },
  ]);

  return (
    <div className="App">
      {posts.map(post => <PostItem post={post} key={post.id}/>)}
    </div>
  );
}


export default App;
