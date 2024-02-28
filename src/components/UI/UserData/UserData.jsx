import React, { useState } from 'react';
import MyModal from '../modal/MyModal';
import MyInput from '../inputs/MyInput';
import MyButton from '../buttons/MyButton';
import UsersService from '../../../API/UsersService';
import cl from './UserData.module.css';
import { useFetching } from '../../../hooks/useFetching';

const UserData = ({ title, data, isChangeble, refreshInfo }) => {

    const [modal, setModal] = useState(false);
    const [change, setChange] = useState('');
    const [oldPass, setOldPass] = useState('');

    const [changeName, isNewNameLoading, nameChangingError] = useFetching(async () => {
        const result = await UsersService.changeUserName(change);
        refreshInfo(result.data.newName);
        setModal(false);
    });

    const [changeEmail, isNewEmailLoading, emailChaningError] = useFetching(async () => {
        const result = await UsersService.changeUserEmail(change);
        refreshInfo(result.data.newName);
        setModal(false);
    });

    const [changePassword, isNewPassLoading, passChaningError] = useFetching(async () => {
        const result = await UsersService.changeUserPass(oldPass, change);
        refreshInfo(result.data.newName);
        setModal(false);
    });

    const changeData = () => {
        if (title === 'name') {
            changeName(change);
        } else if (title === 'email') {
            changeEmail(change);
        } else if (title === 'password') {
            changePassword(change);
        }
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
                <MyButton onClick={() => changeData()}>Change</MyButton>
            </MyModal>
        </div>
    );
};

export default UserData;