import api from "./http";

function getAboutUs() {
    return api.get("/who-are-lovz-kg")
}

function createAboutUs(data) {
    return api.post("/who-are-lovz-kg", data)
}

function deleteAboutUs(id) {
    return api.delete(`/who-are-lovz-kg/${id}`);
}

function getAboutUsById(id) {
    return api.get(`/who-are-lovz-kg/${id}`);
}

function updateAboutUsById(id, data) {
    return api.put(`/who-are-lovz-kg/${id}`, data);
}
export default { getAboutUs, createAboutUs, deleteAboutUs, getAboutUsById, updateAboutUsById }