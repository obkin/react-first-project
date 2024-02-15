import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import UsersService from '../API/UsersService';

const User = () => {
    const [user, setUser] = useState({});
    const [getUser, isLoading, error] = useFetching(async () => {
        const result = await UsersService.getUserData();
        setUser(result.data);
    });

    useEffect(() => {
        getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {error
                ? 
                    <h1>Error: {error}</h1>
                :
                    <div className=''>
                {isLoading
                    ? 
                        <Loader/>
                    : 
                        <div className=''>
                        <h2 className=''>id: {user.id}</h2>
                        <h2 className=''>email: {user.email}</h2>
                </div>
                }
            </div>
            }
        </div>
    );
};

export default User;