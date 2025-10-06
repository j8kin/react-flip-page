import React from 'react';
import HTMLFlipBook from 'react-pageflip';

interface FlipBookPageProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxShadowOpacity?: number;
  showCover?: boolean;
  mobileScrollSupport?: boolean;
  startPage?: number;
  drawShadow?: boolean;
  flippingTime?: number;
  usePortrait?: boolean;
  startZIndex?: number;
  autoSize?: boolean;
  clickEventForward?: boolean;
  useMouseEvents?: boolean;
  swipeDistance?: number;
  showPageCorners?: boolean;
  disableFlipByClick?: boolean;
  size?: "fixed" | "stretch";
}

const FlipBook: React.FC<FlipBookPageProps> = ({
  width = 320,
  height = 480,
  children,
  className = "flipbook",
  style = {},
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  maxShadowOpacity = 0.5,
  showCover = false,
  mobileScrollSupport = true,
  startPage = 0,
  drawShadow = true,
  flippingTime = 1000,
  usePortrait = false,
  startZIndex = 0,
  autoSize = false,
  clickEventForward = true,
  useMouseEvents = true,
  swipeDistance = 30,
  showPageCorners = true,
  disableFlipByClick = false,
  size = "fixed"
}) => {
  return (
    <HTMLFlipBook
      width={width}
      height={height}
      size={size}
      minWidth={minWidth || width}
      minHeight={minHeight || height}
      maxWidth={maxWidth || width * 2}
      maxHeight={maxHeight || height}
      maxShadowOpacity={maxShadowOpacity}
      showCover={showCover}
      mobileScrollSupport={mobileScrollSupport}
      className={className}
      style={style}
      startPage={startPage}
      drawShadow={drawShadow}
      flippingTime={flippingTime}
      usePortrait={usePortrait}
      startZIndex={startZIndex}
      autoSize={autoSize}
      clickEventForward={clickEventForward}
      useMouseEvents={useMouseEvents}
      swipeDistance={swipeDistance}
      showPageCorners={showPageCorners}
      disableFlipByClick={disableFlipByClick}
    >
      {children}
    </HTMLFlipBook>
  );
};

export default FlipBook;