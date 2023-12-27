import axios from 'axios';

export default class PostsService {
    static async getAllPosts() {
        const response = await axios.get('http://localhost:8870/posts/get-posts');
        return response.data;
    }

    static async createPost(newPost) {
        const response = await axios.post('http://localhost:8870/posts/add-post', newPost);
        return response;
    }

    static async removePost(postId) {
        const response = await axios.delete(`http://localhost:8870/posts/remove-post/${postId}`);
        return response;
    }
}
