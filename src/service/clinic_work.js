import api from "./http";

function getAllServices() {
    return api.get("/clinic-work");
}

function getClinicsOfWorkById(id) {
    return api.get(`/clinic-work/${id}`);
}

function createService(data) {
    return api.post("/clinic-work", data);
}

function updateService(id, data) {
    return api.put(`/clinic-work/${id}`, data);
}

export default {
    getAllServices,
    getClinicsOfWorkById,
    createService,
    updateService
};