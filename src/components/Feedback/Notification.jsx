import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p>{ message }</p>
);

Notification.propTypes = {
    title: PropTypes.string,
}

export default Notification;