import React from "react";
import { SimpleGrid, Box, VStack } from "@chakra-ui/react";
import Timer from "./Timer";

const Success = (props) => {
    const congratulationsTranslated = [
        '恭喜你',
        'Felicitazioni',
        'Gratulon',
        'Glückwunsch',
        'Συγχαρητήρια',
        'Ina taya ku murna',
        'Gratulálunk',
        'Til hamingju',
        'Comhghairdeachas',
        'おめでとう',
        'Congratulations',
        'Sugeng',
        'परबीं',
        '축하해요',
        'Congratulazioni',
        'پیرۆزە',
        'Куттуктайбыз',
        'Gratulatioun',
        'Секоја чест',
        'Gratulerer',
        'مبارک شه',
    ]
    return (
        <React.Fragment>
            <VStack
                spacing={1}
                align='center'
                justify='space-between'
                className="body"
            >
                <SimpleGrid columns={3} style={{ paddingTop: '35px' }}>
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
                <Timer/>
            </VStack>
        </React.Fragment>
    )
}

export default Success;