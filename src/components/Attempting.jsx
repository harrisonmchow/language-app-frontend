import React from "react";
import { Select } from '@chakra-ui/react'
import { VStack, Box } from '@chakra-ui/react'

const Attempting = () => {
    const [translations, setTranslations] = React.useState({
        Afrikaans: "Bomboclaat",
        French: "Bonjour",
        Italian: "Si Senor"
    });
    return (
        <VStack
            spacing={4}
            align='center'
            justify='center'
            style={{ paddingTop: '10px' }}
        >
            <Box height='80px'>
                <Select size={'sm'} placeholder='Select language' style={{ width: "225px", textAlign: 'center' }}>
                    {Object.entries(translations).map(([key, value]) => {
                        return (
                            <option value={key}>{key}</option>
                        );
                    })};
                </Select>
            </Box>
        </VStack>
    );
}

export default Attempting;