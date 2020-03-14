import api from 'axios';

export async function getProfile(username){
    return await api.post('http://localhost:5000/profile', {'username': username})
}

export async function registerProfile(username, title, createdOn, avatar){
    return await api.post('http://localhost:5000/register', {'username': username, 'title': title, 'createdOn': createdOn, 'avatar': avatar})

}

export async function listProfiles(){
    return await api.get('http://localhost:5000/profiles')
}