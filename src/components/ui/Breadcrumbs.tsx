import React from "react";
import { BiHome } from "react-icons/bi";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600"
          >
            <BiHome className="mr-2 h-4 w-4" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <RiArrowRightCircleFill className="h-5 w-5 text-gray-400" />
              <Link
                to={item.href}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2"
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
