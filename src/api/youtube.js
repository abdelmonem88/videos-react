import axios from "axios";
const KEY = "AIzaSyA3wATtn71lDxNvRCZ3CqhMmHBT278Tdxs";

export default axios.create({
 baseURL: "https://www.googleapis.com/youtube/v3",
 params: {
  part: "snippet",
  type: "video",
  maxResults: 15,
  key: KEY,
 },
});
