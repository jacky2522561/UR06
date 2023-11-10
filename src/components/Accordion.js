import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
const Accordion = ({ items }) => {
    const [expandedID, setExpandedID] = useState(-1);

    const handleClick = (theIndex) => {
        setExpandedID(currentExpandedID =>{
            if(currentExpandedID===theIndex) return -1;
            else return theIndex;
        })
    }

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedID;
        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer" onClick={() => handleClick(index)}>{item.label}{icon}</div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return <div className="border-x border-t rounded">
        {renderItems}
    </div>
}

export default Accordion;