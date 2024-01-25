class Common {
  isUrlHasSub() {
    const paths = location.pathname.split("/");
    return paths.length > 1 && paths[1] != "";
  }
}

export default new Common();
