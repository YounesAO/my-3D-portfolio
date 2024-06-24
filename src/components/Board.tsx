'use client';
import React, { useState } from 'react';
import Card from './Card';
import SvgLine from './Line';

interface CardData {
  id: string;
  text: string;
  image: string;
  x: number;
  y: number;
}

const initialCards: CardData[] = [
  { id: '1', text: 'Younes Ait Ouahda', image: '/imgs/Profile.png', x: 50, y: 50 },
  { id: '2', text: 'Software engineering', image: '/imgs/ensaj.png', x: 350, y: 200 },
  { id: '3', text: ' Associate degree', image: '/imgs/estd.jpg', x: 600, y: 300 },
  // Add more cards as needed
];

const Board: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [lines, setLines] = useState<{ start: CardData; end: CardData }[]>([]);

  const updateCardPosition = (id: string, x: number, y: number) => {
    setCards(cards.map(card => card.id === id ? { ...card, x, y } : card));
  };

  React.useEffect(() => {
    const allLines: { start: CardData; end: CardData }[] = [];
    for (let i = 0; i < cards.length-1; i++) {
        allLines.push({ start: cards[i], end: cards[i+1] });
      
    }
    setLines(allLines);
  }, [cards]);

  return (
    <div className="relative w-full h-screen bg-orange-900">
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {lines.map((line, index) => (
          <SvgLine key={index} start={line.start} end={line.end} />
        ))}
      </svg>
      {cards.map(card => (
        <Card key={card.id} {...card} updatePosition={updateCardPosition} />
      ))}
    </div>
  );
};

export default Board;
