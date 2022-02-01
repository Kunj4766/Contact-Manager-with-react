import React, { useState  } from 'react';
import { useDispatch  } from 'react-redux';
// import { Link } from 'react-router-dom';
import addContact from '../action';

const Home = () => {
    const [myContact, setMyContact] = useState({ name: "", email: "" })
    const dispatch = useDispatch();
    const onClick = (e) => {
        e.preventDefault();
        dispatch(addContact(myContact.name, myContact.email));
        setMyContact({ name: "", email: "" });

    };
    const onChange = (e) => {
        setMyContact({ ...myContact, [e.target.name]: e.target.value });
    }
    return (
        <div className="my-3">
            <div className="h1">Contact Mangaer</div>
            <form onSubmit={onClick}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" onChange={onChange} value={myContact.name} className="form-control" name="name" id="name"  minLength={6} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={onChange} value={myContact.email} className="form-control" name="email" id="email" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">Add Contact</button>
            </form>
        </div>
    )
}

export default Home;
