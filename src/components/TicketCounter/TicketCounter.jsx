

const TicketCounter = ({ tickets, decrement, increment }) => {
  return (
    <section>
      <h4>Completed:</h4>
      <p>{tickets}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </section>
  );
};

export default TicketCounter;