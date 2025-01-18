const ResponsiveTable = ({ headers, data, renderRow }) => {
  return (
    <div className="min-w-full">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data?.map((item) => renderRow(item))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {data?.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-lg border border-gray-200 space-y-3"
          >
            {headers.map((header, index) => (
              <div key={index} className="space-y-1">
                <div className="text-sm font-medium text-gray-500">{header}</div>
                <div className="text-sm text-gray-900">
                  {typeof renderRow(item, true)[index] === 'object' 
                    ? renderRow(item, true)[index].content 
                    : renderRow(item, true)[index]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveTable;