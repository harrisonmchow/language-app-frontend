import React from 'react';
import axios from 'axios';
import Attempting from './Attempting';
import Failed from './Failed';
import Success from './Success';

const Body = () => {
    const [complete, setComplete] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const [dailyWord, setDailyWord] = React.useState("testing");
    const [hints, setHints] = React.useState(["This is hint 1", "This is hint 2"]);
    const [translations, setTranslations] = React.useState({});
    const [selectedLanguage, setSelectedLanguage] = React.useState("");
    const [translatedWord, setTranslatedWord] = React.useState("Select a language");
    React.useEffect(() => {
        const fetchData = async () => {
            // Make an api call to get the daily word and its hints
            // console.log("Making API CALL");
            const url = process.env.REACT_APP_BACKEND_URL;
            try {
                const response = await axios.get(`${url}/dailyword`);
                const data = response.data;
                setDailyWord(data.word);
                setHints(data.hints);
                const response2 = await axios.get(`${url}/alltranslations`);
                setTranslations(response2.data.translations);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return (
        <React.Fragment>
            {!complete && !failed? 
            <Attempting dailyWord={dailyWord} setDailyWord={setDailyWord} hints={hints} setComplete={setComplete}
            setFailed={setFailed} translations={translations} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}
            translatedWord={translatedWord} setTranslatedWord={setTranslatedWord}/>
            : (failed ? <Failed dailyWord={dailyWord} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}
                translatedWord={translatedWord} setTranslatedWord={setTranslatedWord} translations={translations}/>
                : <Success dailyWord={dailyWord} translations={translations}/>)}
        </React.Fragment>
    );
}

export default Body;