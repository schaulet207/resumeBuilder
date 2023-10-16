import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export function QuillEditor() {
  const quillRef = useRef(null);
  const quillInstance = useRef(null); // Store the Quill instance

  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <div>
      <div ref={quillRef}></div>
    </div>
  );
}