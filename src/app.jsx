import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import React, { useState, useCallback } from 'react';

function App() {

  const [habits, setHabits] = useState([]);
  const add = useCallback(
    item => {
      console.log('add');
      const tmp = [...habits, { name: item, count: 0, id: Date.now() }]
      setHabits(tmp);
    }, [habits]
  );
  // const add = item => {
  //   console.log('add');
  //   const tmp = [...habits, { name: item, count: 0, id: Date.now() }]
  //   setHabits(tmp);
  // };
  const increase = useCallback(
    index => {
      console.log('increase');
      const tmp = habits.map(habit => {
        if (habit.id === index) {
          return { ...habit, count: habit.count + 1 };
        }
        return habit;
      });
      setHabits(tmp);
    }, [habits]
  )
  const decrease = useCallback(
    index => {
      const tmp = habits.map(habit => {
        if (habit.id === index) {
          const value = (habit.count - 1 < 0) ? 0 : habit.count - 1
          return { ...habit, count: value };
        }
        return habit;
      });
      setHabits(tmp);
    }, [habits]
  )
  const delete_ = useCallback(
    index => {
      const tmp = habits.filter(habit => habit.id !== index);
      setHabits(tmp);
    }, [habits]
  )


  return (
    <div className="App">
      <Navbar
        totalCount={habits.filter(habit => habit.count > 0).length}
      />
      <Habits
        habits={habits}
        onAdd={add}
        onIncrease={increase}
        onDecrease={decrease}
        onDelete={delete_}
      />
    </div>
  );
}

export default App;
