const Category = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map(category => {
          return <button className="filter-btn" onClick={() => filterItems(category)}>{category}</button>
      })}
    </div>
  );
};

export default Category;
