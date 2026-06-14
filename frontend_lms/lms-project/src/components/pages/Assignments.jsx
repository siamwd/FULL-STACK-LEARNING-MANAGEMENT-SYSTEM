import { createAssignment, fetchAllAssignments } from "../../utils/assignments";
import { fetchAllCourses } from "../../utils/courses";
import { fetchAllLessons } from "../../utils/lessons";
import { useState, useEffect } from "react";

function Assignments() {
    const [assignments, setAssignments] = useState([]);
    const [courses, setCourses] = useState([]);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetchAssignments();
        loadCourses();
        loadLessons();
    }, []);

    async function handleCreateAssignment(e) {
        e.preventDefault();
        await createAssignment({
            title: e.target.title.value,
            description: e.target.description.value,
            course: e.target.course.value,
            lesson: e.target.lesson.value,
            due_date: e.target.due_date.value,
        });
        await fetchAssignments();
    }

    async function fetchAssignments() {
        const data = await fetchAllAssignments();
        console.log(data);
        setAssignments(data);
    }

    async function loadCourses() {
        const data = await fetchAllCourses();
        setCourses(data);
    }

    async function loadLessons() {
        const data = await fetchAllLessons();
        setLessons(data);
    }

    function getCourseName(courseId) {
        const course = courses.find(c => c.id === courseId);
        return course ? course.name : "Unknown Course";
    }

    function getLessonTitle(lessonId) {
        const lesson = lessons.find(l => l.id === lessonId);
        return lesson ? lesson.title : "Unknown Lesson";
    }

    return (
        <div>
            <h1>Assignments</h1>
            <p>This is the Assignments page.</p>
            <div>
                <h2>Add New Assignment</h2>
                <form onSubmit={handleCreateAssignment} className="m-4">
                    <input type="text" name="title" className="border mt-4 p-4 w-full rounded" placeholder="Title" required />
                    <textarea name="description" className="border mt-4 p-4 w-full rounded" placeholder="Description" required />
                    <select name="course" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Course</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>{course.name}</option>
                        ))}
                    </select>
                    <select name="lesson" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Lesson</option>
                        {lessons.map(lesson => (
                            <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
                        ))}
                    </select>
                    <input type="date" name="due_date" className="border mt-4 p-4 w-full rounded" required />
                    <button type="submit" className="flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Add Assignment</button>
                </form>
                <div><button onClick={fetchAssignments} className="bg-green-500 hover:bg-green-700 text-white p-2 m-6 rounded-md">Refresh Assignments</button></div>
            </div>
            <div>
                {assignments.map((assignment) => (
                    <div className="border p-4 m-4 rounded" key={assignment.id}>
                        <h3 className="text-lg font-bold">{assignment.title}</h3>
                        <p className="text-gray-600">Course: {getCourseName(assignment.course)}</p>
                        <p className="text-gray-600">Lesson: {getLessonTitle(assignment.lesson)}</p>
                        <p className="text-gray-700">Due Date: {assignment.due_date}</p>
                        <p className="text-gray-600 mt-2">{assignment.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
