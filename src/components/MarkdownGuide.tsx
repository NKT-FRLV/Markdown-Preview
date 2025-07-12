import React from 'react';
import { HiOutlineX, HiOutlineBookOpen } from 'react-icons/hi';

interface MarkdownGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const MarkdownGuide: React.FC<MarkdownGuideProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-slate-800 border-l border-slate-700 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <HiOutlineBookOpen className="text-slate-400" size={24} />
            <h2 className="text-xl font-bold text-slate-100">Markdown Guide</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-700"
          >
            <HiOutlineX size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full pb-20">
          <div className="space-y-8 text-slate-300">
            
            {/* Basic Syntax */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🎯 Basic Syntax
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Headers</h4>
                  <code className="text-sm text-slate-400 block">
                    # H1 - Main title<br/>
                    ## H2 - Section title<br/>
                    ### H3 - Subsection
                  </code>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Text formatting</h4>
                  <code className="text-sm text-slate-400 block">
                    **Bold text**<br/>
                    *Italic text*<br/>
                    ~~Strikethrough~~<br/>
                    `Inline code`
                  </code>
                </div>
              </div>
            </section>

            {/* Lists */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📋 Lists
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Unordered List</h4>
                  <code className="text-sm text-slate-400 block">
                    - Item 1<br/>
                    - Item 2<br/>
                    &nbsp;&nbsp;- Nested item<br/>
                    - Item 3
                  </code>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Ordered List</h4>
                  <code className="text-sm text-slate-400 block">
                    1. First item<br/>
                    2. Second item<br/>
                    3. Third item
                  </code>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Task List</h4>
                  <code className="text-sm text-slate-400 block">
                    - [x] Completed task<br/>
                    - [ ] Incomplete task<br/>
                    - [ ] Another task
                  </code>
                </div>
              </div>
            </section>

            {/* Links and Images */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔗 Links & Images
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Links</h4>
                  <code className="text-sm text-slate-400 block">
                    [Link text](https://example.com)<br/>
                    [Link with title](https://example.com "Title")
                  </code>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Images</h4>
                  <code className="text-sm text-slate-400 block">
                    ![Alt text](image.jpg)<br/>
                    ![Alt text](image.jpg "Optional title")
                  </code>
                </div>
              </div>
            </section>

            {/* Code */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                💻 Code
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Inline Code</h4>
                  <code className="text-sm text-slate-400 block">
                    Use `console.log()` for debugging
                  </code>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Code Block</h4>
                  <code className="text-sm text-slate-400 block">
                    ```javascript<br/>
                    function greet(name) {`{`}<br/>
                    &nbsp;&nbsp;return `Hello, ${`{name}`}!`;<br/>
                    {`}`}<br/>
                    ```
                  </code>
                </div>
              </div>
            </section>

            {/* Tables */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📊 Tables
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                <code className="text-sm text-slate-400 block">
                  | Header 1 | Header 2 | Header 3 |<br/>
                  |----------|----------|----------|<br/>
                  | Cell 1   | Cell 2   | Cell 3   |<br/>
                  | Cell 4   | Cell 5   | Cell 6   |
                </code>
              </div>
            </section>

            {/* Quotes */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                💬 Quotes
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                <code className="text-sm text-slate-400 block">
                  &gt; This is a quote<br/>
                  &gt; <br/>
                  &gt; Multi-line quote<br/>
                  &gt; continues here
                </code>
              </div>
            </section>

            {/* Math */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🧮 Math (KaTeX)
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Inline Math</h4>
                  <code className="text-sm text-slate-400 block">
                    The formula is $E = mc^2$
                  </code>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Block Math</h4>
                  <code className="text-sm text-slate-400 block">
                    $$<br/>
                    \frac{"{-b \\pm \\sqrt{b^2-4ac}}"}{"{2a}"}<br/>
                    $$
                  </code>
                </div>
              </div>
            </section>

            {/* UML Diagrams */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📊 UML Diagrams (Mermaid)
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Sequence Diagram</h4>
                  <code className="text-sm text-slate-400 block">
                    ```mermaid<br/>
                    sequenceDiagram<br/>
                    &nbsp;&nbsp;Alice-&gt;&gt;Bob: Hello Bob, how are you?<br/>
                    &nbsp;&nbsp;Bob--&gt;&gt;John: How about you John?<br/>
                    &nbsp;&nbsp;Bob--x Alice: I am good thanks!<br/>
                    &nbsp;&nbsp;Note right of John: Bob thinks a long<br/>
                    &nbsp;&nbsp;long time, so long that the text<br/>
                    &nbsp;&nbsp;does not fit on a row.<br/>
                    ```
                  </code>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Flow Chart</h4>
                  <code className="text-sm text-slate-400 block">
                    ```mermaid<br/>
                    graph TD<br/>
                    &nbsp;&nbsp;A[Start] --&gt; B{`{Decision}`}<br/>
                    &nbsp;&nbsp;B --&gt;|Yes| C[Process A]<br/>
                    &nbsp;&nbsp;B --&gt;|No| D[Process B]<br/>
                    &nbsp;&nbsp;C --&gt; E[End]<br/>
                    &nbsp;&nbsp;D --&gt; E<br/>
                    ```
                  </code>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Class Diagram</h4>
                  <code className="text-sm text-slate-400 block">
                    ```mermaid<br/>
                    classDiagram<br/>
                    &nbsp;&nbsp;class Animal {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;+String name<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;+int age<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;+speak()<br/>
                    &nbsp;&nbsp;{`}`}<br/>
                    &nbsp;&nbsp;class Dog {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;+String breed<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;+bark()<br/>
                    &nbsp;&nbsp;{`}`}<br/>
                    &nbsp;&nbsp;Animal &lt;|-- Dog<br/>
                    ```
                  </code>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-medium text-slate-200 mb-2">Gantt Chart</h4>
                  <code className="text-sm text-slate-400 block">
                    ```mermaid<br/>
                    gantt<br/>
                    &nbsp;&nbsp;title A Gantt Diagram<br/>
                    &nbsp;&nbsp;dateFormat YYYY-MM-DD<br/>
                    &nbsp;&nbsp;section Section<br/>
                    &nbsp;&nbsp;A task :a1, 2024-01-01, 30d<br/>
                    &nbsp;&nbsp;Another task :after a1, 20d<br/>
                    ```
                  </code>
                </div>
              </div>
            </section>

            {/* Horizontal Rule */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ➖ Horizontal Rule
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                <code className="text-sm text-slate-400 block">
                  ---<br/>
                  or<br/>
                  ***
                </code>
              </div>
            </section>

            {/* Tips */}
            <section>
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                💡 Tips
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
                  <p className="text-sm text-blue-200">
                    <strong>💎 Pro tip:</strong> Use syntax highlighting by specifying the language after the opening code fence (```javascript, ```python, etc.)
                  </p>
                </div>
                
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                  <p className="text-sm text-green-200">
                    <strong>🚀 Performance:</strong> Large tables and complex math expressions may affect rendering speed
                  </p>
                </div>
                
                <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
                  <p className="text-sm text-purple-200">
                    <strong>✨ GitHub Flavored:</strong> This editor supports GitHub Flavored Markdown with task lists, tables, and more
                  </p>
                </div>
                
                <div className="bg-indigo-900/30 border border-indigo-700 rounded-lg p-4">
                  <p className="text-sm text-indigo-200">
                    <strong>🔧 Mermaid Diagrams:</strong> Create interactive UML diagrams using ```mermaid code blocks - supports flowcharts, sequence diagrams, class diagrams, and more
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkdownGuide; 