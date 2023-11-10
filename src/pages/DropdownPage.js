import Dropdown from '../components/Dropdown';
import { useState } from "react";
const DropdownPage = () => {
    const [select, setSelect] = useState(null);
    const handleSelect = (option) => {
        setSelect(() => option);
    };
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' }
    ];
    return (
        <div className="flex">
            < Dropdown options = { options } value = { select } onChange = { handleSelect } />
        </div>
    )
}

export default DropdownPage;