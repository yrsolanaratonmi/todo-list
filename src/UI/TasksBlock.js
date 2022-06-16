import styles from './tasksblock.module.css'
import React from "react";


let inputGroup = `${styles.main} + "input-group mb-3"`

let myStyle = `${styles.color} + "list-group-item"`

let StyleForInput = `${styles.aboba} + "form-control"`


let TasksBlock = (props) => {

    props.info.tasksInfo = props.info.tasksInfo
        .filter(element => !(element.isDeleting))

    let CurrentTasks = props.info.tasksInfo

    let AllTasks = CurrentTasks
        .map(el => <li className={myStyle}>{el.text}
            <button className="btn btn-outline-secondary btn-lg" type="button"  onClick={() => {
                el.isDeleting = true
                console.log(el.text)
                console.log(el.isDeleting)
                props.info.rerender(props.render)
            }}>Удалить
            </button>
        </li>)

    let a = React.createRef()

    let func = () => {
        let n = a.current.value
        props.info.dispatch(props.info.tasksSetter(n, false))
        cleartext()
        props.info.rerender(props.render)

    }
    let cleartext = () => {
        document.getElementById('xd').value = ''
}

    return (
        <div className={inputGroup}>
            <ul className="list-group">
                {AllTasks}
            </ul>
            <div className={inputGroup} >
                <input ref={a} className={StyleForInput} id='xd' placeholder="Введите задачу" aria-label = "Recipient's username" aria-describedby = "basic-addon2"></input>
                <div className='input-group-append'>
                    <button className="btn btn-outline-secondary btn-lg" type="button" onClick={func}>Создать задачу</button>
                </div>

            </div>
        </div>
    )
}

export default TasksBlock

