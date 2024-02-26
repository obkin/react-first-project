import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import UsersService from '../API/UsersService';
import UserData from '../components/UI/UserData/UserData';
import '../styles/User.css';

const User = () => {
    const [user, setUser] = useState({});
    const [changed, setChanged] = useState('');
    const [getUser, isLoading, error] = useFetching(async () => {
        const result = await UsersService.getUserData();
        setUser(result.data);
    });

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changed]);

    function refreshInfo(data) {
        setChanged(data);
    }

    const getAccCreatedDate = (userCreatedDate) => {
        const accCreatedDate = new Date(userCreatedDate);

        const day = accCreatedDate.getDate();
        const month = accCreatedDate.getMonth() + 1;
        const year = accCreatedDate.getFullYear();

        const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
        return formattedDate;
    };

    return (
        <div>
            {error
                ? 
                    <h1>Error: {error}</h1>
                :
                    <div className='user__page__wrapper'>
                {isLoading
                    ? 
                        <Loader/>
                    : 
                        <div className='user__page__content'>
                            <h1 className='user__page__title'>
                                Your account:
                            </h1>

                            <UserData
                                title='id'
                                data={user.id}
                                isChangeble={false}
                            />

                            <UserData
                                title='name'
                                data={user.name}
                                isChangeble={true}
                                refreshInfo={refreshInfo}
                            />

                            <UserData
                                title='email'
                                data={user.email}
                                isChangeble={true}
                                refreshInfo={refreshInfo}
                            />

                            <UserData
                                title='password'
                                data={'xxxxxxx'}
                                isChangeble={true}
                                refreshInfo={refreshInfo}
                            />

                            <UserData
                                title='account created'
                                data={getAccCreatedDate(user.iat)}
                                isChangeble={false}
                            />
                        </div>
                }
            </div>
            }
        </div>
    );
};

export default User;