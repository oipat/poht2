import React, { PropTypes } from 'react';

function Notification({ message }) {
  return (
    <div style={{ display: message ? 'block' : 'none' }} className="notification">
      { message }
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
