import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggle } from '../store/ui-slice';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Accordion.module.css';

export function Accordion({ title, children }) {
  const dispatch = useDispatch();

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
          <ul onClick={() => dispatch(toggle())}>{children}</ul>
        </div>
      )}
    </div>
  );
}

export const AccordionItem = ({ route, label }) => {
  return (
    <li className={styles.AccordionItem}>
      <Link to={route}>- {label}</Link>
    </li>
  );
};

export default Accordion;
