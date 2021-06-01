import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  const [item, setItem] = useState();

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.com/v1/playlists/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data);
    console.log(item);
  };
  useEffect(() => {
    console.log(match);
    fetchItem();
  }, []);

  return (
    <div>
      <h1>{item.description}</h1>
      <h1>{item.gameType}</h1>
    </div>
  );
}

export default ItemDetail;
