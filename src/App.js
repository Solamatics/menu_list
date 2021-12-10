import { useState } from 'react';
import './App.css';
import Menu from './Menu';
import items from './data'
import Category from './Category';

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState([]);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <section className="menu section">
      <div className="title">
        <h2>Menu List</h2>
        <div className="underline"></div>
      </div>
      <Category categories={allCategories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
}

export default App;
