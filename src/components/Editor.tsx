import React from 'react';
import { HiOutlineCode, HiOutlinePencilAlt } from 'react-icons/hi';


type EditorProps = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
};

const Editor = ({ onChange, inputValue }: EditorProps) => {
  return (
    <div className="w-[50%] flex-grow">
      <div className="w-full h-full p-4 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-2xl shadow-2xl backdrop-blur-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500">
        <div className="mb-3">
          <h3 className="text-white text-lg font-semibold drop-shadow-lg animate-shimmer flex items-center gap-2">
            <HiOutlineCode className="text-emerald-100 animate-pulse" size={24} />
            Editor
          </h3>
        </div>
        <div className="w-full h-[calc(100%-60px)] flex-1 relative">
          <textarea
            className="w-full h-full min-h-[400px] rounded-xl p-4 bg-white/90 backdrop-blur-sm border-0 resize-none focus:outline-none focus:ring-4 focus:ring-white/50 focus:bg-white transition-all duration-300 shadow-inner text-gray-800 placeholder-gray-500 hover:bg-white/95"
            value={inputValue}
            onChange={onChange}
            placeholder="Начните писать ваш Markdown..."
          ></textarea>
          {!inputValue && (
            <div className="absolute top-16 left-8 text-gray-400 pointer-events-none flex items-center gap-2">
              <HiOutlinePencilAlt size={16} />
              <span className="text-sm">Начните с # для заголовка</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
