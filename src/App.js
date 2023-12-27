import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostFrom from './components/PostFrom';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/buttons/MyButton';
import { usePosts } from './hooks/usePosts';
import PostsService from './API/PostsService';

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
        const posts = await PostsService.getAllPosts();
        setPosts(posts);
      setIsPostsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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

        <PostList remove={removePost} posts={sortedAndSearchedPosts} isLoading={isPostsLoading} title={'JavaScript'}/>
    </div>
  );
}

export default App;
