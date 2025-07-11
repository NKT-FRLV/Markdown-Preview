import { useState } from 'react';
import './App.css';
import Markdown from 'react-markdown';
import Editor from './components/Editor';
import Preview from './components/Preview';

// import {mockMarkdown} from './mocks/mock'

function App() {
  const [markdownInput, setMarkdownInput] = useState('');

  return (
    <div className="App h-screen w-full p-4 bg-slate-300">
      <div className="main-Wrapper">
        <Editor />
        <Preview htmlOutput={<Markdown>{markdownInput}</Markdown>}/>
      </div>
    </div>
  );
}

export default App;
