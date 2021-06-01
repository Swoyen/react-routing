import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v1/playlists");
    const item = await data.json();
    setItems(item.data);
    // setItems(item);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => {
        return (
          <h1 key={item.id}>
            <Link to={`shop/${item.id}`}>{item.id}</Link>
          </h1>
        );
      })}
    </div>
  );
}

export default Shop;
