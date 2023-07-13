import { useDispatch, useSelector }from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const handleIncrements = () => {
    dispatch({ type: 'increment' });
  };

  const handleIncrease = () => {
    dispatch({ type: 'increase', amount: 10 })
  }

  const handleDecrements = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrements}>Increment - Add</button>
        <button onClick={handleIncrease}>Increase by 10</button>
        <button onClick={handleDecrements}>Decrement - Subtract</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
