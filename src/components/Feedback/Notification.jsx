import PropTypes from 'prop-types';
import { Message } from './Notification.styled'

const Notification = ({ message }) => (
  <Message>{ message }</Message>
);

Notification.propTypes = {
    title: PropTypes.string,
}

export default Notification;