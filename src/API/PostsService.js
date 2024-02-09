import axios from 'axios';

export default class PostsService {

    static async createPost(newPost) {
        const response = await axios.post('http://localhost:8870/posts/add-post', newPost);
        return response;
    }

    static async getPost(postId) {
        const response = await axios.get(`http://localhost:8870/posts/get-post/${postId}`);
        return response;
    }

    static async getAllPosts(limit, page) {
        const response = await axios.get('http://localhost:8870/posts/get-posts', {
            params: {
                limit,
                page,
            }
        });
        return response;
    }

    static async getAllUserPosts(limit, page) {
        const response = await axios.get('http://localhost:8870/posts/get-user-posts', {
            headers: {
                authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            params: {
                limit,
                page,
            }
        });
        return response;
    }

    static async removePost(postId) {
        const response = await axios.delete(`http://localhost:8870/posts/remove-post/${postId}`);
        return response;
    }

    static async updatePost(postId, updatedPost) {
        const response = await axios.put(`http://localhost:8870/posts/update-post/${postId}`, updatedPost);
        return response;
    }
}
