import api from 'axios';

export async function getProfile(username, password){
    return await api.post('http://localhost:5000/login', {'username': username, 'password': password})
}
