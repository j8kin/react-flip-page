import React from "react";
import './App.css';
import pageEvenImage from './PageEven.png';
import pageOddImage from './PageOdd.png';

interface FlipBookPageProps {
    pageNum: number;
}

const FlipBookPage = React.forwardRef<HTMLDivElement, FlipBookPageProps>(({pageNum}, ref) => {
    const isEvenPage = pageNum % 2 === 0;
    const backgroundImage = isEvenPage ? pageEvenImage : pageOddImage;

    return (
        <div className="demoPage" ref={ref} style={{
            backgroundImage: backgroundImage,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#f4e4bc'
        }}>
            <h1>Page Header</h1>
            <p>Some text</p>
            <p>Page number: {pageNum}</p>
        </div>
    );
});
export default FlipBookPage;