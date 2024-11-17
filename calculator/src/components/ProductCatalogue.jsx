import React from 'react';

function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="px-4 py-2 text-left text-gray-600 font-semibold"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b`}
            >
              {Object.values(row).map((value, i) => (
                <td key={i} className="px-4 py-2 text-gray-700">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

