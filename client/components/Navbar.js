import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import useAuth from './utils/useAuthHook';

const Navbar = ({ handleClick, isLoggedIn }) => {
  const currentUser = useAuth();
  return (
    <div className='navbar-bottom'>
      <nav>
        {isLoggedIn ? (
          <div className='center-text-div'>
            {/* The navbar will show these links after you log in */}
            {/* <div className='center-text-div'>
              <h5>Hello, {currentUser.name}</h5>
            </div> */}
            <Link to='/home'>Home</Link>
            <Link to='/favors/create'>Ask</Link>
            <Link to='/users'>Users</Link>
          </div>
        ) : (
          <div className='center-text-div'>
            {/* The navbar will show these links before you log in */}
            <h3>NeighborFave</h3>
          </div>
        )}
      </nav>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
