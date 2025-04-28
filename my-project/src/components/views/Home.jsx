import { useState, useEffect } from "react";
import SupervisorList from "./SupervisorList";
import BookmarkedList from "./BookmarkedList";
import supervisorsData from "./supervisordata";
import HeroSection from "./HeroSection";
import FilterList from "./FilterList";

export default function Home() {
  const [supervisors] = useState(supervisorsData);
  const [filtered, setFiltered] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize filtered data
  useEffect(() => {
    const availableSupervisors = supervisors.filter(s => s.availableSlots > 0);
    setFiltered(availableSupervisors);
    setIsLoading(false);
  }, [supervisors]); // Changed dependency to 'supervisors' instead of 'supervisorsData'

  const handleFilter = (term) => {
    if (!term.trim()) {
      // If search term is empty, reset to all available supervisors
      setFiltered(supervisors.filter(s => s.availableSlots > 0));
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
    setBookmarked(bookmarked.filter(s => s.id !== id));
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading supervisors...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <FilterList onFilter={handleFilter} />
      
      {filtered.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No available supervisors match your criteria
        </div>
      ) : (
        <SupervisorList 
          supervisors={filtered} 
          onBookmark={handleBookmark} 
          bookmarkedIds={bookmarked.map(s => s.id)} // Pass bookmarked IDs for UI indication
        />
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4">Bookmarked Supervisors</h2>
      {bookmarked.length > 0 ? (
        <BookmarkedList 
          supervisors={bookmarked} 
          onRemove={removeBookmark} 
        />
      ) : (
        <p className="text-gray-500">No supervisors bookmarked yet.</p>
      )}
    </div>
  );
}