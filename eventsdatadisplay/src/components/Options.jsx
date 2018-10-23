import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ selectGenre }) => {
    return (
        <div>
            <select onChange={this.selectGenre}>
                <option value='Music'> Music</option>
                <option value='Sport'> Sport</option>
            </select>

        </div>
    );
};


Options.propTypes = {

};

export default Options;