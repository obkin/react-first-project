import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostFrom from './components/PostFrom';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/buttons/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'This one I am trying to learn', createdAt: 1502027677085 },
    { id: 2, title: 'Vue', body: 'I do not know nothing about it', createdAt: 1702027677090 },
    { id: 3, title: 'Angular', body: 'Framework for JS frontend', createdAt: 1602027677095 },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
        <MyModal visible={modal} setVisible={setModal}>
          <PostFrom create={createPost}/>
        </MyModal>

        <MyButton onClick={() => setModal(true)} style={{ marginTop: '30px' }}>
          Create post
        </MyButton>

        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />

        <hr style={{ margin: '25px 0 25px 0' }}/>

        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'JavaScript'}/>
    </div>
  );
}

export default App;
