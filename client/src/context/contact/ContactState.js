import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [{
            id: 1,
            name: 'Harry C',
            email: 'hcole@gmail.com',
            phone: '333-333-333',
            type: 'personal'
        },
        {
            id: 2,
            name: 'Luca D',
            email: 'hcole@gmail.com',
            phone: '333-333-222',
            type: 'personal'
        },
        {
            id: 3,
            name: 'TJ',
            email: 'tj@gmail.com',
            phone: '333-333-444',
            type: 'professional'
        }],
         current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // add contact
    const addContact = contact => {
        contact.id = state.contacts.length + 1;
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // del contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    // set current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // update current contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
