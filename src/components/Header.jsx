import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    // ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Header = () => {
    const [instructionsOpen, setInstructionsOpen] = React.useState(false);

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
                <Box height='80px' className='header-title'>wordplay</Box>
                <Box height='80px' className='subheading-text'>
                    <Button variant='ghost' className='align-with-title'>
                        About
                    </Button>
                </Box>
            </SimpleGrid>
        <Box height='30px' className='subheading-text'>April 23rd, 2024</Box>
        </SimpleGrid>
        {/* How to play modal */}
        <Modal onClose={() => setInstructionsOpen(false)} isOpen={instructionsOpen} isCentered size="lg">
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader className='instructions-header'>How to play</ModalHeader> */}
            <div className='instructions-header'> How to play </div>
            <ModalCloseButton />
            <ModalBody className='instructions-body'>
                <p>Each day, a hidden word is selected from our database.</p>
                <br/>
                <p>Select your desired language, and try guess the word!</p>
                <br/>
                <p>You get hints after each mistake, but 3 strikes and you're out.</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='green' onClick={() => setInstructionsOpen(false)}>Comprehendere</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </React.Fragment>
    );
}

export default Header;