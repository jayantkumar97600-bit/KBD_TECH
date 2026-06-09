type Call = {
  id: string;
  customerName: string;
  phoneNumber: string;
  status: string;
  direction: string;
  duration: number;
  createdAt: string;
};

interface Props {
  calls: Call[];
}

export function CallsTable({ calls }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#0B1739]">
      <table className="w-full">
        <thead className="border-b border-gray-800">
          <tr className="text-left text-sm text-gray-400">
            <th className="p-4">Customer</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Direction</th>
            <th className="p-4">Status</th>
            <th className="p-4">Duration</th>
          </tr>
        </thead>

        <tbody>
          {calls.map((call) => (
            <tr
              key={call.id}
              className="border-b border-gray-900 text-white"
            >
              <td className="p-4">
                {call.customerName || "Unknown"}
              </td>

              <td className="p-4">
                {call.phoneNumber}
              </td>

              <td className="p-4">
                {call.direction}
              </td>

              <td className="p-4">
                {call.status}
              </td>

              <td className="p-4">
                {call.duration}s
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}