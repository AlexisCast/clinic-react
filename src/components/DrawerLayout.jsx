import { Link } from 'react-router-dom';

import { Drawer } from '@castalexis/ac-components';
import Accordion, { AccordionItem } from './Accordion';

import styles from './DraerLayout.module.css';

const ListItem = ({ children }) => {
  return <li className={styles.Drawer__nav__li}>{children}</li>;
};

const DrawerLayout = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className={styles.Drawer__container}>
        <h1>Drawer Header</h1>
        <nav className={styles.Drawer__nav}>
          <ul>
            <ListItem>
              <Link to="/" onClick={onClose}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/new-patients" onClick={onClose}>
                New Patients
              </Link>
            </ListItem>
            <ListItem>
              <Accordion title="Products">
                <AccordionItem route="/products" label="All Products" closeDrawer={onClose} />
                <AccordionItem route="/products/jiz" label="Products jiz" closeDrawer={onClose} />
                <AccordionItem route="/products/baz" label="Products baz" closeDrawer={onClose} />
                <AccordionItem route="/products/bar" label="Products bar" closeDrawer={onClose} />
                <AccordionItem route="/products/foo" label="Products foo" closeDrawer={onClose} />
              </Accordion>
            </ListItem>
            <ListItem>
              <Accordion title="Services">
                <AccordionItem route="/services" label="All Services" closeDrawer={onClose} />
                <AccordionItem route="/services/jiz" label="Services jiz" closeDrawer={onClose} />
                <AccordionItem route="/services/baz2" label="Services baz2" closeDrawer={onClose} />
                <AccordionItem route="/services/bar3" label="Services bar3" closeDrawer={onClose} />
                <AccordionItem route="/services/foo4" label="Services foo4" closeDrawer={onClose} />
              </Accordion>
            </ListItem>
            <ListItem>
              <Accordion title="Resources">
                <AccordionItem route="/resources" label="All Resources" closeDrawer={onClose} />
                <AccordionItem route="/resources/jiz" label="Resources jiz" closeDrawer={onClose} />
                <AccordionItem route="/resources/baz" label="Resources baz" closeDrawer={onClose} />
                <AccordionItem route="/resources/bar" label="Resources bar" closeDrawer={onClose} />
                <AccordionItem route="/resources/foo" label="Resources foo" closeDrawer={onClose} />
              </Accordion>
            </ListItem>
            <ListItem>
              <Link to="/contact" onClick={onClose}>
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
