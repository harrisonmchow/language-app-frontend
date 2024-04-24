import React from "react";
import { Select, VStack, HStack, Box, Input, IconButton, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { QuestionOutlineIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useToast } from '@chakra-ui/react'


const Attempting = (props) => {
    const [translations, setTranslations] = React.useState({
        Afrikaans: "Bomboclaat",
        French: "Bonjour",
        Italian: "Si Senor"
    });
    // const [dailyWord, setDailyWord] = React.useState("testing");
    const dailyWord = props.dailyWord;
    const setDailyWord = props.setDailyWord;
    const hints = props.hints;
    const setHints = props.setHints;
    const setComplete = props.setComplete;
    const setFailed = props.setFailed;

    const [guess, setGuess] = React.useState('');
    const [selectedLanguage, setSelectedLanguage] = React.useState("");
    const [translatedWord, setTranslatedWord] = React.useState("Select a language");
    const [guessesRemaining, setGuessesRemaining] = React.useState(3);
    const xsArray = Array.from({ length: guessesRemaining }, (_, index) => index);
    // const [hints, setHints] = React.useState(["This is hint 1", "This is hint 2"]);
    const [openHints, setOpenHints] = React.useState(false);
    const toast = useToast();
    const handleShowHint = () => {
        setOpenHints(true);
    }

    const changeLanguage = (event) => {
        console.log(event.target.value);
        setSelectedLanguage(event.target.value);
        if (event.target.value === "") {
            setTranslatedWord("Select a language");    
        } else {
            setTranslatedWord(translations[event.target.value]);
        }
        console.log("Changed language");
    }

    const handleGuess = (event) => {
        if (event.key === 'Enter') {
            if (selectedLanguage === "") {
                toast({
                    title: 'Error',
                    description: "Select a language before guessing",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
                return;
            } else if (guess === "") {
                toast({
                    title: 'Error',
                    description: "Invalid guess",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
                return;
            }

            if (guess === dailyWord) {
                console.log("Correct guess");
                setComplete(true);
            } else {
                if (guessesRemaining === 1) {
                    console.log("NO MORE GUESSES");
                    setFailed(true);
                }
                setGuessesRemaining(guessesRemaining - 1);
            }
            setGuess('');
        }
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
                <Box className="translated-word" style={{ paddingBottom: '50px' }}>
                    {translatedWord}
                </Box>
                <Box>
                    <VStack
                    spacing={1}
                    align='start'
                    justify='center'
                    >
                        <HStack spacing={1} className='subheading-text'>
                            <Box>
                                Remaining Guesses:
                            </Box>
                            {/* Map over xsArray and render an 'X' for each item */}
                            {xsArray.map((item) => (
                                <Box key={item}><SmallCloseIcon color={'red'}/></Box>
                            ))}
                        </HStack>
                        <Box>
                            <InputGroup size='lg'>
                                <Input placeholder='Enter guess' onKeyDown={handleGuess} value={guess} onChange={(event) => setGuess(event.target.value)} style={{ width: '250px' }}/>
                                {guessesRemaining !== 3 ? <InputRightElement>
                                    <IconButton aria-label='Look at hint' isRound icon={<QuestionOutlineIcon color='white'/>} size='md' colorScheme='yellow' onClick={handleShowHint}/>
                                </InputRightElement> : <></>}
                            </InputGroup>
                        </Box>
                    </VStack>
                </Box>
            </VStack>
            {/* Modal for hints */}
            <Modal onClose={() => setOpenHints(false)} isOpen={openHints} isCentered size="lg">
            <ModalOverlay />
            <ModalContent>
                <div className='instructions-header'> Hints </div>
                <ModalCloseButton />
                <ModalBody className='instructions-body'>
                    {hints.map((hint, index) => {
                        return (
                        <React.Fragment key={index}>
                            <p>{index + 1}. {hint}</p>
                            <br/>
                        </React.Fragment>
                        );
                    })}
                </ModalBody>
                <ModalFooter>
                <Button onClick={() => setOpenHints(false)}>Close</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </React.Fragment>
    );
}

export default Attempting;