import Table from './Table';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from '../hooks/use-sort';
const SortableTable = (props) => {
    const { config, data } = props;
    const {
        sortBy,
        sortOrder,
        sortedData,
        sortColumn
    } = useSort(data,config);

    const updateConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => sortColumn(column.label)}>
                <div className='flex item-center'>
                    {getIcons(column.label, sortBy, sortOrder)}{column.label}
                </div>
            </th>
        }
    })

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