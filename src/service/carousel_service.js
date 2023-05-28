import api from "./http";

function createCarousel(data) {
    return api.post("/carousel", data);
}

function getAll() {
    return api.get("/carousel");   
}

function getById(id) {
    return api.get(`/carousel/${id}`);
}

function updateCarousel(id, data) {
    return api.put(`/carousel/${id}`, data);
}

function deleteCarouselById(id) {
    return api.delete(`/carousel/${id}`);
}
export default {getAll, getById, updateCarousel, deleteCarouselById, createCarousel}