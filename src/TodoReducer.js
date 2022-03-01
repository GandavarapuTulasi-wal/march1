const TodoReducer = (state, action) => {
    if (action.type == "add") {
        let todoObject={
            item:action.item,
            status:action.status,
        }
        let newTodos=[...state,todoObject];
        return newTodos
    }
    if (action.type == "delete") {
        console.log(action.index)
        let newState = state.filter(function (val, index) {
            if (action.index == index) {
                return false
            }
            return true
        })
        return newState
    }
    if (action.type == "clear") {
        return ([])
    }


}
export default TodoReducer;