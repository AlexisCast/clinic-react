import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toggle } from '../store/ui-slice';
import { Drawer } from '@castalexis/ac-components';
import Accordion, { AccordionItem } from './Accordion';

import styles from './DraerLayout.module.css';

const ListItem = ({ children }) => {
  return <li className={styles.Drawer__nav__li}>{children}</li>;
};

const DrawerLayout = () => {
  const drawerIsVisbile = useSelector((state) => state.ui.drawerIsVisbile);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(toggle());
  };

  return (
    <Drawer isOpen={drawerIsVisbile} onClose={toggleDrawer}>
      <div className={styles.Drawer__container}>
        <h1>Drawer Header</h1>
        <nav className={styles.Drawer__nav}>
          <ul>
            <ListItem>
              <Link to="/" onClick={toggleDrawer}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/new-patients" onClick={toggleDrawer}>
                New Patients
              </Link>
            </ListItem>
            <ListItem>
              <Accordion title="Products">
                <AccordionItem route="/products" label="All Products" />
                <AccordionItem route="/products/jiz" label="Products jiz" />
                <AccordionItem route="/products/baz" label="Products baz" />
                <AccordionItem route="/products/bar" label="Products bar" />
                <AccordionItem route="/products/foo" label="Products foo" />
              </Accordion>
            </ListItem>
            <ListItem>
              <Accordion title="Services">
                <AccordionItem route="/services" label="All Services" />
                <AccordionItem route="/services/jiz" label="Services jiz" />
                <AccordionItem route="/services/baz2" label="Services baz2" />
                <AccordionItem route="/services/bar3" label="Services bar3" />
                <AccordionItem route="/services/foo4" label="Services foo4" />
              </Accordion>
            </ListItem>
            <ListItem>
              <Accordion title="Resources">
                <AccordionItem route="/resources" label="All Resources" />
                <AccordionItem route="/resources/jiz" label="Resources jiz" />
                <AccordionItem route="/resources/baz" label="Resources baz" />
                <AccordionItem route="/resources/bar" label="Resources bar" />
                <AccordionItem route="/resources/foo" label="Resources foo" />
              </Accordion>
            </ListItem>
            <ListItem>
              <Link to="/contact" onClick={toggleDrawer}>
                contact
              </Link>
            </ListItem>
          </ul>
        </nav>
      </div>
    </Drawer>
  );
};

export default DrawerLayout;
