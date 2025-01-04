// FeedbackSection.js
export default function FeedbackSection({ feedback }) {
  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-250">
      <h2 className="text-xl font-semibold mb-6">Event Feedback</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Event
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Feedback
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                User
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {feedback.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.feedback}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.user}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
