import useNavigationContext from '../hooks/use-navigation';
import classNames from 'classnames';

const Link = ({to,children}) =>{
    const {navigate} = useNavigationContext();
    const classes = classNames('text-blue-500')
    const handleClick =(e) =>{
        if(e.ctrlKey || e.metaKey){
            return;
        }
        e.preventDefault();
        navigate(to);
    }
    return <a className = {classes} onClick={handleClick} href={to}>{children}</a>
}

export default Link;