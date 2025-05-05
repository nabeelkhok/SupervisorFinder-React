import React, { useState, useEffect } from 'react'; // Combined import
import SupervisorList from './SupervisorList';
import BookmarkedList from './BookmarkedList';
import FilterList from './FilterList';
import HeroSection from './HeroSection';
import SectionContainer from './SectionContainer';
import supervisorsData from './supervisordata';


export default function Home() {
  const [supervisors] = useState(supervisorsData);
  const [filtered, setFiltered] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const availableSupervisors = supervisors.filter((s) => s.availableSlots > 0);
    setFiltered(availableSupervisors);
    setIsLoading(false);
  }, [supervisors]);

  const handleFilter = (term) => {
    if (!term.trim()) {
      setFiltered(supervisors.filter((s) => s.availableSlots > 0));
      return;
    }
    const lower = term.toLowerCase();
    const result = supervisors.filter(
      (s) => s.researchDomain.toLowerCase().includes(lower) && s.availableSlots > 0
    );
    setFiltered(result);
  };

  const handleBookmark = (id) => {
    const found = supervisors.find((s) => s.id === id);
    if (found && !bookmarked.some((b) => b.id === id)) {
      setBookmarked([...bookmarked, found]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarked(bookmarked.filter((s) => s.id !== id));
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading supervisors...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <SectionContainer title="Search Supervisors">
        <FilterList onFilter={handleFilter} />
      </SectionContainer>

      <SectionContainer title="Available Supervisors">
        {filtered.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No available supervisors match your criteria
          </div>
        ) : (
          <SupervisorList
            supervisors={filtered}
            onBookmark={handleBookmark}
            bookmarkedIds={bookmarked.map((s) => s.id)}
          />
        )}
      </SectionContainer>

      <SectionContainer title="Bookmarked Supervisors">
        {bookmarked.length > 0 ? (
          <BookmarkedList supervisors={bookmarked} onRemove={removeBookmark} />
        ) : (
          <p className="text-gray-500">No supervisors bookmarked yet.</p>
        )}
      </SectionContainer>
    </div>
  );
}
