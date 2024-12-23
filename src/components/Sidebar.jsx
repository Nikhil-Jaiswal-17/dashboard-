import Logo from '../assets/logo.png';
import { MdDashboard, MdMenuBook } from "react-icons/md"; // Dashboard & Chapter Icons
import { FaUserGraduate } from "react-icons/fa"; // Students Icon
import { AiOutlineQuestionCircle } from "react-icons/ai"; // Help Icon
import { HiOutlineDocumentReport } from "react-icons/hi"; // Reports Icon
import { FiSettings } from "react-icons/fi"; // Settings Icon

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: <MdDashboard /> },
    { name: "Students", icon: <FaUserGraduate /> },
    { name: "Chapter", icon: <MdMenuBook /> },
    { name: "Help", icon: <AiOutlineQuestionCircle /> },
    { name: "Reports", icon: <HiOutlineDocumentReport /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 bg-gray-200 p-4 space-y-6">
      {/* Logo */}
      <div className="flex mt-2 ml-4">
        <img src={Logo} alt="Logo" className="w-[98px] h-[42px]" />
      </div>

      {/* Navigation Items */}
      <nav className="space-y-4">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-300"
          >
            {item.icon && <span className="mr-3 text-xl">{item.icon}</span>}
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
