import React from "react";
import { VStack, Box, Select } from "@chakra-ui/react";
import Timer from "./Timer";
import he from 'he';

const Failed = (props) => {
    const translations = props.translations;
    const dailyWord = props.dailyWord;
    const selectedLanguage = props.selectedLanguage;
    const setSelectedLanguage = props.setSelectedLanguage;
    const translatedWord = props.translatedWord;
    const setTranslatedWord = props.setTranslatedWord;

    const changeLanguage = (event) => {
        console.log(event.target.value);
        setSelectedLanguage(event.target.value);
        if (event.target.value === "") {
            setTranslatedWord("Select a language");
        } else {
            setTranslatedWord(he.decode(translations[event.target.value]));
        }
        console.log("Changed language");
    }
    return (
        <React.Fragment>
            <VStack
                spacing={4}
                align='center'
                justify='space-between'
                style={{ paddingTop: '10x', paddingBottom: '30px'}}
                className="body"
            >
                <Box height='80px'>
                    <Select size={'sm'} placeholder='Select language' style={{ width: "225px", textAlign: 'center' }} value={selectedLanguage} onChange={changeLanguage}>
                        {Object.entries(translations).map(([key, value]) => {
                            return (
                                <option key={key} value={key}>{key}</option>
                            );
                        })};
                    </Select>
                </Box>
                <VStack
                    spacing={1}
                    align='center'
                    justify='flex-start'
                    style={{ paddingTop: "10px" }}
                >
                    <Box className="wrong-answer" style={{ color: 'red' }}>
                        Sorry, you guessed incorrectly :(
                    </Box>
                    {selectedLanguage !== "" ? <><Box className="translated-word">
                        {translatedWord}
                    </Box>
                    <Box className="wrong-answer">
                        is {selectedLanguage} for "{dailyWord}"
                    </Box> </> : <></>}
                </VStack>
                <Timer />
            </VStack>
        </React.Fragment>
    )
}

export default Failed;