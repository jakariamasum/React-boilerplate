import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
} from "date-fns";
import { BiCalendar } from "react-icons/bi";

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const onDateClick = (day: Date) => {
    onChange(day);
    setIsOpen(false);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-2">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          &lt;
        </button>
        <span className="text-lg font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          &gt;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-bold">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 gap-1 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            key={day.toString()}
            className={`p-2 text-center cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : isSameDay(day, selectedDate || new Date())
                ? "bg-indigo-600 text-white rounded-full"
                : ""
            }`}
            onClick={() => onDateClick(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }
    return <div className="mb-2">{rows}</div>;
  };

  return (
    <div className="relative">
      <div
        className="flex items-center border rounded-md p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiCalendar className="h-5 w-5 text-gray-400 mr-2" />
        <span>
          {selectedDate ? format(selectedDate, "PP") : "Select a date"}
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-64 bg-white shadow-lg rounded-md border p-4">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      )}
    </div>
  );
};
