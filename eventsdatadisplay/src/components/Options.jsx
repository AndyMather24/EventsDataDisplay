import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ chooseGenre, data }) => {
    // event.classifications[0].segment.name
    let choices = data.reduce((acc, val) => {
        if (!acc.includes(val.classifications[0].segment.name)) {
            acc.push(val.classifications[0].segment.name);
        }
        return acc;
    }, []);

    return (
        <div>
            <select onChange={chooseGenre}>
                <option default value='select'>Choose Category</option>
                {choices.map((choice) => {
                    return <option value={choice}>{choice}</option>
                })}

            </select>
        </div>
    );
};


Options.propTypes = {

};

export default Options;