import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';




export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterParent(by) {
        setCount(count + by);
    }

    function decrementCounterParent(by) {
        setCount(count - by);
    }

    function resetCounter() {
        setCount(0)
    }



    return (
        <div>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementedMethod={incrementCounterParent}
                                decrementedMethod={decrementCounterParent}/>
            <CounterButton by={2} incrementedMethod={incrementCounterParent}
                                decrementedMethod={decrementCounterParent}/>
            <CounterButton by={5} incrementedMethod={incrementCounterParent}
                                decrementedMethod={decrementCounterParent}/>
            <button className="resetButton"
                        onClick={resetCounter}>RESET</button>
            
        </div>
    )
}

