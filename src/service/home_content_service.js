import api from "./http";

function getAllHomeContent() {
    return api.get("/home-content");
}

export default {getAllHomeContent};