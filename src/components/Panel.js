import classNames from 'classnames';
import { twMerge } from "tailwind-merge";
const Panel = ({children, className , ...rest}) =>{
    const newMergeClassNames = twMerge(classNames('border rounded p-3 shadow bg-white w-full',className));
    return(<div {...rest} className={newMergeClassNames}>{children}</div>)
}

export default Panel;