import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </ChakraProvider>
  );
}

export default App;
