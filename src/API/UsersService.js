import axios from 'axios';

export default class UsersService {
    static async createUser(name, email, password) {
        const userData = {
            name,
            email,
            password,
        }

        const response = await axios.post('http://localhost:8870/users/register', userData);
        return response;
    }
}