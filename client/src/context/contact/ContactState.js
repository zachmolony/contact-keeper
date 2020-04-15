import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CONTACTS,
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
        }]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // add contact

    // del contact

    // set current contact

    // clear current contact

    // update current contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
