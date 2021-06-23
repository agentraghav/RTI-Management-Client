import React, { useContext, useEffect } from 'react';
import Topbar from './superadmin/topbar';
import { useHistory, Link } from 'react-router-dom';

import UserContext from './superadmin/userContext';

export default function Home() {
  const { userData } = useContext(UserContext);
  console.log(userData);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) {
      history.push('/');
    }
  }, [history, userData.user]);
  return (
    <div>
      {userData.user ? (
        <>
        <div>
        <Topbar />
        </div>
        <h1>Welcome {userData.user.displayName}</h1>
        </>
        
      ) : (
        <>
          
          <h2>You are not logged in</h2>
          <Link to='/login' className="btn btn-primary">Login</Link>
        </>
      )}
    </div>
  );
}