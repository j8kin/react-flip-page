import React from 'react';
import FlipBook from './FlipBook';
import './App.css';
import FlipBookPage from "./FlipBookPage";

function App() {
  return (
    <div className="App">
      <FlipBook
        width={333}
        height={429}
        maxWidth={860}
      >
        <FlipBookPage pageNum={1} />
        <FlipBookPage pageNum={2} />
        <FlipBookPage pageNum={3} />
        <FlipBookPage pageNum={4} />
      </FlipBook>
    </div>
  );
}

export default App;
