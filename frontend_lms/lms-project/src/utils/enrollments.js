import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function createEnrollment(enrollmentData) {
    try {
        const response = await axios.post(`${backend_url}/enrollments/`, enrollmentData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("Enrollment created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
    }
}

export async function fetchAllEnrollments() {
    try {
        const response = await axios.get(`${backend_url}/enrollments/`, {
            headers: {
                "Content-Type": "application/json",     
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,   
            },
        });
        console.log("Enrollments fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        return [];
    }
}
