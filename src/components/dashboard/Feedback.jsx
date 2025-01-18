import useFetchData from "../../customHooks/fetchData";
import Loading from "../common/Loading";
import { FailureCard } from "../common/FailureCard";
import ResponsiveTable from "./TableComponent";

const FeedbackSection = () => {
  const { loading, data: feedback, error } = useFetchData("admin/feedbacks");

  if (loading) return <Loading message="Fetching feedback received..." />;
  if (error) return <FailureCard message={error} />;

  const headers = ["Event Name", "Rating", "Category", "Description"];

  const renderRow = (item, isMobile = false) => {
    const cells = [
      item.eventTitle,
      {
        content: (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            {item.rating}/5
          </span>
        )
      },
      item.selectedCategory,
      item.experienceDescription
    ];

    return isMobile ? cells : (
      <tr key={item._id} className="hover:bg-gray-50">
        {cells.map((cell, index) => (
          <td key={index} className="px-6 py-4 text-sm text-gray-500">
            {typeof cell === 'object' ? cell.content : cell}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <div className="bg-white rounded-lg py-8 p-4 md:p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-6">Event Feedback</h2>
      <ResponsiveTable
        headers={headers}
        data={feedback}
        renderRow={renderRow}
      />
    </div>
  );
};

export default FeedbackSection;