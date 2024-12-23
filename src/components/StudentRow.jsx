export default function StudentRow({ student }) {
    return (
      <tr className="border-b">
        <td className="p-4">{student.name}</td>
        <td className="p-4">{student.cohort}</td>
        <td className="p-4">
          {student.courses.map((course, index) => (
            <span key={index} className="block">{course}</span>
          ))}
        </td>
        <td className="p-4">{student.dateJoined}</td>
        <td className="p-4">{student.lastLogin}</td>
        <td className="p-4">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              student.status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </td>
      </tr>
    );
  }
  