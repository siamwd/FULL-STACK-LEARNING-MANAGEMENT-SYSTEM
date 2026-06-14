import {
    createCourse,
    fetchAllCourses
} from "../../utils/courses";

import {
    fetchAllTeachers
} from "../../utils/teachers";

import {
    fetchAllStudents
} from "../../utils/students";

import { useState, useEffect } from "react";

function Courses() {

    const [courses, setCourses] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchCourses();
        loadTeachers();
        loadStudents();
    }, []);

    async function fetchCourses() {
        const data = await fetchAllCourses();
        setCourses(data);
    }

    async function loadTeachers() {
        const data = await fetchAllTeachers();
        setTeachers(data);
    }

    async function loadStudents() {
        const data = await fetchAllStudents();
        setStudents(data);
    }

    function getCourseTeacherName(course) {
        return (
            course.teacher_name ||
            course.teacher_detail?.name ||
            teachers.find((teacher) => teacher.id === Number(course.teacher))?.name ||
            "No teacher"
        );
    }

    function getCourseStudentNames(course) {
        const studentObjs = course.student_details ?? [];
        if (studentObjs.length) {
            return studentObjs.map((student) => student.name);
        }
        return (course.students ?? []).map((student) => {
            const studentId = Number(student);
            const matched = students.find((s) => s.id === studentId);
            return matched?.name ?? student;
        });
    }

    async function handleCreateCourse(e) {

        e.preventDefault();

        const selectedStudents = Array.from(
            e.target.students.selectedOptions
        ).map((option) => Number(option.value));

        await createCourse({

            name: e.target.name.value,

            description: e.target.description.value,

            teacher: e.target.teacher.value || null,

            students: selectedStudents,

            is_active: e.target.is_active.checked

        });

        fetchCourses();

        e.target.reset();
    }

    return (

        <div>

            <h1>Courses</h1>

            <form
                onSubmit={handleCreateCourse}
                className="m-4"
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Course Name"
                    className="border p-4 w-full rounded mt-4"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="border p-4 w-full rounded mt-4"
                    required
                />

                <select
                    name="teacher"
                    className="border p-4 w-full rounded mt-4"
                >

                    <option value="">
                        Select Teacher
                    </option>

                    {teachers.map((teacher) => (

                        <option
                            key={teacher.id}
                            value={teacher.id}
                        >
                            {teacher.name}
                        </option>

                    ))}

                </select>

                <select
                    multiple
                    name="students"
                    className="border p-4 w-full rounded mt-4 h-40"
                >

                    {students.map((student) => (

                        <option
                            key={student.id}
                            value={student.id}
                        >
                            {student.name}
                        </option>

                    ))}

                </select>

                <label className="flex gap-2 mt-4">

                    <input
                        type="checkbox"
                        name="is_active"
                        defaultChecked
                    />

                    Active

                </label>

                <button
                    type="submit"
                    className="bg-blue-700 text-white p-4 rounded mt-4"
                >
                    Add Course
                </button>

            </form>

            <button
                onClick={fetchCourses}
                className="bg-green-600 text-white p-2 rounded m-4"
            >
                Refresh Courses
            </button>

            <div>

                {courses.map((course) => (

                    <div
                        key={course.id}
                        className="border rounded p-4 m-4"
                    >

                        <h2 className="font-bold text-xl">
                            {course.name}
                        </h2>

                        <p>{course.description}</p>

                        <p>
                            Teacher :
                            {" "}
                            {getCourseTeacherName(course)}
                        </p>

                        <p>
                            Active :
                            {" "}
                            {course.is_active ? "Yes" : "No"}
                        </p>
                        <div>
                            <p>Students :</p>
                            <div>
                                {getCourseStudentNames(course).map((studentName, i) => (
                                    <span
                                        key={`${course.id}-student-${i}`}
                                        className="ml-2"
                                    >
                                        {studentName}
                                    </span>
                                ))}
                            </div>
                        </div>

                            
                        

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Courses;