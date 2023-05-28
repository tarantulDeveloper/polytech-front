import api from "./http";

function getAllAdmin() {
    return api.get("/news/all")
}

function deleteById(id) {
    return api.delete(`/news/${id}`)
}

function createNews(data) {
    return api.post("/news", data)
}

function getNewsForClient(pageNo, pageSize) {
    return api.get(`/news?pageNo=${pageNo}&pageSize=${pageSize}`)
}

function updateNewsById(id, data) {
    return api.put(`/news/${id}`, data)
}

function getNewsById(id) {
    return api.get(`/news/${id}`)
}

export default {
    getAllAdmin,
    deleteById,
    createNews,
    getNewsForClient,
    updateNewsById,
    getNewsById
}