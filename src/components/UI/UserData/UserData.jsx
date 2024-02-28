import React, { useState } from 'react';
import MyModal from '../modal/MyModal';
import MyInput from '../inputs/MyInput';
import MyButton from '../buttons/MyButton';
import UsersService from '../../../API/UsersService';
import { useFetching } from '../../../hooks/useFetching';
import Loader from '../Loader/Loader';
import cl from './UserData.module.css';

const UserData = ({ title, data, isChangeble, refreshInfo }) => {

    const [modal, setModal] = useState(false);
    const [change, setChange] = useState('');
    const [oldPass, setOldPass] = useState('');
    const [changeError, setChangeError] = useState();

    const [changeName, isNewNameLoading] = useFetching(async () => {
        setChangeError(null);
        try {
            const result = await UsersService.changeUserName(change);
            refreshInfo(result.data.newName);
            setModal(false);
        } catch (e) {
            setChangeError(e.message);
        }
    });

    const [changeEmail, isNewEmailLoading] = useFetching(async () => {
        setChangeError(null);
        try {
            const result = await UsersService.changeUserEmail(change);
            refreshInfo(result.data.newName);
            setModal(false);
        } catch (e) {
            setChangeError(e.message);
        }
    });

    const [changePassword, isNewPassLoading] = useFetching(async () => {
        setChangeError(null);
        try {
            const result = await UsersService.changeUserPass(oldPass, change);
            refreshInfo(result.data.newName);
            setModal(false);
        } catch (e) {
            setChangeError(e.message);
        }
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
                {
                    isNewNameLoading || isNewEmailLoading || isNewPassLoading
                        ?
                            <Loader/>
                        : 
                            title === 'password'
                                ?
                                    <div>
                                        {!changeError
                                            ?
                                                <div className={cl.modal__wrapper}>
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
                                                    <MyButton onClick={() => changeData()}>Change</MyButton>
                                                </div>
                                            :
                                                <div className={cl.modal__wrapper}>
                                                    <p>{changeError}.</p>
                                                    <p>Please, refresh the page and try again.</p>
                                                    <MyButton onClick={() => {setModal(false); setChangeError(false)}}>OK</MyButton>
                                                </div>
                                        }
                                    </div>
                                : 
                                    <div>
                                        {!changeError
                                            ?
                                                <div className={cl.modal__wrapper}>
                                                    <MyInput 
                                                        value={change}
                                                        onChange={e => setChange(e.target.value)}
                                                        placeholder={`New ${title}`}
                                                    />
                                                    <MyButton onClick={() => changeData()}>Change</MyButton>
                                                </div>
                                            :
                                                <div className={cl.modal__wrapper}>
                                                    <p>{changeError}</p>
                                                    <p>Please, refresh the page and try again</p>
                                                    <MyButton onClick={() => {setModal(false); setChangeError(false)}}>OK</MyButton>
                                                </div>
                                        }
                                    </div>
                }
            </MyModal>
        </div>
    );
};

export default UserData;