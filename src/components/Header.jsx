import { AiOutlineSearch, AiOutlineQuestionCircle } from "react-icons/ai"; // Question and Search icons
import { IoMdNotificationsOutline } from "react-icons/io"; // Notification bell icon
import { BiMessageDetail } from "react-icons/bi"; // Message box icon
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Toggle button icon

export default function Header() {
    const hasNotifications = true; // Controls whether the badge is visible

    return (
        <header className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
            <div className="flex items-center space-x-4">
                <AiOutlineSearch className=" text-gray-400 text-xl" />
                <input
                    type="text"
                    placeholder="Search your course"
                    className="border rounded-lg px-4 py-2 w-80"
                />

            </div>
            {/* Right Section: Icons */}
            <div className="flex items-center space-x-8">
                {/* Question Mark */}
                <AiOutlineQuestionCircle className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer" />

                {/* Message Box */}
                <BiMessageDetail className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer" />

                {/* Notification Bell */}
                <div className="relative">
                    <IoMdNotificationsOutline className="text-2xl text-gray-600 hover:text-blue-500 cursor-pointer" />
                    {hasNotifications && (
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    )}
                </div>

                {/* User Profile */}
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                    {/* Placeholder for User Avatar */}
                    <span className="font-bold text-gray-700">N</span>
                </div> 
                <div>Nikhil Jaiswal</div>
                
                
            </div>
        </header>
    );
}
