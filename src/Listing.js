import React from 'react';
import PropTypes from 'prop-types';

const Listing = ({ users }) => (
  <ul>
    { users.map(({ name, phone }) => (
      <li>
        { name }
        {' - '}
        { phone }
      </li>
    ))}
  </ul>
);

// eslint-disable-next-line react/forbid-prop-types
Listing.propTypes = { users: PropTypes.array.isRequired };

export default Listing;
