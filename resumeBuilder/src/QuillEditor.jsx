import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export function QuillEditor({ value, onChange, clearContent }) {
  const quillRef = useRef(null);
  const quillInstance = useRef(null); // Store the Quill instance

  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: 'snow',
      });

      // Listen for text changes in the Quill editor
      quillInstance.current.on('text-change', (delta, oldDelta, source) => {
        if (source === 'user') {
          // Check if the change was made by the user
          const editorContent = quillInstance.current.root.innerHTML;
          onChange(editorContent);
        }
      });
    }
  }, [onChange]);

  useEffect(() => {
    // Update Quill editor content when the 'value' prop changes
    if (quillInstance.current && value !== undefined) {
      quillInstance.current.root.innerHTML = value;
    }
  }, [value]);

  const clearQuillContent = () => {
    quillInstance.current.root.innerHTML = '';
  };

  return (
    <div>
      <button onClick={clearQuillContent}>Clear Content</button>
      <div ref={quillRef}></div>
    </div>
  );
}
