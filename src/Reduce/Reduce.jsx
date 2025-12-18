import React, { useReducer, useState } from 'react'

export function reducefn(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Reduce() {
    const [state, dispatch] = useReducer(reducefn, { count: 1 });

    return (
        <>
            <div>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    Increment
                </button>

                <p>{state.count}</p>

                <button
                    className="btn btn-danger m-2"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    Decrement
                </button>
            </div>
        </>
    );
}

export default Reduce;


