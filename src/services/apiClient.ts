import axios from "axios";

export default axios.create({
  baseURL: `https://api.rawg.io/api/games?key=20019350072844ae84fe131354224fca`,
  headers: {
    "api-key": "20019350072844ae84fe131354224fca",
  },
});
