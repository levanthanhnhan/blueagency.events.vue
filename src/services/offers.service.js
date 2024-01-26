import http from "../utils/network";

class OffersService {
  getAdversiting() {
    return http.get("http://localhost:3333/api/offers/adversiting");
  }
}

export default new OffersService();
