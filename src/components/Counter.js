import { useDispatch, useSelector }from 'react-redux'

import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice.js';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);

  const show = useSelector((state) => state.counter.showCounter);

  const handleIncrements = () => {
    dispatch(counterActions.increment());
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(10))
  }

  const handleDecrements = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounter = () => {
    console.log("Toggling counter!");
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={handleIncrements}>Increment - Add</button>
          <button onClick={handleIncrease}>Increase by 10</button>
          <button onClick={handleDecrements}>Decrement - Subtract</button>
        </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
