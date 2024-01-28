import http from "../utils/network";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class OffersService {
  getAdversiting() {
    cloudinary.search
    .expression("folder: service/adversiting")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      return {
        items: result.resources,
        scaleURL: process.env.CLOUDINARY_URL_SCALE,
        smallURL: process.env.CLOUDINARY_URL_SMALL,
        key: "adversiting",
      };
    });
  }
}

export default new OffersService();
