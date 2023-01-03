import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return  <List>
                {options.map((option, index) =>
                (<button key={index} type='button' onClick={onLeaveFeedback}>{option}</button>))}
            </List>  
}


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
    
export default FeedbackOptions