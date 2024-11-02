import React, { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((item) => item !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-md">
          <button
            onClick={() => toggleItem(item.id)}
            className="flex justify-between items-center w-full px-4 py-2 text-left text-gray-800 font-medium focus:outline-none"
          >
            <span>{item.title}</span>
            <IoChevronDownCircleOutline
              className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                openItems.includes(item.id) ? "rotate-180" : ""
              }`}
            />
          </button>
          {openItems.includes(item.id) && (
            <div className="px-4 py-2 text-gray-600">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
