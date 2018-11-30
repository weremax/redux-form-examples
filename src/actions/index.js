import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=cblankenship77901'

export function fetchPosts() {
    return dispatch => {
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
        .then(response => {
            dispatch({
                type: FETCH_POSTS,
                payload: response
            });
        }).catch(err => {
            alert(`Error\n${err}`);
        });
    }
}

export function createPost(values, callback) {
    return dispatch => {
        axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => {
            callback();
        }).catch(err => {
            alert(`Error\n${err}`);
        });
    }
}

export function fetchPost(id) {
    return dispatch => {
        axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(response => {
                dispatch({
                    type: FETCH_POST,
                    payload: response
                });
        }).catch(err => {
            alert(`Error\n${err}`);
        })

        
    }
}

export function deletePost(id, callback) {
    return dispatch => {
        axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => {
            alert(`Error\nAre you sure`);
            callback();
        }).catch(err => {
            alert(`Error\n${err}`);
        });
    }
    
}