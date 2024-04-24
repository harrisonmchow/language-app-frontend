import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Header = () => {
    const [instructionsOpen, setInstructionsOpen] = React.useState(true);
    const [aboutOpen, setAboutOpen] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState('');

    React.useEffect(() => {
        // Get the current date in AEST
        const options = { timeZone: 'Australia/Sydney', month: 'long', day: 'numeric', year: 'numeric' };
        const currentDateInAEST = new Date().toLocaleString('en-US', options);
        setCurrentDate(currentDateInAEST);
    }, []);
    return (
        <React.Fragment>
            {/* Grid containing title and buttons */}
            <SimpleGrid columns={1} spacing="20px">
                <SimpleGrid columns={3} autoColumns>
                    <Box height='80px' className='subheading-text'>
                        <Button variant='ghost' className='align-with-title' onClick={() => setInstructionsOpen(true)}>
                            How to play
                        </Button>
                    </Box>
                    <Box height='80px' className='header-title'>Lingo</Box>
                    <Box height='80px' className='subheading-text'>
                        <Button variant='ghost' className='align-with-title' onClick={() => setAboutOpen(true)}>
                            About
                        </Button>
                    </Box>
                </SimpleGrid>
                <Box height='30px' className='subheading-text'>{currentDate}</Box>
            </SimpleGrid>
            {/* How to play modal */}
            <Modal onClose={() => setInstructionsOpen(false)} isOpen={instructionsOpen} isCentered size="lg">
                <ModalOverlay />
                <ModalContent>
                    <div className='instructions-header'> How to play </div>
                    <ModalCloseButton />
                    <ModalBody className='instructions-body'>
                        <p>Each day, a hidden word is selected from our database.</p>
                        <br />
                        <p>Select your desired language, and try guess the word!</p>
                        <br />
                        <p>You get hints after each mistake, but 3 strikes and you're out.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' onClick={() => setInstructionsOpen(false)}>Comprehendere</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* About modal */}
            <Modal onClose={() => setAboutOpen(false)} isOpen={aboutOpen} isCentered size="lg">
                <ModalOverlay />
                <ModalContent>
                    <div className='instructions-header'> About </div>
                    <ModalCloseButton />
                    <ModalBody className='instructions-body'>
                        <p>Learning a new language is always a tough task, so we're trying to make it just a bit easier.</p>
                        <br />
                        <p>Inspired by continuous learning and trending NY Times games, we decided to provide a daily challenge that passionate linguists can complete in their day to day life.</p>
                        <br />
                        <p style={{ fontSize: "12pt" }}>Developed by Harry and Caleb</p>
                        <p style={{ fontSize: "12pt" }}>Send your feedback to harrisonmchow@gmail.com</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setAboutOpen(false)}>Au revoir</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
}

export default Header;