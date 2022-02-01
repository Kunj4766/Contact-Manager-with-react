import React from 'react'
import { useDispatch } from 'react-redux';
import { delContact } from '../action';

const Contactitem = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="my-3">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{props.name}</div>
                        {props.email}
                    </div>
                    <i role="button" className="fas fa-edit mx-2" data-bs-toggle="tooltip" title="Edit"></i>
                    <i role="button" onClick={()=> dispatch(delContact(props.id))} className="fas fa-trash-alt mx-2" data-bs-toggle="tooltip" title="Delete"></i>
                </li>
        </div>
    )
}

export default Contactitem;
