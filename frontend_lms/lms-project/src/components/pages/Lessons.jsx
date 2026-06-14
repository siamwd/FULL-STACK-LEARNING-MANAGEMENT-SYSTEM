import { createLesson, fetchAllLessons } from "../../utils/lessons";
import { fetchAllCourses } from "../../utils/courses";
import { useState, useEffect } from "react";

function Lessons() {
    const [lessons, setLessons] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchLessons();
        loadCourses();
    }, []);

    async function handleCreateLesson(e) {
        e.preventDefault();
        await createLesson({
            title: e.target.title.value,
            content: e.target.content.value,
            course: e.target.course.value,
            order: e.target.order.value,
        });
        await fetchLessons();
    }

    async function fetchLessons() {
        const data = await fetchAllLessons();
        console.log(data);
        setLessons(data);
    }

    async function loadCourses() {
        const data = await fetchAllCourses();
        setCourses(data);
    }

    function getCourseName(courseId) {
        const course = courses.find(c => c.id === courseId);
        return course ? course.name : "Unknown Course";
    }

    return (
        <div>
            <h1>Lessons</h1>
            <p>This is the Lessons page.</p>
            <div>
                <h2>Add New Lesson</h2>
                <form onSubmit={handleCreateLesson} className="m-4">
                    <input type="text" name="title" className="border mt-4 p-4 w-full rounded" placeholder="Title" required />
                    <textarea name="content" className="border mt-4 p-4 w-full rounded" placeholder="Content" required />
                    <select name="course" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Course</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>{course.name}</option>
                        ))}
                    </select>
                    <input type="number" name="order" className="border mt-4 p-4 w-full rounded" placeholder="Order" required />
                    <button type="submit" className="flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Add Lesson</button>
                </form>
                <div><button onClick={fetchLessons} className="bg-green-500 hover:bg-green-700 text-white p-2 m-6 rounded-md">Refresh Lessons</button></div>
            </div>
            <div>
                {lessons.map((lesson) => (
                    <div className="border p-4 m-4 rounded" key={lesson.id}>
                        <h3 className="text-lg font-bold">{lesson.title}</h3>
                        <p className="text-gray-600">Course: {getCourseName(lesson.course)}</p>
                        <p className="text-gray-700">Order: {lesson.order}</p>
                        <p className="text-gray-600 mt-2">{lesson.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lessons;
