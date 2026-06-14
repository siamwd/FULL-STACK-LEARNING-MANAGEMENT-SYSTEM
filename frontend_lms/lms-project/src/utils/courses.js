import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;

export async function createCourse(courseData) {
    try {
        const response = await axios.post(`${backend_url}/courses/`,courseData, {
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        } )
        console.log("Course created successfully:", response.data);

        return response.data;
        
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        
    }
    
}
export async function fetchAllCourses() {
    try {
        const response = await axios.get(`${backend_url}/courses/`, {
            headers: {
                "Content-Type": "application/json",     
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,   
            },
        });
        console.log("courses fetched successfully:", response.data);

        return response.data;
    } catch (error) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        return [];
    }
}   

