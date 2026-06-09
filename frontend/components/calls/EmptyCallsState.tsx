export function EmptyCallsState() {
  return (
    <div className="rounded-xl border border-dashed border-gray-700 p-10 text-center">
      <h2 className="text-xl font-semibold text-white">
        No Calls Yet
      </h2>

      <p className="mt-2 text-gray-400">
        Calls will appear here once received.
      </p>
    </div>
  );
}