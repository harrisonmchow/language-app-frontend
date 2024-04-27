import React from "react";
import { SimpleGrid, Box, VStack } from "@chakra-ui/react";
import Timer from "./Timer";
import { useBreakpointValue } from "@chakra-ui/react";

const Success = (props) => {
    const dailyWord = props.dailyWord;
    const translations = props.translations;
    const [wordsTranslated, setWordsTranslated] = React.useState([]);
    // Shuffle function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    // On render, shuffle values
    React.useEffect(() => {
        delete translations['Aymara'];
        // Extract values (translations) into an array
        const keysArray = Object.values(translations);

        // Shuffle the array
        const shuffledKeys = shuffleArray(keysArray);

        // Get the first 18 elements
        setWordsTranslated(shuffledKeys.slice(0, 18));
    }, [translations]);
    const columns = useBreakpointValue({ base: '2', md: '3' });
    return (
        <React.Fragment>
            <VStack
                spacing={1}
                align='center'
                justify='space-between'
                className="body"
            >
                <SimpleGrid columns={columns} style={{ paddingTop: '35px' }} spacing={2}>
                    {wordsTranslated.map((translation, index) => {
                        let weight;
                        if (index % 2 === 0) {
                            weight = { fontWeight: 700 };
                        } else {
                            weight = { fontWeight: 100 };
                        }
                        return (
                            <Box className="success-background" style={weight} key={index}>{translation}</Box>
                        );
                    })}
                </SimpleGrid>
                <Box className="timer">
                    Well done! The daily word was "{dailyWord}"
                </Box>
                <Timer />
            </VStack>
        </React.Fragment>
    )
}

export default Success;