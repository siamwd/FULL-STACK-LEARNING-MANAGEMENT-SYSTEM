import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function createLesson(lessonData) {
    try {
        const response = await axios.post(`${backend_url}/lessons/`, lessonData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("Lesson created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
    }
}

export async function fetchAllLessons() {
    try {
        const response = await axios.get(`${backend_url}/lessons/`, {
            headers: {
                "Content-Type": "application/json",     
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,   
            },
        });
        console.log("Lessons fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        return [];
    }
}
