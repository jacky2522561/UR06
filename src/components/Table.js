import { Fragment } from "react";
const Table = ({ data, config,keyFn }) => {
    const renderHeaders = config.map((column) => {
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
    })
    const renderRows = data.map((item) => {
        const renderCells = config.map((column)=>{
            return <td className="p-2" key={column.label}>{column.render(item)}</td>
        })
        return (
            <tr className="border-b" key={keyFn(item)}>
                {renderCells}
            </tr>
        )
    })
    return (
        <table className="table-auto border-spacing-2"> 
            <thead>
                <tr className="border-b-2">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    )
}

export default Table;