import { createEnrollment, fetchAllEnrollments } from "../../utils/enrollments";
import { fetchAllStudents } from "../../utils/students";
import { fetchAllCourses } from "../../utils/courses";
import { useState, useEffect } from "react";

function Enrollments() {
    const [enrollments, setEnrollments] = useState([]);
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchEnrollments();
        loadStudents();
        loadCourses();
    }, []);

    async function handleCreateEnrollment(e) {
        e.preventDefault();
        await createEnrollment({
            student: e.target.student.value,
            course: e.target.course.value,
        });
        await fetchEnrollments();
    }

    async function fetchEnrollments() {
        const data = await fetchAllEnrollments();
        console.log(data);
        setEnrollments(data);
    }

    async function loadStudents() {
        const data = await fetchAllStudents();
        setStudents(data);
    }

    async function loadCourses() {
        const data = await fetchAllCourses();
        setCourses(data);
    }

    function getStudentName(studentId) {
        const student = students.find(s => s.id === studentId);
        return student ? student.name : "Unknown Student";
    }

    function getCourseName(courseId) {
        const course = courses.find(c => c.id === courseId);
        return course ? course.name : "Unknown Course";
    }

    return (
        <div>
            <h1>Enrollments</h1>
            <p>This is the Enrollments page.</p>
            <div>
                <h2>Add New Enrollment</h2>
                <form onSubmit={handleCreateEnrollment} className="m-4">
                    <select name="student" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Student</option>
                        {students.map(student => (
                            <option key={student.id} value={student.id}>{student.name}</option>
                        ))}
                    </select>
                    <select name="course" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Course</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>{course.name}</option>
                        ))}
                    </select>
                    <button type="submit" className="flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Add Enrollment</button>
                </form>
                <div><button onClick={fetchEnrollments} className="bg-green-500 hover:bg-green-700 text-white p-2 m-6 rounded-md">Refresh Enrollments</button></div>
            </div>
            <div>
                {enrollments.map((enrollment) => (
                    <div className="border p-4 m-4 rounded" key={enrollment.id}>
                        <h3 className="text-lg font-bold">{getStudentName(enrollment.student)}</h3>
                        <p className="text-gray-600">Course: {getCourseName(enrollment.course)}</p>
                        <p className="text-gray-700">Enrollment Date: {enrollment.enrollment_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Enrollments;
