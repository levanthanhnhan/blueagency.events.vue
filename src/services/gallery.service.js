import http from "../utils/network";

class GalleryService {
  getGallery() {
    return Promise.allSettled([
      http.get(
        import.meta.env.VITE_API_SERVICE,
        import.meta.env.VITE_API_SERVICE_ADVERSITING
      ),
      http.get(
        import.meta.env.VITE_API_SERVICE,
        import.meta.env.VITE_API_SERVICE_ACTIVATION
      ),
      http.get(
        import.meta.env.VITE_API_SERVICE,
        import.meta.env.VITE_API_SERVICE_ENTERTAINMENT
      ),
      http.get(
        import.meta.env.VITE_API_SERVICE,
        import.meta.env.VITE_API_SERVICE_MEDIA
      ),
      http.get(
        import.meta.env.VITE_API_SERVICE,
        import.meta.env.VITE_API_SERVICE_OPENING
      ),
      http.get(
        import.meta.env.VITE_API_SERVICE,
        import.meta.env.VITE_API_SERVICE_ROADSHOW
      ),
    ]);
  }
}

export default new GalleryService();
