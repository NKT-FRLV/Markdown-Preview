import {
  HiOutlineEye,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from 'react-icons/hi';
import MarkdownRenderer from './MarkdownRenderer';

interface PreviewProps {
  markdownContent: string;
}

const Preview = ({ markdownContent }: PreviewProps) => {
  return (
    <div className="w-[50%] h-full  flex-grow">
      <div className="w-full h-full p-4 bg-slate-700 rounded-2xl shadow-lg border border-slate-600 hover:shadow-xl transition-shadow duration-300">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-slate-100 text-lg font-semibold flex items-center gap-2">
            <HiOutlineEye className="text-slate-300" size={24} />
            Preview
          </h3>
          <div className="flex items-center gap-2">
            {markdownContent ? (
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
        <div className="w-full flex-1 min-h-[90%] p-4 bg-white rounded-xl overflow-y-auto shadow-inner prose prose-gray max-w-none hover:bg-gray-50 transition-colors duration-300">
          <MarkdownRenderer content={markdownContent} />
          {!markdownContent && (
            <div className="flex h-full items-center justify-center text-gray-400">
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
