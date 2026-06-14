import axios from "axios";
const backend_url = import.meta.env.VITE_API_backend_URL;
export async function fetchAllTeachers() {
  try {
    const response = await axios.get(`${backend_url}/teachers/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    console.log("Teachers fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log(error.response?.data);
    console.log(error.response?.status);
    return [];
  }
}
export async function createTeacher(teacherData) {
  try {
    const response = await axios.post(`${backend_url}/teachers/`, teacherData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
      }
      })
    console.log("Teacher created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);

    console.log(error.response.status);

    
  }
}
