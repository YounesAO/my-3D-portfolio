// components/Card.tsx
import React from 'react';
import Draggable from 'react-draggable';

interface CardProps {
  id: string;
  text: string;
  image: string;
  x: number;
  y: number;
  updatePosition: (id: string, x: number, y: number) => void;
}

const Card: React.FC<CardProps> = ({ id, text, image, x, y, updatePosition }) => {
  return (
    <Draggable
      defaultPosition={{ x, y }}
      onStop={(e, data) => updatePosition(id, data.x, data.y)}
    >
      <div className="flex flex-col items-center absolute p-4 bg-white shadow-lg rounded-lg cursor-pointer">
      <img src={'/imgs/pin.png'} alt={text} className="absolute top-0 left-0 w-7 h-7 object-cover rounded-md" />

        <img src={image} alt={text} className="w-32 h-32 object-cover rounded-md" />
        <p className="mt-2 text-center">{text}</p>
      </div>
    </Draggable>
  );
};

export default Card;
