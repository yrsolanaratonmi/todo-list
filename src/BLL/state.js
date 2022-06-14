let info = {
    tasksInfo: [{text:'gavno',isDeleting :false}, {text:'mocha',isDeleting :false}],
    tasksGiver() {
        return {type: 'get-tasks'}
    },
    tasksSetter(text, isDeleting) {
        return {type: 'set-tasks', parameters : {text, isDeleting} }
    },
    dispatch(action) {
        switch (action.type) {
            case ('get-tasks') : {
                return this.tasksInfo
                break
            }
            case ('set-tasks') : {
                this.tasksInfo.push(action.parameters)
                console.log(this.tasksInfo)

                break
            }
        }
    },
    rerender(render) {
        render()

    }

}

export default info