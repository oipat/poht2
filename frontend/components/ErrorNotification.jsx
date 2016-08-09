import React, { PropTypes } from 'react';

function ErrorNotification({ message }) {
  return (
    <div>
      {message}
    </div>
  );
}

ErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorNotification;
