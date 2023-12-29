import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyModal from './UI/modal/MyModal';
import PostFrom from './PostFrom';
import '../styles/App.css';

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

                <MyButton onClick={() => remove(post.id)}>delete</MyButton>
                <MyButton style={{ marginTop: '5px' }} onClick={() => setModal(true)}>update</MyButton>
            </div>
    </div>
    );
};

export default PostItem;