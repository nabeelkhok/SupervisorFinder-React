import React from 'react';

export default function SectionContainer({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children} {/* Render children content dynamically */}
    </section>
  );
}
