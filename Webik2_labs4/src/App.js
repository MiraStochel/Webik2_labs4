import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Button, Input, Text } from '@chakra-ui/react';
import { FaBeer } from 'react-icons/fa';

function App() {
    const [counter, setCounter] = React.useState(0)

    const handleClick = (e) => setCounter(counter + parseInt(e.target.value));

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/increment">Increment</Link>
                    </li>
                    <li>
                        <Link to="/decrement">Decrement</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home counter={counter} />} />
                    <Route path="/increment" element={<Increment counter={counter} handleClick={handleClick} />} />
                    <Route path="/decrement" element={<Decrement counter={counter} handleClick={handleClick} />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home({ counter }) {
    const [text, setText] = React.useState("");

    const handleText = (e) => setText(e.target.value);

    return (
        <div>
            <h2>Home</h2>
            <p>Counter: {counter} </p>
            <Text mb='8px'>Text: {text}</Text>
            <Input onChange={handleText} value={text} />
            <Button colorScheme='blue' onClick={handleText} value={""}>
                Clear
            </Button>
        </div>
    );
}

function Increment({ counter, handleClick }) {
    return (
        <Button leftIcon={<FaBeer />} color='teal' variant='solid' onClick={handleClick} value={1} >Counter ({counter})</Button>
    );
}

function Decrement({ counter, handleClick }) {
    return (
        <div className="dec">
            <Button leftIcon={<FaBeer />} color='teal' variant='solid' onClick={handleClick} value={-1} >Counter ({counter})</Button>
        </div>
    );
}

export default App;
