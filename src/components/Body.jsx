import React from 'react';
import Attempting from './Attempting';
import Failed from './Failed';
import Success from './Success';

const Body = () => {
    const [complete, setComplete] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const [dailyWord, setDailyWord] = React.useState("testing");
    const [hints, setHints] = React.useState(["This is hint 1", "This is hint 2"]);
    return (
        <React.Fragment>
            {!complete && !failed? 
            <Attempting dailyWord={dailyWord} setDailyWord={setDailyWord} hints={hints} setHints={setHints} setComplete={setComplete}
            setFailed={setFailed}/>
            : (failed ? <Failed/> : <Success/>)}
        </React.Fragment>
    );
}

export default Body;