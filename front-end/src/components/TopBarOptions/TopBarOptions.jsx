export function TopBarOptions() {
  return (
    <div className="flex w-1/3 justify-end">
      <div className="w-fit border-2 border-gray-500 px-3 py-2 font-bold">
        <select name="currency" id="currency">
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );
}
