import React, { useState } from 'react';
import { HiOutlineTemplate, HiOutlineChevronDown, HiOutlineCode, HiOutlineCollection, HiSparkles } from 'react-icons/hi';
import { markdownExamples, type MarkdownExample } from '../data/markdownExamples';


interface ExampleSelectorProps {
  onSelectExample: (content: string) => void;
}

const ExampleSelector: React.FC<ExampleSelectorProps> = ({ onSelectExample }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState<MarkdownExample | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HiCode':
        return <HiOutlineCode size={20} />;
      case 'HiCollection':
        return <HiOutlineCollection size={20} />;
      case 'HiSparkles':
        return <HiSparkles size={20} />;
      default:
        return <HiOutlineTemplate size={20} />;
    }
  };

  const handleSelectExample = (example: MarkdownExample) => {
    setSelectedExample(example);
    onSelectExample(example.content);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelectedExample(null);
    onSelectExample('');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 bg-slate-700 hover:bg-slate-600 text-slate-200 p-3 rounded-full font-medium transition-colors duration-200 border border-slate-600 shadow-md group"
      >
        <HiOutlineTemplate size={20} />
        <span>{selectedExample ? selectedExample.title : 'Select example'}</span>
        <HiOutlineChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full  left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-slate-700 overflow-hidden z-55">
          <div className="p-3 bg-gradient-to-r from-slate-700 to-slate-500 text-white">
            <h3 className="font-semibold flex items-center gap-2">
              <HiOutlineTemplate size={18} />
              Markdown examples
            </h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {selectedExample && (
              <button
                onClick={clearSelection}
                className="w-full p-3 text-left hover:bg-slate-300 transition-colors duration-200 border-b border-gray-200 text-red-600 font-medium"
              >
                🗑️ Clear selection
              </button>
            )}
            
            {markdownExamples.map((example) => (
              <button
                key={example.id}
                onClick={() => handleSelectExample(example)}
                className={`w-full p-4 text-left hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-300 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                  selectedExample?.id === example.id ? 'bg-slate-300' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-slate-600 mt-1">
                    {getIcon(example.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 mb-1">
                      {example.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {example.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-45" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ExampleSelector; 