import React from 'react';

export default function CardLayout({ cardsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <div key={index} className="card p-4 border rounded-lg">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
