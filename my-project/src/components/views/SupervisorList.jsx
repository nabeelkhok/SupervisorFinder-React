export default function SupervisorList({ supervisors, onBookmark, bookmarkedIds }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {supervisors.map((supervisor) => (
        <div
          key={supervisor.id}
          className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-700">{supervisor.name}</h3>
          <p className="text-gray-600 mb-2">
            <strong>Domain:</strong> {supervisor.researchDomain}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Available Slots:</strong> {supervisor.availableSlots}
          </p>
          <button
            onClick={() => onBookmark(supervisor.id)}
            disabled={bookmarkedIds.includes(supervisor.id)}
            className={`w-full py-2 rounded-lg text-white font-medium transition-colors duration-200 ${
              bookmarkedIds.includes(supervisor.id)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {bookmarkedIds.includes(supervisor.id) ? "Bookmarked" : "Bookmark"}
          </button>
        </div>
      ))}
    </div>
  );
}
