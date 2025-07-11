import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [markdownInput, setMarkdownInput] = useState('');

  return (
    <div className="App h-screen w-full p-4 bg-slate-300">
      <div className="main-Wrapper">
        <Editor />
        <Preview />
      </div>
    </div>
  );
}

export default App;
