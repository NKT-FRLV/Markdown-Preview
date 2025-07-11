import { useState } from 'react';
import './App.css';
import Markdown from 'react-markdown';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Header from './components/Header';

// import {mockMarkdown} from './mocks/mock'

function App() {
  const [markdownInput, setMarkdownInput] = useState('');

  console.log(markdownInput)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMarkdownInput(value);
  };

  return (
    <div className="App h-screen w-full p-4 bg-slate-300">
      <div className="main-Wrapper flex flex-col  ">
        <Header />
        <div className="flex w-full gap-4 ">
          <Editor onChange={handleChange} inputValue={markdownInput} />
          <Preview htmlOutput={<Markdown>{markdownInput}</Markdown>} />
        </div>
      </div>
    </div>
  );
}

export default App;
