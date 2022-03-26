//This component renders favor for which neighbor volunteered

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import favors, { fetchFavors } from '../store/favors';
import Map from './Map';
import { Link } from 'react-router-dom';

export default function VolunteeringCard(props) {
  const favor = props.favor;

  const renderVolunteersNumber = function () {
    if (favor.bids.length === 1) {
      return <b>1 Volunteer</b>;
    } else {
      return <b>{favor.bids.length} Volunteers</b>;
    }
  };

  return (
    <div className='volunteer-card-div' key={favor.id}>
      <div>
        <Link to={`/users/${favor.authorId}`}>
          <b>{favor.author.name}</b>
        </Link>
      </div>
      <div>
        <Link to={`/favors/${favor.id}`}>
          <b>{favor.title}</b>
        </Link>
      </div>
      <div>{favor.description}</div>
      {/* <div className='center-text-div'>{renderVolunteersNumber()}</div> */}
    </div>
  );
}
