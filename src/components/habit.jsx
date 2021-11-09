import React, { memo } from 'react';

const Habit = memo(
    ({ habit, onIncrease, onDecrease, onDelete }) => {

        const handleDecrease = () => {
            onDecrease(habit.id);
        }

        const handleIncrease = () => {
            onIncrease(habit.id);
        }

        const handleDelete = () => {
            onDelete(habit.id);
        }

        console.log(`habit: ${habit.name}`);//rendering test

        return (
            
            <li className="habit">
                <span >{habit.name}</span>
                <span className="habit-count">{habit.count}</span>
                <button className="habit-button habit-increase" onClick={handleIncrease}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={handleDecrease}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );

    }
);

export default Habit;