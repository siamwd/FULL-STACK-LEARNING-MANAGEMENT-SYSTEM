import { createSubmission, fetchAllSubmissions } from "../../utils/submissions";
import { fetchAllAssignments } from "../../utils/assignments";
import { fetchAllStudents } from "../../utils/students";
import { useState, useEffect } from "react";

function Submissions() {
    const [submissions, setSubmissions] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchSubmissions();
        loadAssignments();
        loadStudents();
    }, []);

    async function handleCreateSubmission(e) {
        e.preventDefault();
        await createSubmission({
            content: e.target.content.value,
            assignment: e.target.assignment.value,
            student: e.target.student.value,
        });
        await fetchSubmissions();
    }

    async function fetchSubmissions() {
        const data = await fetchAllSubmissions();
        console.log(data);
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

    function getAssignmentTitle(assignmentId) {
        const assignment = assignments.find(a => a.id === assignmentId);
        return assignment ? assignment.title : "Unknown Assignment";
    }

    function getStudentName(studentId) {
        const student = students.find(s => s.id === studentId);
        return student ? student.name : "Unknown Student";
    }

    return (
        <div>
            <h1>Submissions</h1>
            <p>This is the Submissions page.</p>
            <div>
                <h2>Add New Submission</h2>
                <form onSubmit={handleCreateSubmission} className="m-4">
                    <select name="student" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Student</option>
                        {students.map(student => (
                            <option key={student.id} value={student.id}>{student.name}</option>
                        ))}
                    </select>
                    <select name="assignment" className="border mt-4 p-4 w-full rounded" required>
                        <option value="">Select Assignment</option>
                        {assignments.map(assignment => (
                            <option key={assignment.id} value={assignment.id}>{assignment.title}</option>
                        ))}
                    </select>
                    <textarea name="content" className="border mt-4 p-4 w-full rounded" placeholder="Submission Content" required />
                    <button type="submit" className="flex items-center justify-center p-4 w-1/2 bg-blue-700 text-white hover:bg-blue-900 text-xm mt-4 rounded-md">Add Submission</button>
                </form>
                <div><button onClick={fetchSubmissions} className="bg-green-500 hover:bg-green-700 text-white p-2 m-6 rounded-md">Refresh Submissions</button></div>
            </div>
            <div>
                {submissions.map((submission) => (
                    <div className="border p-4 m-4 rounded" key={submission.id}>
                        <h3 className="text-lg font-bold">Student: {getStudentName(submission.student)}</h3>
                        <p className="text-gray-600">Assignment: {getAssignmentTitle(submission.assignment)}</p>
                        <p className="text-gray-700">Submission Date: {submission.submission_date}</p>
                        <p className="text-gray-600 mt-2">{submission.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Submissions;
