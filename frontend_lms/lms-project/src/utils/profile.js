import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function fetchProfile(userId) {
    try {
        const response = await axios.get(`${backend_url}/profile/${userId}/`, {
            headers: {
                "Content-Type": "application/json",     
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,   
            },
        });
        console.log("Profile fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        return null;
    }
}

export async function updateProfile(userId, profileData) {
    try {
        const response = await axios.put(`${backend_url}/profile/${userId}/`, profileData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("Profile updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
    }
}
