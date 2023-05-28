import api from './http';

function createFeedback(clinicId, data) {
    return api.post(`/feedback/${clinicId}`, data);
}

export default {createFeedback}