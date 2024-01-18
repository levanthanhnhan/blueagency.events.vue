import http from "../utils/http";

class OffersService {
  getAdversiting() {
    return http.get('http://localhost:3333/api/offers/adversiting');
  }
}

export default new OffersService();