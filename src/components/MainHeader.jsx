import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggle } from '../store/ui-slice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MainHeader.module.css';
import LinkDropdown from './LinkDropdown';
import DrawerLayout from './DrawerLayout';

const MainHeader = () => {
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(toggle());
  };

  return (
    <header>
      <DrawerLayout />
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
