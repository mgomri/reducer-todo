
export const initialState = [];

export const reducer = (state, action) => {
    switch(action.type){
        case 'add_todo':
            return [...state, {title: action.payload, id: Date.now(), completed: false}]
        case 'toggle_completed':
            return (
                state.map(el => {
                    if(el.id === action.payload){
                        return {...el, completed: !el.completed};
                    }else{
                        return el;
                    }
                })
            )
            case 'clear_completed':
                return(
                    state.filter(el => el.completed === false)
                )

        
        default:
            return state;
    }
}

