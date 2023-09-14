import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './LinkDropdown.module.css'; // Import your CSS module

const LinkDropdown = ({ label, route, children }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <li
      onMouseEnter={toggleSubMenu}
      onMouseLeave={toggleSubMenu}
      className={`${styles.dropdown} ${showSubMenu ? styles.show : ''}`}>
      <Link to={route}>{label}</Link>
      <span style={{ marginLeft: '5px' }}>-</span>
      <ul className={`${styles['dropdown-content']} ${showSubMenu ? styles.show : ''}`}>
        {children}
      </ul>
    </li>
  );
};

export default LinkDropdown;
