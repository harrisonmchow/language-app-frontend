import React from "react";
import { SimpleGrid, Box, VStack } from "@chakra-ui/react";
import Timer from "./Timer";
import { useBreakpointValue } from "@chakra-ui/react";

const Success = (props) => {
    const congratulationsTranslated = [
        '恭喜你',
        'Felicitazioni',
        // 'Gratulon',
        'Glückwunsch',
        'Συγχαρητήρια',
        // 'Ina taya ku murna',
        'Gratulálunk',
        'Til hamingju',
        'Comhghairdeachas',
        'おめでとう',
        'Congratulations',
        // 'Sugeng',
        'परबीं',
        '축하해요',
        'Congratulazioni',
        'پیرۆزە',
        'Куттуктайбыз',
        'Gratulatioun',
        'Секоја чест',
        'Gratulerer',
        'مبارک شه',
    ];
    const dailyWord = props.dailyWord;
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
                    {congratulationsTranslated.map((translation, index) => {
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
                <Timer/>
            </VStack>
        </React.Fragment>
    )
}

export default Success;