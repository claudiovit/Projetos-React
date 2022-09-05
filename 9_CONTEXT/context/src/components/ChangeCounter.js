import { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';

export const ChangeCounter = () => {
    const { setCounter } = useContext(CounterContext);
    
    const handleClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };
    
    return (
        <div>
        <button onClick={handleClick}>Incrementar</button>
        </div>
    );

}

export default ChangeCounter