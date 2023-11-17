import { useState } from "react";

const useSort = (data,config) =>{
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const sortColumn = (label) => {
        if(sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        } else if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        }
    }

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(item => item.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            let reverseSort = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseSort;
            }
            return (valueA - valueB) * reverseSort;
        })
    }

    return{
        sortBy,
        sortOrder,
        sortedData,
        sortColumn
    }
    
}

export default useSort;