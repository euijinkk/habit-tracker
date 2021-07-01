import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import { IHabit } from './types';

const App: React.FC = () => {
    const [habits, setHabits] = useState<IHabit[]>([
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ]);

    const handleIncrement = useCallback((habit: IHabit): void => {
        setHabits((habits) =>
            habits.map((item) => {
                if (item.id === habit.id) {
                    return { ...habit, count: habit.count + 1 };
                }
                return item;
            })
        );
    }, []);

    const handleDecrement = useCallback((habit: IHabit): void => {
        setHabits((habits) =>
            habits.map((item) => {
                if (item.id === habit.id) {
                    const count = habit.count - 1;
                    return { ...habit, count: count < 0 ? 0 : count };
                }
                return item;
            })
        );
    }, []);

    const handleDelete = useCallback((habit: IHabit): void => {
        setHabits((habits) => habits.filter((item) => item.id !== habit.id));
    }, []);

    const handleAdd = useCallback((name: string): void => {
        setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
    }, []);

    const handleReset = useCallback((): void => {
        setHabits((habits) =>
            habits.map((habit) => {
                if (habit.count !== 0) {
                    return { ...habit, count: 0 };
                }
                return habit;
            })
        );
    }, []);

    return (
        <>
            <Navbar
                totalCount={habits.filter((item) => item.count > 0).length}
            />
            <Habits
                habits={habits}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                onAdd={handleAdd}
                onReset={handleReset}
            />
        </>
    );
};

export default App;
