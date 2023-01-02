import PropTypes from 'prop-types';
import Notification from './Notification'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div>
                <h2>Statistics</h2>
                {total === 0 ? (<Notification message="There is no feedback"></Notification>) : 
                    (<div>
                        <p>Good: { good }</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Total: {total}</p>
                        <p>Positive feedback: { positivePercentage }%</p>
                    </div>)} 
            </div>  
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics












