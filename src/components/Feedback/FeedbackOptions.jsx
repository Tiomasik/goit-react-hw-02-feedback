import { List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ countGoodFeedback, countNeutralFeedback, countBadFeedback }) => {
    return <List>
                <button type='button' onClick={countGoodFeedback}>Good</button>
                <button type='button' onClick={countNeutralFeedback}>Neutral</button>
                <button type='button' onClick={countBadFeedback}>Bad</button>
            </List>  
}

export default FeedbackOptions