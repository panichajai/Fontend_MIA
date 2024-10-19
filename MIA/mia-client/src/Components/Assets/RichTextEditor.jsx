import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px' }}>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        placeholder="เขียนข้อความที่นี่..."
      />
    </div>
  );
};

export default RichTextEditor;
