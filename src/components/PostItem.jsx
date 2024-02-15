import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyModal from './UI/modal/MyModal';
import PostFrom from './PostFrom';
import Dropdown from './UI/Dropdown/Dropdown';
import '../styles/App.css';

const PostItem = ({ post, remove, update }) => {
    const [modal, setModal] = useState(false);
    const router = useNavigate();

    return (
    <div className='post'>
        <div className="post__img">
            {/* here you should implement images */}
        </div>
        <div className='post__content'>
            <strong>{post.title}</strong>
            <div>
                {post.body}
            </div>
        </div>
            <div className='post__btns'>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostFrom func={update} btnName={'update'} postId={post.id}/>
                </MyModal>

                <Dropdown dropName='more'>
                    <button onClick={() => router(`/post/${post.id}`)}>open</button>
                    <button onClick={() => remove(post.id)}>delete</button>
                    <button onClick={() => setModal(true)}>update</button>
                </Dropdown>
            </div>
    </div>
    );
};

export default PostItem;