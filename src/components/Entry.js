const Entry = ({ text, value }) => (
  <div className="bg-white rounded mb-2 p-3">
    <div className="flex justify-between">
      <h2 className="font-semibold">{text}</h2>
      <span className={`font-semibold ${value < 0 ? 'text-red-500' : 'text-green-500'}`}>{`${value} €`}</span>
    </div>
    <h3 className="text-sm text-gray-500">19.02.2020</h3>
  </div>
);

export default Entry;
