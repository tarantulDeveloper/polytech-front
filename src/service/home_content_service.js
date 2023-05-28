import api from "./http";

function getAllHomeContent() {
    return api.get("/home-content");
}

function createHomeContent(data) {
    return api.post("/home-content", data)
}

function getHomeContentById(id) {
    return api.get(`/home-content/${id}`)
}

function updateHomeContent(id, data) {
    return api.put(`/home-content/${id}`, data);
}

function deleteHomeContent(id) {
    return api.delete(`/home-content/${id}`);
}

export default { getAllHomeContent, createHomeContent, getHomeContentById, updateHomeContent, deleteHomeContent };