import { useState,useEffect,useRef } from "react";
import { GoTriangleDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEL = useRef();
    useEffect(()=>{
        const handler = (event) =>{
            if(!divEL.current){
                return;
            }
            if(!divEL.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click',handler,true);
        return ()=>{
            document.removeEventListener('click',handler);
        }
    },[]);
    const handleClick = () => {
        setIsOpen((currentIsOpen) => { return !currentIsOpen });
    }
    
    const handleOptionClick = (e) => {
        setIsOpen(false);
        onChange(e);
    }
    const renderOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
        )
    })

    return (
        <div ref = {divEL} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label || 'Select'}<GoTriangleDown className="text-lg" /></Panel>
            {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
        </div>
    )
}

export default Dropdown;