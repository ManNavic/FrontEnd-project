import './menu.css'
import PlateImg from '/Users/mantas/Desktop/Boolean/React/project/src/assets/img/food4.png'
import React, { useEffect, useState } from 'react';

const Menu = () =>{
    const [menuItems, setMenuItems] = useState([]);

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

      return (
        <>
          <div className='menu-container'>
            <img src={PlateImg} className='plate-img' alt='event' />
            <p className='menu-text-over-img'>MENU</p>
          </div>
          <div className='menu-items'>
            <h2>Menu Items:</h2>
            {menuItems.map(item => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.ingridiants}</p>
              </div>
            ))}
          </div>
        </>
      );
      
  
}

export default Menu