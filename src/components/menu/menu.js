import './menu.css';
import PlateImg from '/Users/mantas/Desktop/Boolean/React/project/src/assets/img/food4.png';
import React, { useEffect, useState } from 'react';
import { isUserLoggedIn, logout } from '/Users/mantas/Desktop/Boolean/React/project/src/components/Login/auth.js';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', ingredients: '' });

  useEffect(() => {
    fetch('http://localhost:3000/menuItems')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewItem(prevItem => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:3000/menuItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        setMenuItems(prevItems => [...prevItems, data]);
        setNewItem({ title: '', ingredients: '' });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      <div className="menu-container">
        <img src={PlateImg} className="plate-img" alt="event" />
        <p className="menu-text-over-img">MENU</p>
      </div>
      <div className="menu-items">
        <h2>Menu Items:</h2>
        {menuItems.map(item => (
          <div key={item.id}>
            <h3>{item.title.toUpperCase()}</h3>
            <p>{item.ingredients}</p>
          </div>
        ))}
      </div>
      {isUserLoggedIn() && (
        <form onSubmit={handleSubmit}>
          <h2>Add Menu Item:</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Ingredients:
            <input
              type="text"
              name="ingredients"
              value={newItem.ingredients}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Menu Item</button>
        </form>
      )}
    </>
  );
};

export default Menu;
