import React, { useState } from 'react';
import PostList from './components/PostList';
import PostFrom from './components/PostFrom';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/inputs/MyInput';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'This one I am trying to learn' },
    { id: 2, title: 'Vue', body: 'I do not know nothing about it' },
    { id: 3, title: 'Angular', body: 'Framework for JS frontend' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    console.log('[!] called function: getSortedPosts'); // delete
    if (selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  function sortPosts(sortBy) {
    setSelectedSort(sortBy);
  }

  return (
    <div className="App">
        <PostFrom create={createPost}/>

        <hr style={{ margin: '25px 0 25px 0' }}/>

        <div>
          <MyInput
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={'Search...'}
            style={{ width: '100%',  margin: '25px 0 25px 0'}}
          />

          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            options={[
              {type: 'title', name: 'by title'},
              {type: 'body', name: 'by text'},
            ]}
            defaultValue={'sort off'}
          />
        </div>

        {posts.length 
          ? <PostList remove={removePost} posts={sortedPosts} title={'JavaScript'}/> 
          : <h1 style={{ textAlign: 'center', margin: '40px 0 40px 0' }}>There are no any posts</h1>
        }
    </div>
  );
}

export default App;
