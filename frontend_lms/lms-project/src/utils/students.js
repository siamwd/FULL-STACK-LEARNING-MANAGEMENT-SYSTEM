import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function createStudent(studentData) {
    try {
        const response = await axios.post(`${backend_url}/students/`, studentData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("Student created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
    }
}
export async function fetchAllStudents() {
    try {
        const response = await axios.get(`${backend_url}/students/`, {
            headers: {
                "Content-Type": "application/json",     
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,   
            },
        });
        console.log("Students fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        return [];
    }
}   

