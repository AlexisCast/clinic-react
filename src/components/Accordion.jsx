import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Accordion.module.css';

export function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.AccordionButton__conatainer}>
        <button onClick={toggleAccordion} className={styles.AccordionButton__button}>
          <span>{title}</span>
          <FontAwesomeIcon
            className={styles.faCaretDown}
            icon={faCaretDown}
            size="sm"
            onClick={toggleAccordion}
          />
        </button>
      </div>

      {isOpen && (
        <div className={styles.Accordion__content}>
          <ul>{children}</ul>
        </div>
      )}
    </div>
  );
}

export const AccordionItem = ({ closeDrawer, route, label }) => {
  return (
    <li className={styles.AccordionItem}>
      <Link to={route} onClick={closeDrawer}>
        - {label}
      </Link>
    </li>
  );
};

export default Accordion;
