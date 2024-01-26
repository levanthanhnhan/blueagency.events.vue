import galleryService from "@/services/gallery.service";

class Common {
  isUrlHasSub() {
    const paths = location.pathname.split("/");
    return paths.length > 1 && paths[1] != "";
  }

  async getGallery() {
    const objs = await galleryService.getGallery();
    objs.forEach(async (obj) => {
      await this.makeItems(obj.value.data);
    });
  }

  async makeItems(data) {
    var appendItems = "";
    data.items.forEach((item) => {
      var imgSmall = data.smallURL + `${item.public_id}.${item.format}`;
      var appendItem =
        "<a" +
        " href='" +
        item.url +
        "'" +
        " data-pswp-width='" +
        item.width +
        "'" +
        " data-pswp-height='" +
        item.height +
        "'" +
        " target='_blank'" +
        " >" +
        " <div class='blurred-img rounded-lg' style='background-image: url(" +
        imgSmall +
        ")' />" +
        " <img" +
        " loading='lazy'" +
        " class='blur-img w-100 object-cover object-center shadow-1-strong rounded-lg'" +
        " src='" +
        data.scaleURL +
        `${item.public_id}.${item.format}` +
        "' />" +
        " </div>";
      (" </a>");
      appendItems += appendItem;
    });

    localStorage.setItem(data.key, appendItems);
  }

  setBlurLoadedGallery() {
    const blurredImageDivs = document.querySelectorAll(".blurred-img");
    blurredImageDivs.forEach((item) => {
      const img = item.querySelector("img");
      function loaded() {
        item.classList.add("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }
}

export default new Common();
