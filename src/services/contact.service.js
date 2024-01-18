import http from "../utils/http";

class ContactService {
  sendFeedback(data) {
    return http.post(import.meta.env.VITE_API_FEEDBACK, JSON.stringify(data));
  }
}

export default new ContactService();
