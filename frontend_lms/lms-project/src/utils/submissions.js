import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function createSubmission(submissionData) {
    try {
        const response = await axios.post(`${backend_url}/submissions/`, submissionData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("Submission created successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
    }
}

export async function fetchAllSubmissions() {
    try {
        const response = await axios.get(`${backend_url}/submissions/`, {
            headers: {
                "Content-Type": "application/json",     
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,   
            },
        });
        console.log("Submissions fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        return [];
    }
}
