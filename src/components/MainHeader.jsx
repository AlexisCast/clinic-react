import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './MainHeader.module.css';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header>
      <nav>
        <div className={styles.navItem}>
          <div className={styles.LogoContainerNav}>Your Logo Here</div>
          <button className={styles.HamburgerNav} onClick={toggleDrawer}>
            hamIcon
          </button>
        </div>
        <ul className={styles.navItem}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-patients">New Patients</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li
            onMouseEnter={toggleSubMenu}
            onMouseLeave={toggleSubMenu}
            className={`${styles.dropdown} ${showSubMenu ? styles.show : ''}`}>
            <Link to="/services">Services</Link>
            <span style={{ marginLeft: '5px' }}>-</span>
            <ul className={`${styles['dropdown-content']} ${showSubMenu ? styles.show : ''}`}>
              <li>
                <div>jiz</div>
              </li>
              <li>
                <div>baz</div>
              </li>
              <li>
                <div>bar</div>
              </li>
              <li>
                <div>foo</div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.navItem}>
          <input type="text" placeholder="Search" onChange={(e) => console.log(e.target.value)} />
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
