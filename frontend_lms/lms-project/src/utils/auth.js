import axios from 'axios';
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function registerUser(data){
    console.log(data);
    try{
        const res = await axios.post(`${backend_url}/register/`, data)
        console.log("User registered successfully:", res.data);
    }
    catch (error) {
        console.error("Error registering user:", error);
    }
}
export async function loginUser(data){
    
    try{
        const res = await axios.post(`${backend_url}/login/`, data)
        console.log("User logged in successfully:", res.data);
        localStorage.setItem("accessToken", res.data.tokens.access);
        localStorage.setItem("refreshToken", res.data.tokens.refresh);
        return true;
    }
    catch (error) {
        console.error("Error logging in user:", error);
        return false;
    }}
export async function logoutUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

export async function refreshAccessToken() {
  try {
    const refresh = localStorage.getItem("refreshToken");

    const res = await axios.post(
      `${backend_url}/token/refresh/`,
      { refresh }
    );

    localStorage.setItem("accessToken", res.data.access);

    return res.data.access;

  } catch (error) {
    console.log("Refresh failed", error);

    logoutUser();
    return null;
  }
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_backend_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newToken = await refreshAccessToken();

      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }

    logoutUser();
    return Promise.reject(error);
  }
);
export default api;