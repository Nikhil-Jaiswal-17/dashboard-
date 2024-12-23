import React, { useState } from "react";

export default function Header() {
  // State for dropdown selections
  const [academicYear, setAcademicYear] = useState("AY24-25");
  const [curriculum, setCurriculum] = useState("CBSE 9");

  // State to control dropdown visibility
  const [showAcademicDropdown, setShowAcademicDropdown] = useState(false);
  const [showCurriculumDropdown, setShowCurriculumDropdown] = useState(false);

  // Add Student Handler
  const handleAddStudent = () => {
    alert(`Adding a new student for ${academicYear}, ${curriculum}`);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      {/* Left Section: Academic Year Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowAcademicDropdown(!showAcademicDropdown)}
          className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200"
        >
          {academicYear}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-2 text-gray-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {showAcademicDropdown && (
          <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setAcademicYear("AY23-24");
                setShowAcademicDropdown(false);
              }}
            >
              AY23-24
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setAcademicYear("AY22-23");
                setShowAcademicDropdown(false);
              }}
            >
              AY22-23
            </li>
          </ul>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Curriculum Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowCurriculumDropdown(!showCurriculumDropdown)}
            className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200"
          >
            {curriculum}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2 text-gray-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {showCurriculumDropdown && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setCurriculum("CBSE 10");
                  setShowCurriculumDropdown(false);
                }}
              >
                CBSE 10
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setCurriculum("ICSE 9");
                  setShowCurriculumDropdown(false);
                }}
              >
                ICSE 9
              </li>
            </ul>
          )}
        </div>

        {/* Add New Student Button */}
        <button
          onClick={handleAddStudent}
          className="px-4 py-2 bg-slate-700 text-white font-semibold rounded-lg shadow-md hover:bg-slate-950"
        >
          Add New Student
        </button>
      </div>
    </div>
  );
}
