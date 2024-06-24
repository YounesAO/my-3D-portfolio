// components/SvgLine.tsx
import React from 'react';

interface SvgLineProps {
  start: { x: number, y: number };
  end: { x: number, y: number };
}

const SvgLine: React.FC<SvgLineProps> = ({ start, end }) => {
  return (
    <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      stroke="#ff000090"
      strokeWidth="1"
    />
  );
};

export default SvgLine;
