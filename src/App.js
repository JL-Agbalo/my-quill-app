import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  // const toolbarOptions = [['bold', 'italic'], ['link', 'image']];
  // https://quilljs.com/docs/modules/toolbar
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  
  const module = {
    toolbar: toolbarOptions,
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quill Example</h1>
      </header>
      <div className="editor">
        <ReactQuill value={editorHtml} onChange={handleChange} modules={module} />
      </div>
    </div>
  );
}

export default App;
