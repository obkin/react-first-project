import axios from 'axios';

export default class PostsService {
    static async getAllPosts() {
        const response = await axios.get('http://localhost:8870/posts/get-posts');
        return response.data;
    }
}
