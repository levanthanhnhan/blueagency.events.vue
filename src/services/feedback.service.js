import http from "../utils/network";

class FeedbackService {
  sendFeedback(data) {
    return http.post(
      import.meta.env.VITE_API_CONTACT,
      import.meta.env.VITE_API_CONTACT_FEEDBACK,
      JSON.stringify(data)
    );
  }
}

export default new FeedbackService();
