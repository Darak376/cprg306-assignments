function Item({ name, quantity, category }){
    return (
        <div>
            <li>{name}</li>
            {quantity}    
            {category}
        </div>
    );
};

export default Item;
