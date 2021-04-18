import React, { useState } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = (props) => {
    // const habits = props.habits;
    // console.log(habits);
    // props.habits.map(habit => console.log(habit));
    
    console.log(props);

    const handleReset = () => {
        props.onReset();
    }
    return (
        <React.Fragment>
            <HabitAddForm onAdd = {props.onAdd}/>
            <ul>
                {
                    props.habits.map(habit => 
                        (<Habit 
                            key={habit.id}
                            habit={habit}
                            onIncrement={props.onIncrement}
                            onDecrement={props.onDecrement}
                            onDelete={props.onDelete}
                        />)
                    )
                }   
            </ul>

            <span className="reset-btn" onClick = {handleReset}>
                Reset All
            </span>
        </React.Fragment>

    );
};

export default Habits;