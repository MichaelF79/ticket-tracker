import { useState } from 'react';

import TicketCounter from '../TicketCounter';

import styles from './TicketTracker.module.scss';

const TicketTracker = ({ employee }) => {
  const [Completed, setCompleted] = useState(0);

  const { name, role } = employee;

  const increment = () => {
    setCompleted(Completed + 1);
  };
  const decrement = () => {
    if (Completed > 0) {
      setCompleted(Completed - 1);
    }
  };

  return (
    <article className={styles.TicketTracker}>
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.role}>{role}</h3>
      <TicketCounter
        tickets={Completed}
        increment={increment}
        decrement={decrement}
      />
    </article>
  );
};

export default TicketTracker;