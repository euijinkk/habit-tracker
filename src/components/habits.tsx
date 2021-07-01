import React from 'react';
import { IHabit } from '../types';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

interface Props {
    habits: IHabit[];
    onIncrement: (habit: IHabit) => void;
    onDecrement: (habit: IHabit) => void;
    onDelete: (habit: IHabit) => void;
    onAdd: (name: string) => void;
    onReset: () => void;
}

const Habits: React.FC<Props> = ({
    habits,
    onIncrement,
    onDecrement,
    onDelete,
    onAdd,
    onReset,
}) => {
    return (
        <div className="habits">
            <HabitAddForm onAdd={onAdd} />
            <ul>
                {habits.map((habit) => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            <button className="habits-reset" onClick={onReset}>
                Reset All
            </button>
        </div>
    );
};

export default Habits;
