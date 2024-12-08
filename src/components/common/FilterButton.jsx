export default function FilterButton({ name, view, setView }) {
    return (
        <button
            className={`px-4 py-1.5 rounded-full text-md font-medium ${
                view === name
                    ? "bg-indigo-50 text-indigo-600 "
                    : "bg-gray-100 text-gray-600"
            } transition-colors duration-300`}
            onClick={() => setView(name)}
        >
            {name}
        </button>
    );
}