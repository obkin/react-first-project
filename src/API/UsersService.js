import axios from 'axios';

export default class UsersService {
    static async createUser(name, email, password) {
        const response = await axios.post('http://localhost:8870/users/register', { name, email, password });
        return response;
    }

    static async authUser(email, password) {
        const response = await axios.post('http://localhost:8870/users/login', { email, password });
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("userId", response.data.userId);
        return response;
    }

    // require additional authorization (front-end & back-end)
    static async getUserData() {
        const response = await axios.get('http://localhost:8870/users/info', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        });
        return response;
    }

    static async changeUserName(newName) {
        const response = await axios.put('http://localhost:8870/users/change-name', { newName }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        });
        return response; 
    }

    static async changeUserEmail(newEmail) {
        // const response = await axios.put('');
    }

    // require additional check (front-end & back-end)
    static async changeUserPass(oldPass, newPass) {
        const response = await axios.put('http://localhost:8870/users/change-pass', { oldPass, newPass }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        });
        return response; 
    }
}