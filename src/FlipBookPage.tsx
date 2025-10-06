import React from "react";
import './App.css';

interface FlipBookPageProps {
    pageNum: number;
}

const FlipBookPage = React.forwardRef<HTMLDivElement, FlipBookPageProps>(({pageNum}, ref) => {
    const isEvenPage = pageNum % 2 === 0;
    const className = isEvenPage ? "evenPage" : "oddPage";

    return (
        <div className={`pageStyle ${className}`} ref={ref}>
            <h1>Page Header</h1>
            <p>Some text</p>
            <p>Page number: {pageNum}</p>
        </div>
    );
});
export default FlipBookPage;