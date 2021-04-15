import TicketTracker from '../TicketTracker';

import team from '../../data/teams'

import styles from './TicketTrackerApp.module.scss';

const TicketTrackerApp = () => {
  return (
    <main className={styles.TicketTrackerApp}>
      <h1>Ticket Tracker</h1>
      <section className={styles.trackerContainer}>
        {team.map((employee) => (
          <TicketTracker key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default TicketTrackerApp;