export default function BookmarkedList({ supervisors, onRemove }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {supervisors.map((supervisor) => (
        <div
          key={supervisor.id}
          className="bg-blue-50 shadow-md rounded-2xl p-6 border border-blue-200"
        >
          <h3 className="text-xl font-semibold text-blue-800">{supervisor.name}</h3>
          <p className="text-gray-700 mb-2">
            <strong>Domain:</strong> {supervisor.researchDomain}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Available Slots:</strong> {supervisor.availableSlots}
          </p>
          <button
            onClick={() => onRemove(supervisor.id)}
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Remove Bookmark
          </button>
        </div>
      ))}
    </div>
  );
}
