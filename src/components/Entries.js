import Entry from './Entry';

function Entries({ items }) {

  return (
    <section className="mt-8 md:px-8 md:max-w-5xl mx-auto">
      <div className="shadow-md bg-gray-100 grid grid-cols-1 p-4 md:p-8 rounded">
        {items.map((entry, index) => (
          <Entry key={index} text={entry.text} value={entry.value} />
        ))}
      </div>
    </section>
  )
}

export default Entries
