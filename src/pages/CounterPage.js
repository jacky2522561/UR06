import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
const CounterPage = () => {
    const [count, setCount] = useState(0);
    const [valueToAdd, setValueToAdd] = useState(0);
    const increasement = () => {
        setCount(count + 1);
    }
    const decreasement = () => {
        setCount(count - 1);
    }
    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setValueToAdd(value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        const sum = parseInt(valueToAdd)+parseInt(count);
        setCount(sum);
    }
    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>count is {count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increasement}>increase</Button>
                <Button onClick={decreasement}>decrease</Button>
            </div>

            <form onSubmit={handleClick}>
                <label>Add a lot!</label>
                <input
                    value={valueToAdd || ''}
                    onChange={handleChange}
                    type='number'
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                ></input>
                <Button>Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;