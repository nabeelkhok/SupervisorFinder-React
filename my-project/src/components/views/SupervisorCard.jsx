// src/views/SupervisorCard.jsx
import React from 'react'

const SupervisorCard = ({ supervisor, onBookmark, isBookmarked }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${isBookmarked ? 'ring-2 ring-yellow-400' : ''}`}>
      <h3 className="text-xl font-semibold mb-2">{supervisor.name}</h3>
      <p className="text-gray-600 mb-1"><strong>Research Domain:</strong> {supervisor.researchDomain}</p>
      <p className="text-gray-600 mb-1"><strong>Available Slots:</strong> {supervisor.availableSlots}</p>
      <p className="text-gray-600 mb-4"><strong>Contact:</strong> {supervisor.contactInfo}</p>
      <button
        onClick={() => onBookmark(supervisor.id)}
        className={`w-full px-4 py-2 text-white rounded-lg ${
          isBookmarked ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isBookmarked ? 'Bookmarked ✓' : 'Bookmark'}
      </button>
    </div>
  )
}

export default SupervisorCard