const OperationCard = ({
  title,
  description,
  scope,
  isOpen,
  onToggle,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 ">
      <div className="flex flex-col h-full">
        {image && (
          <img
            src={image}
            alt={`${title} img`}
            className="w-full h-40 object-cover rounded-t-lg"
          />
        )}

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-amber-500 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Toggle Scope Button */}
        <button
          onClick={onToggle}
          className="text-amber-500 font-bold py-2 px-4 rounded focus:outline-none transition-all duration-300"
        >
          {isOpen ? "Hide Details" : "View Details"}
        </button>

        {/* Scope of Work Section */}
        {isOpen && (
          <div className="mt-4 text-sm text-gray-600">
            <h4 className="font-semibold mb-2">Scope of Work:</h4>
            <ul className="list-disc list-inside space-y-1">
              {scope.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OperationCard;
