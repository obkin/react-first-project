import React, { useState } from 'react';
import MyModal from '../modal/MyModal';
import MyInput from '../inputs/MyInput';
import MyButton from '../buttons/MyButton';
import UsersService from '../../../API/UsersService';
import cl from './UserData.module.css';

const UserData = ({ title, data, isChangeble }) => {

    const [modal, setModal] = useState(false);
    const [change, setChange] = useState('');
    const [oldPass, setOldPass] = useState('');

    const changeName = async (newName) => {
        return await UsersService.changeUserName(newName);
    };

    const changeEmail = async (newEmail) => {
        return await UsersService.changeUserEmail(newEmail);
    };

    const changePassword = async (oldPass, newPass) => {
        return await UsersService.changeUserPass(oldPass, newPass);
    };

    const changeData = () => {
        if (title === 'name') {
            changeName();
        } else if (title === 'email') {
            changeEmail();
        } else if (title === 'password') {
            changePassword();
        }
    }

    function testInputs() {
        console.log(change);
        setChange('');
        // console.log(oldPass);
        // setOldPass('');
        setModal(false);
    }

    return (
        <div className={cl.wrapper}>
            <h3 className={cl.title}>
                {title}:
            </h3>

            <h3 className={cl.data}>
                {data}
            </h3>

            {isChangeble 
                ? <button className={cl.btn} onClick={() => setModal(true)}>edit</button>
                : <></>
            }

            <MyModal visible={modal} setVisible={setModal}>
                {title === 'password'
                    ?
                        <div>
                            <MyInput 
                                value={oldPass}
                                onChange={e => setOldPass(e.target.value)}
                                placeholder={`Old password`}
                            />
                            <MyInput 
                                value={change}
                                onChange={e => setChange(e.target.value)}
                                placeholder={`New password`}
                            />
                        </div>
                    : 
                        <MyInput 
                            value={change}
                            onChange={e => setChange(e.target.value)}
                            placeholder={`New ${title}`}
                        />
                }
                <MyButton onClick={e => testInputs()}>Change</MyButton>
            </MyModal>
        </div>
    );
};

export default UserData;