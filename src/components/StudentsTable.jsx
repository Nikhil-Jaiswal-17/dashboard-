import StudentRow from "./StudentRow";
import DropdownButton from "./DropdownButton"

export default function StudentsTable() {
    const students = [
        { name: "Anshuman Kashyap", cohort: "AY 2024-25", courses: ["CBSE 9 Science", "CBSE 9 Math"], dateJoined: "17 Nov 2024", lastLogin: "17 Nov 2024 4:16 PM", status: "active" },
        { name: "Bansi Dadhaniya", cohort: "AY 2024-25", courses: ["CBSE 9 Science", "CBSE 9 Math"], dateJoined: "17 Nov 2024", lastLogin: "17 Nov 2024 4:16 PM", status: "active" },
        // Add more student objects as needed
    ];

    return (
        <div>
            <DropdownButton/>
            <table className="w-full bg-white shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-4 text-left">Student Name</th>
                        <th className="p-4 text-left">Cohort</th>
                        <th className="p-4 text-left">Courses</th>
                        <th className="p-4 text-left">Date Joined</th>
                        <th className="p-4 text-left">Last Login</th>
                        <th className="p-4 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <StudentRow key={index} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
