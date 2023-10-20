import React, { useState } from 'react';
import './stylesheet.css'; // Import the external stylesheet

const Paragraph = () => {
  const [text, setText] = useState('');
  
  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="paragraph-container">
      <h1>Responsive Word Counter</h1>
      <div className="textarea-container">
        <textarea
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="word-count">
        Word Count: {countWords()}
      </div>
    </div>
  );
};

export default Paragraph;
