import React, { useState } from "react";
import "./App.css";

const Crud = () => {
  const initialFormState = {
    id: null,
    name: "",
    price: ""
  };

  const list = [
    {
      id: 1,
      name: 'HP',
      price: '2222' 
    },
    {
      id: 2,
      name: 'DELL',
      price: '2445'
    }
  ];

  const [lists, setList] = useState(list);
  const [currentItem, setCurrentItem] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const addItem = () => {
    if (currentItem.name && currentItem.price) {
      currentItem.id = lists.length + 1;
      setList([...lists, currentItem]);
      setCurrentItem(initialFormState);
    }
  };

  const editItem = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const updateItem = () => {
    setList(lists.map((item) => (item.id === currentItem.id ? currentItem : item)));
    setCurrentItem(initialFormState);
    setIsEditing(false);
  };

  const deleteItem = (id) => {
    setList(lists.filter((item) => item.id !== id));
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {lists.map((current) => (
            <tr key={current.id}>
              <td>{current.name}</td>
              <td>{current.price}</td>
              
              
              <td>
                <button onClick={() => editItem(current)}>Edit</button>
                <button onClick={() => deleteItem(current.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={currentItem.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={currentItem.price}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button onClick={updateItem}>Update</button>
        ) : (
          <button onClick={addItem}>Add</button>
        )}
      </div>
    </div>
  );
};

export default Crud;

