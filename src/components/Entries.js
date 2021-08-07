import Entry from './Entry';

function Entries({ items }) {

  return (
    <section className="mt-8 md:px-8">
      <div className="shadow-md bg-gray-100 grid grid-cols-1 p-6">
        {items.map((entry, index) => (
          <Entry key={index} text={entry.text} value={entry.value} />
        ))}
      </div>
    </section>
  )
}

export default Entries
