import type { ReactNode } from 'react';
import {
  HiOutlineEye,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from 'react-icons/hi';

interface PreviewProps {
  htmlOutput: ReactNode;
}

const Preview = ({ htmlOutput }: PreviewProps) => {
  console.log(htmlOutput);

  return (
    <div className="w-[50%] flex-grow">
      <div className="w-full h-full p-4 bg-slate-700 rounded-2xl shadow-lg border border-slate-600 hover:shadow-xl transition-all duration-300">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-slate-100 text-lg font-semibold flex items-center gap-2">
            <HiOutlineEye className="text-slate-300" size={24} />
            Preview
          </h3>
          <div className="flex items-center gap-2">
            {htmlOutput ? (
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <HiOutlineCheckCircle size={16} />
                <span>Ready</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                <HiOutlineExclamationCircle size={16} />
                <span>Waiting</span>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex-1 min-h-[400px] p-4 bg-white rounded-xl overflow-y-auto shadow-inner prose prose-gray max-w-none hover:bg-gray-50 transition-all duration-300">
          {htmlOutput || (
            <div className="flex items-center justify-center h-full text-gray-400">
              <div className="text-center">
                <HiOutlineEye size={48} className="mx-auto mb-4 opacity-50" />
                <p>Preview will appear here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
