import useFetchData from "../../customHooks/fetchData";
import Loading from "../common/Loading";
import { FailureCard } from "../common/FailureCard";

export default function SuggestionsSection() {
  const {
    loading,
    data: suggestions,
    error,
  } = useFetchData("admin/suggestions");

  if (loading) return <Loading message="Fetching suggestions..." />;
  if (error) return <FailureCard message={error} />;
  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Event Suggestions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Suggested By
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Contact Details
              </th>

              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Event Details
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Event Info
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {suggestions?.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {item.userFullname}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">{item.userEmail}</div>
                  <div className="text-sm text-gray-500">
                    {item.userPhoneNumber}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {item.suggestedEventTitle}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.suggestedEventDescription}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Expected Count:</span>{" "}
                    {item.expectedHeadCount}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Duration:</span>{" "}
                    {item.eventDuration} hrs
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.additionalNotes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
