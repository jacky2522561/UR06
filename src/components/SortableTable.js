import Table from './Table';
import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
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


    const updateConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label)}>
                <div className='flex item-center'>
                    {getIcons(column.label, sortBy, sortOrder)}{column.label}
                </div>
            </th>
        }
    })

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

    return (
        <div>
            {sortOrder} - {sortBy}
            <Table {...props} data={sortedData} config={updateConfig}></Table>;
        </div>
    )
}

const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoTriangleUp />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoTriangleDown />
        </div>
    }
}

export default SortableTable;