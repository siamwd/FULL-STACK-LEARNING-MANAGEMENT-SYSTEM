import { createTeacher, fetchAllTeachers } from "../../utils/teachers";
import { useState, useEffect } from "react";

function Teachers() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchTeachers();
    }, []);

    async function handleCreateTeacher(e) {
        e.preventDefault();
        await createTeacher({
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value
        });
        await fetchTeachers();
    }

    async function fetchTeachers() {
        const teachers = await fetchAllTeachers();
        console.log(teachers);
        setTeachers(teachers);
    }
    return (
        <div>
            <h1>Teachers</h1>
            <p>This is the Teachers page.</p>
            <div>
                <h2>Add New Teacher</h2>
                <form onSubmit={handleCreateTeacher}  className="m-4">
                    <input type="text" name="name" className="border mt-4 p-4 w-full rounded" placeholder="Name" required  />
                    <input type="email" name="email" className="border mt-4 p-4 w-full rounded" placeholder="Email" required />
                    <input type="text" name="subject" className="border mt-4 p-4 w-full rounded" placeholder="Subject" required />
                    <button type="submit" className=" flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Add Teacher</button>
                </form>
                <div><button onClick={fetchTeachers} className="bg-green-500 hover:bg-green-700 text-white p-2 m-6 rounded-md">Refresh Teachers</button></div>
            </div>
            <div>
                {teachers.map((teacher) => (
                <div className="border p-4 m-4 rounded" key={teacher.id}>
                <h3 className="text-lg font-bold">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.email}</p>
                <p className="text-gray-700">{teacher.subject}</p>
                </div>
                ))}
            </div>
        </div>


    );
}

export default Teachers;