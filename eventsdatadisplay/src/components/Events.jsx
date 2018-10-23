import React from 'react';
import PropTypes from 'prop-types';

const Events = ({ data, choice }) => {
    console.log(data);
    let chosenData = data.filter(event => event.classifications[0].segment.name === choice);
    return (
        <div>
            {chosenData.map((event) => {
                return(
                    <div>
                    <p key={event.id}>{event.name}</p>
                    <p>{event.dates.start.localDate}</p>
                    <img src={event.images[0].url} width="400" height="auto"></img>
                    
                    

                    </div>
                )
            })}
        </div>
    );
};

Events.propTypes = {
    
};

export default Events;