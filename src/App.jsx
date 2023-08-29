import PaginatedItems from "./components/PaginatedItems";

const App=()=>{
  return(
    <div className="container">
      <PaginatedItems itemsPerPage={4} />
    </div>


  )
}

export default App;