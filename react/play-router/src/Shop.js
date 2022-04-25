import './Page.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
    const responseObj = await response.json();
    const itemsList = responseObj.data.items;
    setItems(itemsList);
  };

  return (
    <div className="page">
      <h1 className="title">Battle royale cosmetics</h1>
      {
        items.map((item) => {
          return (
            <Link to={"/shop/" + item.id} key={item.id}>
              <div className="item" key={item.id + "_" + Math.floor(Math.random() * 1000)}>{item.name}</div>
            </Link>
        )})
      }
    </div>
  );
};

export default Shop;