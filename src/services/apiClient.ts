import axios from "axios";
import { AxiosError, CanceledError } from "axios";

const key = "20019350072844ae84fe131354224fca";

export default axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: key,
  },
});

export { AxiosError, CanceledError };
