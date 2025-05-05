import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/views/Home';
import CardLayout from './components/views/CardLayout';
import SectionContainer from './components/views/SectionContainer';

const App = () => {
  // Sample data for CardLayout (moved inside the component)
  const cardsData = [
    { image: 'image1.jpg', title: 'Card 1', description: 'Description for card 1' },
    { image: 'image2.jpg', title: 'Card 2', description: 'Description for card 2' },
    { image: 'image3.jpg', title: 'Card 3', description: 'Description for card 3' },
  ];

  // Data for SectionContainer (moved inside the component)
  const sectionData = {
    title: 'Section Title',
    content: 'This is the content of the section.',
  };

  return (
    <>
     
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Home />
        {/* Pass cardsData as prop to CardLayout */}
        <CardLayout cardsData={cardsData} />
        {/* Pass title and content as props to SectionContainer */}
        <SectionContainer title={sectionData.title}>
          <p>{sectionData.content}</p>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
};

export default App;