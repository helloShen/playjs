/* eslint-disable react-hooks/exhaustive-deps */
import './Page.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  const { id } = useParams();

  const fetchItem = async () => {
    const response = await fetch('https://fortnite-api.com/v2/cosmetics/br/search/ids?' +
      new URLSearchParams({
        language: 'en',
        id: id,
    }));
    const responseObj = await response.json();
    const itemObj = responseObj.data[0];
    setItem(itemObj);
  };

  return (
    <div className="page">
      <h1 className="title">{item.name}</h1>
      {(item.images && item.images.icon) ? <img src={item.images.icon} alt="item-img"/> : null}
    </div>
  );
};

export default Item;