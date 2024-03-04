const Item = ({ item }) => {
    return (
      <ul>
        <h1>{item.name}</h1>
        <div>Quantity: {item.quantity}</div>
        <div>Category: {item.category}</div>
      </ul>
    );
  };
  
  export default Item;