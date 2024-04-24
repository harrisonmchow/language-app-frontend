import React from "react";
import { VStack, Box } from "@chakra-ui/react";

const Timer = () => {
    const [timeUntilNextDay, setTimeUntilNextDay] = React.useState({ hours: "-", minutes: "-", seconds: "-" });

    React.useEffect(() => {
        const timerInterval = setInterval(() => {
            const currentTimeUTC = new Date(); // Get the current UTC time
            const midnightUTC = new Date(currentTimeUTC);
            midnightUTC.setUTCHours(14, 0, 0, 0); // Set the time to midnight UTC

            var timeDifferenceMilliseconds = midnightUTC.getTime() - currentTimeUTC.getTime(); // Calculate the time difference in milliseconds
            if (timeDifferenceMilliseconds < 0) {
                midnightUTC.setDate(midnightUTC.getDate() + 1);
                timeDifferenceMilliseconds = midnightUTC.getTime() - currentTimeUTC.getTime(); // Calculate the time difference in milliseconds
            }

            // Convert milliseconds to hours, minutes, and seconds
            const hours = Math.floor(timeDifferenceMilliseconds / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifferenceMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifferenceMilliseconds % (1000 * 60)) / 1000);
            setTimeUntilNextDay({ hours, minutes, seconds });
        }, 1000);
        // Cleanup function to clear the interval
        return () => clearInterval(timerInterval);
    }, []);

    return (
        <React.Fragment>
            <VStack
                spacing={1}
                align='center'
                justify='space-between'
                className="timer"
            >
                <Box>
                    Next word in
                </Box>
                <Box style={{ color: 'red' }}>
                    {timeUntilNextDay.hours} hours {timeUntilNextDay.minutes} minutes {timeUntilNextDay.seconds} seconds
                </Box>
            </VStack>
        </React.Fragment>
    );
}

export default Timer