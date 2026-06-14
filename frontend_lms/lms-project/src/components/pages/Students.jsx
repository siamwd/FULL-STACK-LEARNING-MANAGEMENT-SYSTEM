import { createStudent, fetchAllStudents } from "../../utils/students";
import { useState, useEffect } from "react";

function Students(){
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    async function handleCreateStudent(e) {
        e.preventDefault();
        await createStudent({
            name: e.target.name.value,
            email: e.target.email.value,
            phone_number: e.target.phone_number.value,
            date_of_birth: e.target.date_of_birth.value,
        });
        await fetchStudents();
    }

    async function fetchStudents() {
        const students = await fetchAllStudents();
        console.log(students);
        setStudents(students);
    }
    return (
        <div>
            <h1>Students</h1>
            <p>This is the Students page.</p>
            <div>
                <h2>Add New Student</h2>
                <form onSubmit={handleCreateStudent}  className="m-4">
                    <input type="text" name="name" className="border mt-4 p-4 w-full rounded" placeholder="Name" required  />
                    <input type="email" name="email" className="border mt-4 p-4 w-full rounded" placeholder="Email" required />
                    <input type="text" name="phone_number" className="border mt-4 p-4 w-full rounded" placeholder="Phone Number" required />
                    <input type="date" name="date_of_birth" className="border mt-4 p-4 w-full rounded" placeholder="Date of Birth" required />
                    <button type="submit" className=" flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Add Student</button>
                </form>
                <div><button onClick={fetchStudents} className="bg-green-500 hover:bg-green-700 text-white p-2 m-6 rounded-md">Refresh Students</button></div>
            </div>
            <div>
                {students.map((student) => (
                <div className="border p-4 m-4 rounded" key={student.id}>
                <h3 className="text-lg font-bold">{student.name}</h3>
                <p className="text-gray-600">{student.email}</p>
                <p className="text-gray-700">{student.phone_number}</p>
                <p className="text-gray-700">{student.date_of_birth}</p>
                </div>
                ))}
            </div>
        </div>
    );

}
export default Students;


