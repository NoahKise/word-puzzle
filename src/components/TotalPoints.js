import React from 'react';
import PropTypes from 'prop-types'

const TotalPoints = (props) => {
    const initialTally = 0;
    let tallyNum = (props.tally).reduce(
        (accumulator, currentValue) => accumulator + currentValue, 
        initialTally,
        );
    return(
        <React.Fragment>
        <h1>Total Point Tally: {tallyNum}</h1>
        </React.Fragment>
    )
}

TotalPoints.propTypes = {
    tally: PropTypes.array,
}

export default TotalPoints;