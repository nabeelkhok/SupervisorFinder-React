import { useState } from "react";

export default function FilterList({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
      <input
        type="text"
        id="domain-search"
        placeholder="Search by research domain..."
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Filter
      </button>
    </form>
  );
}
