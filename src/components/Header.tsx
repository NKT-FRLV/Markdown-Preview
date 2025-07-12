import React from 'react';
import {
  HiSparkles,
  HiOutlineMenuAlt3,
  HiOutlineDownload,
  HiOutlineDuplicate,
  HiOutlineHeart,
  HiOutlineBookOpen,
} from 'react-icons/hi';
import ExampleSelector from './ExampleSelector';

interface HeaderProps {
  onSelectExample: (content: string) => void;
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectExample, onToggleGuide }) => {
  return (
    <div className="w-full flex items-center justify-between p-6 bg-slate-800 rounded-2xl shadow-lg border border-slate-700 relative">
      <div className="text-slate-100 text-2xl font-bold tracking-wide flex items-center gap-3">
        <HiSparkles className="text-slate-400" size={28} />
        Markdown Preview
      </div>

      <div className="flex items-center gap-4">
        <ExampleSelector onSelectExample={onSelectExample} />

        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleGuide}
            className="bg-slate-700 hover:bg-slate-600 text-slate-200 p-3 rounded-full font-medium transition-colors duration-200 border border-slate-600 shadow-md group"
            title="Markdown Guide"
          >
            <HiOutlineBookOpen
              className="group-hover:text-slate-100 transition-colors duration-200"
              size={20}
            />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-slate-200 p-3 rounded-full font-medium transition-colors duration-200 border border-slate-600 shadow-md group">
            <HiOutlineHeart
              className="group-hover:text-slate-100 transition-colors duration-200"
              size={20}
            />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-slate-200 p-3 rounded-full font-medium transition-colors duration-200 border border-slate-600 shadow-md group">
            <HiOutlineDuplicate
              className="group-hover:text-slate-100 transition-colors duration-200"
              size={20}
            />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-slate-200 p-3 rounded-full font-medium transition-colors duration-200 border border-slate-600 shadow-md group">
            <HiOutlineDownload
              className="group-hover:text-slate-100 transition-colors duration-200"
              size={20}
            />
          </button>
          <button className="flex items-center bg-slate-700 hover:bg-slate-600 text-slate-200 px-6 py-2 rounded-full font-medium transition-colors duration-200 border border-slate-600 shadow-md gap-2">
            <HiOutlineMenuAlt3 size={20} />
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
