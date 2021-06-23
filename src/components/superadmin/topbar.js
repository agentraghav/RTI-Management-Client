import React from 'react';
import {Link} from 'react-router-dom';

function Topbar() {
    return (
    <>
       <ul class="nav nav-pills mt-2 ml-2">
        <li class="nav-item">
            <Link to='/login' className="btn btn-primary">Manage College Admins</Link>
        </li>
        <li class="nav-item">
            <Link to='/login' className="btn btn-secondary ml-2">All Requests</Link>
        </li>
        </ul>
    </>
    );
}
export default Topbar;