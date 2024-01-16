import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyModal from './UI/modal/MyModal';
import PostFrom from './PostFrom';
import '../styles/App.css';
import Dropdown from './UI/Dropdown/Dropdown';

const PostItem = ({ post, postNumber, remove, update }) => {

    const [modal, setModal] = useState(false);

    return (
    <div className='post'>
        <div className='post__content'>
            <strong>{postNumber}. {post.title}</strong>
            <div>
                {post.body}
            </div>
        </div>
            <div className='post__btns'>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostFrom func={update} btnName={'update'} postId={post.id}/>
                </MyModal>

                <Dropdown dropName='more'>
                    <button onClick={() => remove(post.id)}>delete</button>
                    <button onClick={() => setModal(true)}>update</button>
                </Dropdown>
            </div>
    </div>
    );
};

export default PostItem;