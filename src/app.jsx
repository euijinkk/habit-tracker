import { useCallback, useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Header from './components/header';


function App() {
  const [habits, setHabits] = useState(
    [
        {id:1, name: 'Reading', count:0},
        {id:2, name: 'Running', count:0},
        {id:3, name: 'Coding', count:0},
    ]
  )
  
let habitSum= habits.filter(item => item.count>0).length;

// for (let i=0; i < habits.length; i++) {
//   if (habits[i].count >0) {
//     habitSum++
//   }
// }

const handleIncrement = useCallback(habit => {
  setHabits(habits =>
    habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
        // 객체 자체를 바꾸면 안된다.
      }
      return item;
    })
  );
}, []);

const handleDecrement = useCallback(habit => {
  setHabits(habits =>
    habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return count <0 ? item : { ...habit, count: habit.count - 1 };
        // 객체 자체를 바꾸면 안된다.
      }
      return item;
    })
  );
}, []);

const handleDelete= useCallback(habit => {
  setHabits(habits => habits.filter(item => item.id !== habit.id));
}, []);

const handleAdd = useCallback((name) => {
  setHabits(habits => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []
);

const handleReset = useCallback(() => 
  setHabits(habits => 
    habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
  })
  ));



  return (
    <>
      <Header habitSum={habitSum}/>
      
      <Habits 
        habits={habits}
        onIncrement = {handleIncrement}
        onDecrement = {handleDecrement}
        onDelete = {handleDelete}
        onAdd = {handleAdd}
        onReset = {handleReset}
      />
      
    </>
  );
}

export default App;
