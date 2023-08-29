
const ShowItems=({currentItems})=>{
    return(
        <div className="items">
        {currentItems &&
        currentItems.map((item, index) => (
          
            <h3 key={index}>Item #{item}</h3>
          
            ))}
        </div>
    )

}

export default ShowItems;