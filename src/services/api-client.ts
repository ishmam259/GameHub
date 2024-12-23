import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "df5014166dae4d0289d95a996d6498e2",
  },
});
