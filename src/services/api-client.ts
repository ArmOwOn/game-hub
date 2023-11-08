import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "81c08263c5af48418df49a176380de6b",
  },
});
