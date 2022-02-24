import React, {useState} from "react";

function CategoryFilter(props) {

  const [isSelected, setSelected] = useState(false)
  // const [filterBy, setFilterBy] = useState("All")

  const categoryList = props.categories.map((category)=>(
    <button className = {isSelected ? "seleted": null} onClick={handleClick}>{category}</button>
  ))

  function handleClick(){
    console.log("Click Click")
    return setSelected(!isSelected)
  }

  // function handleFilterChange(event){
  //   setFilterBy(event.target.value)
  // }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* <select name="filter" onChange={handleFilterChange}> */}
      {categoryList}
      {/* render <button> elements for each category here */}
      {/* </select> */}
    </div>
  );
}

export default CategoryFilter;
