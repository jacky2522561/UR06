import Button from '../components/Button';
import { GoBellFill, GoAlertFill, GoCheckCircleFill } from "react-icons/go";
const ButtonPage = () => {
    const handleClick = () =>{
        console.log('click');
    }
    return (
        <div>
            <div>
                <Button onClick = {handleClick} success rounded outline className = 'mb-5'>
                    <GoBellFill />
                    test1
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoAlertFill />
                    test2
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoCheckCircleFill />
                    test3
                </Button>
            </div>
            <div>
                <Button secondary outline>test4</Button>
            </div>
            <div>
                <Button primary rounded>test5</Button>
            </div>
        </div>
    )
}

export default ButtonPage;