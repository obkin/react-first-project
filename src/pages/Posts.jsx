import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/buttons/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostsService from '../API/PostsService';
import { useFetching } from '../hooks/useFetching';
import Pagination from '../components/UI/Pagination/Pagination';
import '../styles/Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPostsCount, setTotalPostsCount] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [postsPerPageLimit, setPostsPerPageLimit] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostsService.getAllPosts(postsPerPageLimit, pageNumber);
        setPosts(response.data);
        setTotalPostsCount(response.headers.get('X-Total-Count'));
    });
  
    useEffect(() => {
      fetchPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);
  
    async function createPost(newPost) {
      console.log('src/pages/Posts.jsx -> createPost');
      console.log(newPost);
      await PostsService.createPost(newPost);
      setModal(false);
      fetchPosts();
    }
  
    async function removePost(postId) {
      await PostsService.removePost(postId);
      fetchPosts();
    }
  
    async function updatePost(postId, updatedData) {
      await PostsService.updatePost(postId, updatedData);
      fetchPosts();
    }
  
    return (
      <div className="App">
          <MyModal visible={modal} setVisible={setModal}>
            <PostForm func={createPost} btnName={'create'}/>
          </MyModal>
  
          <MyButton onClick={() => setModal(true)} style={{ marginTop: '30px' }}>
            Create post
          </MyButton>
  
          <PostFilter
            filter={filter}
            setFilter={setFilter}
          />
  
          {postsError
            ? <h1 className='posts__error'>Error: {postsError}</h1>
            : <PostList 
                remove={removePost} 
                update={updatePost} 
                posts={sortedAndSearchedPosts} 
                isLoading={isPostsLoading} 
                title={'New posts:'}/>
          }
          <Pagination
            totalPostsCount={totalPostsCount}
            postsPerPageLimit={postsPerPageLimit}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
      </div>
    );
};

export default Posts;