import React, { useEffect, useState } from 'react';
import { isUserLoggedIn } from '/Users/mantas/Desktop/Boolean/React/project/src/components/Login/auth.js';
import PlateImg from '/Users/mantas/Desktop/Boolean/React/project/src/assets/img/food4.png';
import './menu.css'

const Menu = ({ userLoggedIn }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', ingredients: '' });
  const [editItemId, setEditItemId] = useState(null);

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
    if (!newItem.title || !newItem.ingredients) {
      return; // If inputs are empty, don't submit
    }

    if (editItemId) {
      // Edit existing menu item
      fetch(`http://localhost:3000/menuItems/${editItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })
        .then(response => response.json())
        .then(updatedItem => {
          setMenuItems(prevItems => prevItems.map(item => (item.id === updatedItem.id ? updatedItem : item)));
          setNewItem({ title: '', ingredients: '' });
          setEditItemId(null);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      // Add new menu item
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
    }
  };

  const handleEdit = itemId => {
    const itemToEdit = menuItems.find(item => item.id === itemId);
    if (itemToEdit) {
      setNewItem({ title: itemToEdit.title, ingredients: itemToEdit.ingredients });
      setEditItemId(itemId);
    }
  };

  const handleDelete = itemId => {
    fetch(`http://localhost:3000/menuItems/${itemId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setMenuItems(prevItems => prevItems.filter(item => item.id !== itemId));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="menu-container">
        <img src={PlateImg} className="plate-img" alt="event" />
        <p className="menu-text-over-img">MENU</p>
      </div>
      <div className="menu-text-container">
        <h2 className="menu-text-title">Menu Items:</h2>
        {menuItems.map(item => (
          <div key={item.id}>
            <h3 className="menu-text-text">{item.title.toUpperCase()}</h3>
            <p className="menu-text-text">{item.ingredients}</p>
            {isUserLoggedIn() && (
              <div>
                <button onClick={() => handleEdit(item.id)} className="menu-add-button">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="menu-add-button">Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {isUserLoggedIn() && (
        <form onSubmit={handleSubmit} className="menu-add-container">
          <h2 className="menu-add-title">Add Menu Item:</h2>
          <label className="menu-add-label">
            <span>Title:</span>
            <input
              className="menu-add-input"
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label className="menu-add-label">
            <span>Ingredients:</span>
            <input
              className="menu-add-input"
              type="text"
              name="ingredients"
              value={newItem.ingredients}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit" className="menu-add-button">Add Menu Item</button>
        </form>
      )}
    </>
  );
};

export default Menu;