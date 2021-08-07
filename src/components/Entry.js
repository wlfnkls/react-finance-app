const Entry = ({ text, value }) => (
  <div className="bg-white rounded mb-2 p-3 flex justify-between">
    <h2 className="font-semibold">{text}</h2>
    <h3 className={value < 0 ? 'text-red-800' : ''}>{`${value} €`}</h3>
  </div>
);

export default Entry;
