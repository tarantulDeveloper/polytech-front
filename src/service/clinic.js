import api from "./http";

function getClinics(pageNo,pageSize) {
    return api.get(`/clinic?pageNo=${pageNo}&pageSize=${pageSize}`);
}

function getAllClinics() {
    return api.get("/clinic/all");
}

function getClinicById(id) {
    return api.get(`/clinic/${id}`);
}

function getClinicsByOblast(pageNo,pageSize,oblast){
    return api.get(`/clinic/oblast?pageNo=${pageNo}&pageSize=${pageSize}&oblast=${oblast}`)
}

function createClinic(clinic) {
    return api.post("/clinic", clinic);
}

function updateClinic(id, clinic) {
    return api.put(`/clinic/${id}`, clinic);
}

function deleteClinic(id) {
    return api.delete(`/clinic/${id}`);
}

export default { getClinics, getClinicById, createClinic, getAllClinics, updateClinic, deleteClinic, getClinicsByOblast };