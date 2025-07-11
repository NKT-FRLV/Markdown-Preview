import React from 'react';
import { HiOutlineCode, HiOutlinePencilAlt } from 'react-icons/hi';

type EditorProps = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
};

const Editor = ({ onChange, inputValue }: EditorProps) => {
  return (
    <div className="w-[50%] flex-grow">
      <div className="w-full h-full p-4 bg-slate-700 rounded-2xl shadow-lg border border-slate-600 hover:shadow-xl transition-all duration-300">
        <div className="mb-3">
          <h3 className="text-slate-100 text-lg font-semibold flex items-center gap-2">
            <HiOutlineCode className="text-slate-300" size={24} />
            Editor
          </h3>
        </div>
        <div className="w-full h-[calc(100%-60px)] flex-1 relative">
          <textarea
            className="w-full h-full min-h-[400px] rounded-xl p-4 bg-white border-0 resize-none focus:outline-none focus:ring-2 focus:ring-slate-400 focus:bg-gray-50 transition-all duration-300 shadow-inner text-gray-800 placeholder-gray-500 hover:bg-gray-50"
            value={inputValue}
            onChange={onChange}
            placeholder="Start writing your Markdown..."
          ></textarea>
          {!inputValue && (
            <div className="absolute top-16 left-8 text-gray-400 pointer-events-none flex items-center gap-2">
              <HiOutlinePencilAlt size={16} />
              <span className="text-sm">Start with # for a title</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
