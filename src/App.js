import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quill Example</h1>
      </header>
      <div className="editor">
        <ReactQuill value={editorHtml} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
