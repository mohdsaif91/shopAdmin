import axios from "axios";

const extractJsonPromise = (jsonResponse) => {
  return jsonResponse.then(
    (json) => {
      return {
        url: jsonResponse.url,
        status: jsonResponse.status,
        statusText: jsonResponse.statusText,
        json,
        ok: jsonResponse.ok,
      };
    },
    (failure) => {
      return {
        url: jsonResponse.url,
        status: jsonResponse.status,
        statusText: jsonResponse.statusText,
        ok: jsonResponse.ok,
        json: { message: "An unknown error occurred" },
      };
    }
  );
};
const headers = {
  "Content-type": "application/json",
};


async function axiosCall(url, method, data, headers,withOutToken) {
  const authToken = localStorage.getItem("auth-token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-type": "application/json",
    },
  });
  if(withOutToken){
    return axios.post(url,data).then(response=>{
              return response;
          });
  }

  
  if (authToken) {
    return await authAxios({ method, url, data, headers }).then((response) => {
      if (response.status === 401 || response.status === 403) {
        return "Something Went Wrong";
      }
      if (response.ok) {
        return response;
      }
      return response;
    });
  } 
}

export default axiosCall;