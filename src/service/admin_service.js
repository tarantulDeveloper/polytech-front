import api from './http';

function getMe() {
    return api.get('/user/me');
}

function updateMe(data) {
    return api.put('/user/me', data);
}

function getAll() {
    return api.get('/user');
}

function createAdmin(data) {
    return api.post('/user', data);
}

export default {
    getMe,
    updateMe,
    getAll,
    createAdmin
};