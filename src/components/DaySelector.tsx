import React from 'react';

interface DaySelectorProps {
  selectedDayId: string;
  onDaySelect: (dayId: string) => void;
}

const DAYS = [
  { id: 'monday', label: 'Mon', full: 'Monday' },
  { id: 'tuesday', label: 'Tue', full: 'Tuesday' },
  { id: 'wednesday', label: 'Wed', full: 'Wednesday' },
  { id: 'thursday', label: 'Thu', full: 'Thursday' },
  { id: 'friday', label: 'Fri', full: 'Friday' },
  { id: 'saturday', label: 'Sat', full: 'Saturday' },
  { id: 'sunday', label: 'Sun', full: 'Sunday' },
];

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDayId, onDaySelect }) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 bg-stone-50/80 backdrop-blur-sm sticky top-[69px] z-40 border-b border-stone-200/50">
      <div className="flex justify-start md:justify-center space-x-2 px-4 min-w-max">
        {DAYS.map((day) => (
          <button
            key={day.id}
            onClick={() => onDaySelect(day.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedDayId === day.id
                ? 'bg-amber-500 text-white shadow-md scale-105'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-amber-50'
            }`}
          >
            <span className="md:hidden">{day.label}</span>
            <span className="hidden md:inline">{day.full}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
