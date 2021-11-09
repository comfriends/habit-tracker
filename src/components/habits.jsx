import React from 'react';
import AddHabit from './addHabit';
import Habit from './habit';

const Habits = ({habits, onAdd, onIncrease, onDecrease, onDelete}) => {
    return (
        <div className="habis">
            <AddHabit onAdd={onAdd} />
            <ul>
                {
                    habits.map(item => (
                        <Habit
                            key={item.id}
                            habit={item}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                            onDelete={onDelete}
                        />
                    ))
                }
            </ul>
        </div>
    );

};//코드 블록으로 변경 후 작업

export default Habits;