import React, { useState } from "react";
import { BiHome, BiMenu, BiUser } from "react-icons/bi";
import { FaX } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { name: "Home", icon: <BiHome className="h-6 w-6" />, href: "/" },

  { name: "Profile", icon: <BiUser className="h-6 w-6" />, href: "/profile" },
  {
    name: "Settings",
    icon: <FiSettings className="h-6 w-6" />,
    href: "/settings",
  },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaX className="h-6 w-6 text-gray-600" />
        ) : (
          <BiMenu className="h-6 w-6 text-gray-600" />
        )}
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-200 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">My App</h2>
          <nav>
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center p-2 rounded-md hover:bg-gray-700"
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
