

const QueryInput = () => {

  
  return (
    <div>
    <p className="text-gray-700">Enter your query below:</p>
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <button className="btn btn-accent">Search</button>
    </div>
  )
}

export default QueryInput