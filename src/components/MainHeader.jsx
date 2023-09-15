import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MainHeader.module.css';
import LinkDropdown from './LinkDropdown';
import DrawerLayout from './DrawerLayout';

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
      {/* <Drawer isOpen={isOpen} onClose={toggleDrawer}>
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
      </Drawer> */}
      {<DrawerLayout isOpen={isOpen} onClose={toggleDrawer} />}
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
              <Link to="/products/jiz">Products jiz</Link>
            </li>
            <li>
              <Link to="/products/baz">Products baz</Link>
            </li>
            <li>
              <Link to="/products/bar">Products bar</Link>
            </li>
            <li>
              <Link to="/products/foo">Products foo</Link>
            </li>
          </LinkDropdown>
          <LinkDropdown label="Services" route="/services">
            <li>
              <Link to="/services/jiz">Products jiz</Link>
            </li>
            <li>
              <Link to="/services/baz2">Products baz2</Link>
            </li>
            <li>
              <Link to="/services/bar3">Products bar3</Link>
            </li>
            <li>
              <Link to="/services/foo4">Products foo4</Link>
            </li>
          </LinkDropdown>
          <LinkDropdown label="Resources" route="/resources">
            <li>
              <Link to="/resources/jiz">Resources jiz</Link>
            </li>
            <li>
              <Link to="/resources/baz">Resources baz</Link>
            </li>
            <li>
              <Link to="/resources/bar">Resources bar</Link>
            </li>
            <li>
              <Link to="/resources/foo">Resources foo</Link>
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
