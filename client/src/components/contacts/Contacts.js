import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from '../contacts/ContactItem'
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered, loading } = contactContext;

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
      }
    
    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null
                    ? filtered.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames='item' >
                           <ContactItem contact={contact} /> 
                        </CSSTransition>
                    ))
                    : contacts.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames='item' >
                           <ContactItem contact={contact} /> 
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
