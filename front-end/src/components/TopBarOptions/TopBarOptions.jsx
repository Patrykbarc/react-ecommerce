export function TopBarOptions() {
  return (
    <div className="flex w-1/3 justify-end">
      <div className="relative">
        <select
          name="currency"
          className="cursor-pointer appearance-none border-2 border-gray-500 px-3 py-2 pr-6 font-bold"
          id="currency"
        >
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            className="h-4 w-4 text-current"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
