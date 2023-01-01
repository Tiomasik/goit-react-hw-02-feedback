const FeedbackOptions = ({ countGoodFeedback, countNeutralFeedback, countBadFeedback }) => {
    return <div>
            <button type='button' onClick={countGoodFeedback}>Good</button>
            <button type='button' onClick={countNeutralFeedback}>Neutral</button>
            <button type='button' onClick={countBadFeedback}>Bad</button>
    </div>  
    
}

export default FeedbackOptions