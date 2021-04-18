import React, { useRef } from 'react';

const HabitAddForm = (props) => {
    // const habits = props.habits;
    const inputRef = useRef(null);
    console.log(props)
    const handleAdd = (event) => {
        console.log(`발동`)
        event.preventDefault();
        const name = inputRef.current.value
        name && props.onAdd(name);
        inputRef.current.value = "";
    }
    
    return(
        <form 
            className="add-form" 
            onSubmit={handleAdd}>
            <input 
                type="text" 
                className="add-input" 
                placeholde="Habit" 
                
                ref = {inputRef} />
            <button className="add-button">
                    Add
            </button>
        </form>
    );
};
export default HabitAddForm;