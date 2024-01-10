import React, { useEffect, useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostFrom from './components/PostFrom';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/buttons/MyButton';
import { usePosts } from './hooks/usePosts';
import PostsService from './API/PostsService';
import { useFetching } from './hooks/useFetching';
import { usePagination } from './hooks/usePagination';

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [postsPerPageLimit, setPostsPerPageLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(4);

  const pagesCounter = usePagination(totalPostsCount, postsPerPageLimit);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
      const response = await PostsService.getAllPosts(postsPerPageLimit, pageNumber);
      setPosts(response.data);
      setTotalPostsCount(response.headers.get('X-Total-Count'));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  async function createPost(newPost) {
    await PostsService.createPost(newPost);
    setModal(false);
    fetchPosts();
  }

  async function removePost(postId) {
    await PostsService.removePost(postId);
    fetchPosts();
  }

  async function updatePost(postId, updatedData) {
    console.log(postId, updatedData);                             // delete logging
    await PostsService.updatePost(postId, updatedData);
    fetchPosts();
  }

  return (
    <div className="App">
        <MyModal visible={modal} setVisible={setModal}>
          <PostFrom func={createPost} btnName={'create'}/>
        </MyModal>

        <MyButton onClick={() => setModal(true)} style={{ marginTop: '30px' }}>
          Create post
        </MyButton>

        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />

        <hr style={{ margin: '25px 0 25px 0' }}/>

        {postsError
          ? <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Error: {postsError}</h1>
          : <PostList remove={removePost} update={updatePost} posts={sortedAndSearchedPosts} isLoading={isPostsLoading} title={'JavaScript'}/>
        }
        {pagesCounter.map(p =>
          <MyButton key={p}>{p}</MyButton>  
        )}
    </div>
  );
}

export default App;
