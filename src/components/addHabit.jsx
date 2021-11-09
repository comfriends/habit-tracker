
import React, { memo, useRef } from 'react';

const AddHabit = memo(
    ({ onAdd }) => {

        const inputRef = useRef();
        const handleAdd = () => {
            const value = inputRef.current.value;
            console.log(value);
            onAdd(value);
        }
    
        return (
            <>
                <input className="add-input" type="text" ref={inputRef}></input>
                <button className="add-button" onClick={handleAdd}>
                    Add
                </button>
            </>
        );
    
    }
);

export default AddHabit;

