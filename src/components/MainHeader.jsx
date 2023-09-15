import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Drawer, ButtonT } from '@castalexis/ac-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MainHeader.module.css';
import LinkDropdown from './LinkDropdown';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showSubMenu, setShowSubMenu] = useState(false);

  // const toggleSubMenu = () => {
  //   setShowSubMenu(!showSubMenu);
  // };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header>
      <Drawer isOpen={isOpen} onClose={toggleDrawer}>
        <h1>Drawer Header</h1>
        <div>
          <Link to="/" onClick={toggleDrawer}>
            Home
          </Link>
          <Link to="/new-patients" onClick={toggleDrawer}>
            New Patients
          </Link>
          <Link to="/services" onClick={toggleDrawer}>
            Services
          </Link>
          <Link to="/products" onClick={toggleDrawer}>
            Products
          </Link>
          <Link to="/contact" onClick={toggleDrawer}>
            contact
          </Link>
          <div>crack</div>
          <ButtonT onClick={toggleDrawer} variant="sm">
            Close
          </ButtonT>
        </div>
      </Drawer>
      <nav>
        <div className={styles.navItem}>
          <div className={styles.LogoContainerNav}>Your Logo Here</div>
          <FontAwesomeIcon
            className={styles.HamburgerNav}
            icon={faBars}
            size="xl"
            onClick={toggleDrawer}
          />
        </div>
        <ul className={styles.navItem}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-patients">New Patients</Link>
          </li>

          <LinkDropdown label="Products" route="/products">
            <li>
              <div>Products jiz</div>
            </li>
            <li>
              <div>Products baz</div>
            </li>
            <li>
              <div>Products bar</div>
            </li>
            <li>
              <div>Products foo</div>
            </li>
          </LinkDropdown>
          <LinkDropdown label="Services">
            <li>
              <div>Services jiz1</div>
            </li>
            <li>
              <div>Services baz2</div>
            </li>
            <li>
              <div>Services bar3</div>
            </li>
            <li>
              <div>Services foo4</div>
            </li>
          </LinkDropdown>
          <LinkDropdown label="Resources" route="/resources">
            <li>
              <div>Resources jiz</div>
            </li>
            <li>
              <div>Resources baz</div>
            </li>
            <li>
              <div>Resources bar</div>
            </li>
            <li>
              <div>Resources foo</div>
            </li>
          </LinkDropdown>
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
