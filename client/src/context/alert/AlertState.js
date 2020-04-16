import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
  } from '../types';

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // set alert
    const setAlert = (msg, type) => {
        const id = state.length += 1;
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        })
        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT, payload: id })
        }, 2500);
    }

    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
