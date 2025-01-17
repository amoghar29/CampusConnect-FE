import useFetchData from "../../customHooks/fetchData";
import Loading from "../common/Loading";
import { FailureCard } from "../common/FailureCard";

const FeedbackSection = () => {
  const { loading, data: feedback, error } = useFetchData("admin/feedbacks");

  if (loading) return <Loading message="Fetching feedback received..." />;
  if (error) return <FailureCard message={error} />;
  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-6">Event Feedback</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Event Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {feedback?.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.eventTitle}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    {item.rating}/5
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.selectedCategory}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.experienceDescription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackSection;
