import { createGrade, fetchAllGrades } from "../../utils/grades";
import { fetchAllSubmissions } from "../../utils/submissions";
import { fetchAllAssignments } from "../../utils/assignments";
import { fetchAllStudents } from "../../utils/students";
import { useState, useEffect } from "react";

function Grades() {
    const [grades, setGrades] = useState([]);
    const [submissions, setSubmissions] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchGrades();
        loadSubmissions();
        loadAssignments();
        loadStudents();
    }, []);

    async function handleCreateGrade(e) {
        e.preventDefault();
        await createGrade({
            submission: e.target.submission.value,
            score: e.target.score.value,
            feedback: e.target.feedback.value,
        });
        await fetchGrades();
    }

    async function fetchGrades() {
        const data = await fetchAllGrades();
        console.log(data);
        setGrades(data);
    }

    async function loadSubmissions() {
        const data = await fetchAllSubmissions();
        setSubmissions(data);
    }

    async function loadAssignments() {
        const data = await fetchAllAssignments();
        setAssignments(data);
    }

    async function loadStudents() {
        const data = await fetchAllStudents();
        setStudents(data);
    }

    function getSubmissionInfo(submissionId) {
        const submission = submissions.find(s => s.id === submissionId);
        if (!submission) return { student: "Unknown", assignment: "Unknown" };
        const student = students.find(s => s.id === submission.student);
        const assignment = assignments.find(a => a.id === submission.assignment);
        return {
            student: student ? student.name : "Unknown",
            assignment: assignment ? assignment.title : "Unknown"
        };
    }

    return (
        <div>
            <h1>Grades</h1>
            <p>This is the Grades page.</p>
            <div>
                <h2>Add New Grade</h2>
                <form onSubmit={handleCreateGrade} className="m-4">
                    <select name="submission" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Submission</option>
                        {submissions.map(submission => {
                            const student = students.find(s => s.id === submission.student);
                            const assignment = assignments.find(a => a.id === submission.assignment);
                            return (
                                <option key={submission.id} value={submission.id}>
                                    {student?.name || "Unknown"} - {assignment?.title || "Unknown"}
                                </option>
                            );
                        })}
                    </select>
                    <input type="number" name="score" className="border mt-4 p-4 w-full rounded" placeholder="Score" step="0.01" required />
                    <textarea name="feedback" className="border mt-4 p-4 w-full rounded" placeholder="Feedback" required />
                    <button type="submit" className="flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Add Grade</button>
                </form>
                <div><button onClick={fetchGrades} className="bg-green-500 hover:bg-green-700 text-white p-2 m-6 rounded-md">Refresh Grades</button></div>
            </div>
            <div>
                {grades.map((grade) => {
                    const info = getSubmissionInfo(grade.submission);
                    return (
                        <div className="border p-4 m-4 rounded" key={grade.id}>
                            <h3 className="text-lg font-bold">Student: {info.student}</h3>
                            <p className="text-gray-600">Assignment: {info.assignment}</p>
                            <p className="text-gray-700">Score: {grade.score}</p>
                            <p className="text-gray-600 mt-2">Feedback: {grade.feedback}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Grades;
