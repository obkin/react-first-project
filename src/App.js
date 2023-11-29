import React, { useState } from 'react';
import PostList from './components/PostList';
import PostFrom from './components/PostFrom';
import MySelect from './components/UI/select/MySelect';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'This one I am trying to learn' },
    { id: 2, title: 'Vue', body: 'I do not know nothing about it' },
    { id: 3, title: 'Angular', body: 'Framework for JS frontend' },
  ]);

  const [sortedPosts, setSortedPosts] = useState('');

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  function sortPosts(sortBy) {
    setSortedPosts(sortBy);
    setPosts([...posts].sort((a,b) => a[sortBy].localeCompare(b[sortBy])));
  }

  return (
    <div className="App">
        <PostFrom create={createPost}/>

        <hr style={{ margin: '25px 0 25px 0' }}/>

        <MySelect
          value={sortedPosts}
          onChange={sortPosts}
          options={[
            {type: 'title', name: 'by title'},
            {type: 'body', name: 'by text'},
          ]}
        />

        {posts.length 
          ? <PostList remove={removePost} posts={posts} title={'JavaScript'}/> 
          : <h1 style={{ textAlign: 'center', margin: '40px 0 40px 0' }}>There are no any posts</h1>
        }
    </div>
  );
}

export default App;
