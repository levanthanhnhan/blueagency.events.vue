import axios from "axios";

class CloudinaryService {
  async getGallery() {
    try {
      const requestBody = {
        expression: "service/adversiting",
      };

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dss6pknik/resources/search",
        requestBody,
        {
          withCredentials: true,
          auth: {
            username: "426597299638432",
            password: "Lnj29sj_OHV4k-1wHJZ4hwY3oBY",
          },

          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      return response.data;
    } catch (err) {
      console.log(err.message);
      console.log(err.response.status);
    }
  }
}

export default new CloudinaryService();
