import React from 'react';
import FlipBook from './FlipBook';
import './App.css';
import FlipBookPage from "./FlipBookPage";

function App() {
  return (
    <div className="App">
      <FlipBook
        width={320}
        height={480}
        maxWidth={640}
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
