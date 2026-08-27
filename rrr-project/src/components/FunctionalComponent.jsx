import { useState, useEffect } from "react";

const FunctionalComponent = ({ number }) => {
    const[state, setState] = useState(0)
    //useEffect(()=>{fetch('https://todo-redev.onrender.com/api/auth/me')
        //.then(response => response.json())
       // .then(data => this.setState({ data }))}, )
    useEffect(()=>{ console.log('Данные обновились! Текущий count:', state);},[state])
    useEffect(()=>{
        return()=> {console.log('Компонент удалён')}
    },[])


    return <>Привет, {state}
    <button onClick={()=>{setState(state=> state + 1)}}>Click</button>
    </>
}


export default FunctionalComponent;