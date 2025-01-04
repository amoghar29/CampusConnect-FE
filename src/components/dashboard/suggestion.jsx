// SuggestionsSection.js
export default function SuggestionsSection({ suggestions }) {
  return (
<div className="bg-white rounded-lg py-8 p-6 border border-gray-250">
<div className="flex justify-between items-center mb-6 ">
        <h2 className="text-xl font-semibold">Improvement Suggestions</h2>
   
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Suggestion
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {suggestions.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{item.text}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        item.status === "resolved"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
