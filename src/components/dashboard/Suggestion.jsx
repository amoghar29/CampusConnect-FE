import useFetchData from "../../customHooks/fetchData";
import Loading from "../common/Loading";
import { FailureCard } from "../common/FailureCard";
import ResponsiveTable from "./TableComponent";

const SuggestionsSection = () => {
  const { loading, data: suggestions, error } = useFetchData("admin/suggestions");

  if (loading) return <Loading message="Fetching suggestions..." />;
  if (error) return <FailureCard message={error} />;

  const headers = [
    "Suggested By",
    "Contact Details",
    "Event Details",
    "Event Info",
    "Notes"
  ];

  const renderRow = (item, isMobile = false) => {
    const cells = [
      {
        content: (
          <div className="text-sm font-medium text-gray-900">
            {item.userFullname}
          </div>
        )
      },
      {
        content: (
          <div className="space-y-1">
            <div className="text-sm text-gray-500">{item.userEmail}</div>
            <div className="text-sm text-gray-500">{item.userPhoneNumber}</div>
          </div>
        )
      },
      {
        content: (
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-900">
              {item.suggestedEventTitle}
            </div>
            <div className="text-sm text-gray-500">
              {item.suggestedEventDescription}
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="space-y-1">
            <div className="text-sm text-gray-500">
              <span className="font-medium">Expected Count:</span>{" "}
              {item.expectedHeadCount}
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-medium">Duration:</span>{" "}
              {item.eventDuration} hrs
            </div>
          </div>
        )
      },
      item.additionalNotes
    ];

    return isMobile ? cells : (
      <tr key={item._id} className="hover:bg-gray-50">
        {cells.map((cell, index) => (
          <td key={index} className="px-6 py-4">
            {typeof cell === 'object' ? cell.content : cell}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <div className="bg-white rounded-lg py-8 p-4 md:p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Event Suggestions</h2>
      </div>
      <ResponsiveTable
        headers={headers}
        data={suggestions}
        renderRow={renderRow}
      />
    </div>
  );
};

export default SuggestionsSection;