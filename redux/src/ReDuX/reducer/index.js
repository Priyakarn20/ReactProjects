import { INCREMENT, DECREMENT , RESET } from  "../action-types"

const initialState = {
    count: 0,
    name: "PRIYA"
}; 

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return{
...state,
count: state.count + 1
            };
            case DECREMENT:
                return {
                    ...state, 
count : state.count - 1
                };
                case RESET:
                    return{
                        ...state, 
                        count: 0
                    };
                    default:
                        return state;
            }

    };
 export default countReducer;