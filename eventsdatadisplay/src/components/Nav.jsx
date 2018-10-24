import React from 'react';
import PropTypes from 'prop-types';
import { Link, Router } from '@reach/router';

const Nav = ({ data, setGenre, genre }) => {

    let choices = data.reduce((acc, val) => {
        if (!acc.includes(val.classifications[0].segment.name)) {
            acc.push(val.classifications[0].segment.name);
        }
        return acc;
    }, []);

    return (
        <div>

            <nav>
                {
                    choices.map((choice) => {
                        return <Link className='links' to={"genre/" + choice}>{choice}{' | '}</Link>
                    })
                }
            </nav>
            <Router>
                <Home path={'/'} />

                <Choice data={data} genre={genre} setGenre={setGenre} path={'genre/:choice'} />

            </Router>
        </div>
    )

};
const Home = props => (
    <div>
        <h2>HOME</h2>

    </div>
)

const Choice = (props) => (

    < div >
        < h2 > {props.choice}</h2>
        {props.genre !== props.choice && props.setGenre(props.choice)}

    </div >

);


Nav.propTypes = {

};



export { Nav, Choice } 