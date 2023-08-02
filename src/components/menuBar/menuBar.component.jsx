import React from 'react';
import './menuBar.css';

const MenuBar = ({ categories }) => {
  return (
    <menuBars>
      <ul className="menu">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </menuBars>
  );
};

export default MenuBar;