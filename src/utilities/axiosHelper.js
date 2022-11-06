import axios from "axios";

export const fetchData = (str) => {
  const apiEp =
    "http://www.omdbapi.com/?apikey=${process.env.REACT_API_API_KEY }&t=" + str;
  // console.log(str);
  const response = axios(apiEp);
  return response;
};
