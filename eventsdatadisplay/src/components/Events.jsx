import React from 'react';
import PropTypes from 'prop-types';

const Events = ({ data, choice }) => {

    let chosenData = data.filter(event => event.classifications[0].segment.name === choice);

    return (
        <div className='events'>
            {console.log(chosenData)}
            {chosenData.map((event) => {

                return (
                    <div key={event.id}>
                        <h4 >{event.name}</h4>
                        <p>Date: {event.dates.start.localDate}</p>
                        {event.priceRanges && <p>{event.priceRanges[0].currency} {event.priceRanges[0].min}-{event.priceRanges[0].max}</p>}
                        <img src={event.images[0].url} width="400" height="auto"></img>
                        <a className='Nav' href={event.url}>Tickets</a>

                    </div>
                )
            })}
        </div>
    );
};

Events.propTypes = {

};

export default Events;