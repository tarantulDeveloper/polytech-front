import api from "./http";

function getAll() {
    return api.get("/appeal");
}

function deleteById(id) {
    return api.delete(`/appeal/${id}`);
}

function createAppeal(data) {
    return api.post("/appeal", data);
}

export default {
    getAll,
    deleteById,
    createAppeal
}