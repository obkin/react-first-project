import axios from 'axios';

export default class UsersService {
    static async createUser(name, email, password) {
        const response = await axios.post('http://localhost:8870/users/register', { name, email, password });
        return response;
    }

    static async authUser(email, password) {
        const response = await axios.post('http://localhost:8870/users/login', { email, password });
        return response;
    }
}