const Entry = ({text, value}) => {
  return (
    <div className="bg-white rounded mr-2 mb-2 p-3 flex justify-between">
      <h2 className="font-semibold">{text}</h2>
      <h3 className={value < 0 ? 'text-red-800' : ''}>{value + ' €'}</h3>
    </div>
  )
}

export default Entry
