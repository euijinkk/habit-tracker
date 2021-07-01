import React, { memo } from 'react';
import { useRef } from 'react';

interface Props {
    onAdd: (name: string) => void;
}

const HabitAddForm: React.FC<Props> = memo(({ onAdd }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name: string | undefined = inputRef.current?.value;
        name && onAdd(name);
        formRef.current?.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
