// import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Contactitem from './Contactitem';

const ContactList = () => {

    const contact = useSelector(state => state.contactCrud.contact);

    // useEffect(() => {
    //     localStorage.setItem("contact",JSON.stringify(contact));
    // }, [contact]);

    // useEffect(()=>{
    //     const contactList = JSON.parse(localStorage.getItem("contact"));
    //     console.log(contactList);
    //     if (contactList){
    //         dispatch(retrive(contactList));
    //     }
    //     else{
    //         return []
    //     }
    //      // eslint-disable-next-line
    // },[])
    return (
        <div className="my-3">
            <div className="d-flex justify-content-between">
            <h2>Contact List</h2>
            {/* <Link to="/" className="btn btn-primary">Add new Contact</Link> */}
            </div>
            {
            contact.map((e)=>{
                return(
                    <Contactitem key={e.id} name={e.name} email={e.email} id={e.id} />
                )
            })
            }
        </div>
    )
}

export default ContactList;
