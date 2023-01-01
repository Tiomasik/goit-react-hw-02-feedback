
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div>
            <h2>Statistics</h2>
            {total === 0 ? (<p>No feedback given</p>) : 
                    (<div>
                        <p>Good: { good }</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Total: {total}</p>
                        <p>Positive feedback: { positivePercentage }%</p>
                    </div>)} 
    </div>  
    
}

export default Statistics












