import {useState , useEffect} from 'react';

const useCount = (initialvalue) =>{
    const [count,setCount] = useState(initialvalue);

    useEffect(()=>{
        console.log(count);
    },[count]);

    const increasement = () =>{
        setCount(current => current+1);
    }
    
    return{
        count,
        increasement
    }
}

export default useCount;