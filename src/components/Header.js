import { useState } from 'react';

const Header = ({ showAddForm, formVisible, onAdd }) => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      onAdd({ text, value });
      setText('');
      setValue('');
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0">
      <div className="flex justify-between align-middle p-4 md:px-8 items-center">
        <h2 className="cursor-pointer font-bold text-2xl text-gray-700 uppercase">
          Finances
        </h2>
        <button
          type="button"
          onClick={showAddForm}
          className="bg-green-500 text-white rounded px-6 py-2 shadow hover:shadow-md hover:bg-green-600 active:transform active:scale-95 cursor-pointer"
        >
          {formVisible ? 'Close' : 'Add'}
        </button>
      </div>
      {formVisible && (
        <form className="flex flex-col mt-4" onSubmit={onSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-gray-100 rounded p-2 my-2 focus:outline-none"
            type="text"
            placeholder="Position"
          />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray-100 rounded p-2 mb-4 focus:outline-none"
            type="text"
            placeholder="Wert"
          />
          <input
            className="bg-green-500 text-white rounded px-6 py-2 shadow hover:shadow-md hover:bg-green-600 active:transform active:scale-95 cursor-pointer"
            type="submit"
            value="Add"
          />
        </form>
      )}
    </header>
  );
};

export default Header;
