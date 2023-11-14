import useNavigationContext from '../hooks/use-navigation';
import classNames from 'classnames';

const Link = ({ to, children, className,activeClassName }) => {
    const { navigate, currentPath } = useNavigationContext();
    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
        );
    const handleClick = (e) => {
        if (e.ctrlKey || e.metaKey) {
            return;
        }
        e.preventDefault();
        navigate(to);
    }
    return <a className={classes} onClick={handleClick} href={to}>{children}</a>
}

export default Link;