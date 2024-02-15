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
    static async getUserData(email) {
        const response = await axios.post('http://localhost:8870/users/info', { email });
        return response;
    }
}