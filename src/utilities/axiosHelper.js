import axios from "axios";

export const fetchData = (str) => {
  const apiEp = "http://www.omdbapi.com/?apikey=82d5b008&t=" + str;
  // console.log(str);
  const response = axios(apiEp);
  return response;
};
