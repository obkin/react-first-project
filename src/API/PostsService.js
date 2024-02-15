import axios from 'axios';

export default class PostsService {

    // don't require additional authorization (front-end only)
    static async createPost(newPost) {
        const response = await axios.post('http://localhost:8870/posts/add-post', newPost);
        return response;
    }

    // don't require authorization
    static async getPost(postId) {
        const response = await axios.get(`http://localhost:8870/posts/get-post/${postId}`);
        return response;
    }

    // don't require authorization
    static async getAllPosts(limit, page) {
        const response = await axios.get('http://localhost:8870/posts/get-posts', {
            params: {
                limit,
                page,
            }
        });
        return response;
    }

    // require additional authorization (front-end & back-end)
    static async getAllUserPosts(limit, page) {
        const response = await axios.get('http://localhost:8870/posts/get-user-posts', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            params: {
                limit,
                page,
            }
        });
        return response;
    }

    // don't require additional authorization (front-end only)
    static async removePost(postId) {
        const response = await axios.delete(`http://localhost:8870/posts/remove-post/${postId}`);
        return response;
    }

    // don't require additional authorization (front-end only)
    static async updatePost(postId, updatedPost) {
        const response = await axios.put(`http://localhost:8870/posts/update-post/${postId}`, updatedPost);
        return response;
    }
}
