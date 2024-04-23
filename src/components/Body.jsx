import React from 'react';
import Attempting from './Attempting';

const Body = () => {
    const [complete, setComplete] = React.useState(true);
    return (
        <React.Fragment className='body test'>
            {complete ? <Attempting/> : <></>}
        </React.Fragment>
    );
}

export default Body;