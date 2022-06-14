import styles from './tasksblock.module.css'
import React from "react";


let myStyle = `${styles.color} + "list-group-item"`

let StyleForInput = `${styles.aboba} + "form-control"`

let TasksBlock = (props) => {


    let CurrentTasks = props.info.dispatch(props.info.tasksGiver())

    let AllTasks = CurrentTasks
        .filter(element => !(element.isDeleting))
        .map(el => <li className={myStyle}>{el.text}
            <button onClick={()=>{
                console.log(CurrentTasks)
                el.isDeleting = true
                console.log(el.text)
                console.log(el.isDeleting)
                props.info.rerender(props.render)
            }}>delete
            </button>
        </li>)

    let a = React.createRef()

    let func = () => {
        let n = a.current.value
        props.info.dispatch(props.info.tasksSetter(n, false))
        props.info.rerender(props.render)

    }



    return (
        <div className={styles.main}>
            <ul className="list-group">
                {AllTasks}
            </ul>
            <div>
                <input ref={a} className={StyleForInput}></input>
                <button className="btn btn-outline-secondary" type="button" onClick={func}>Создать задачу</button>
            </div>
        </div>
    )
}

export default TasksBlock