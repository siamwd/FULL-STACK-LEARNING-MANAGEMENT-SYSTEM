import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function createAssignment(assignmentData) {
    try {
        const response = await axios.post(`${backend_url}/assignments/`, assignmentData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("Assignment created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
    }
}

export async function fetchAllAssignments() {
    try {
        const response = await axios.get(`${backend_url}/assignments/`, {
            headers: {
                "Content-Type": "application/json",     
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,   
            },
        });
        console.log("Assignments fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        return [];
    }
}
