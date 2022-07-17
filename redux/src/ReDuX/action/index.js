import { INCREMENT, DECREMENT , RESET } from "../action-types"

export const IncrementCount = () => {
    return{
        type : INCREMENT
    };
};

export const DecrementCount = () => {
    return{
        type : DECREMENT
    };
};

export const ResetCount = () => {
    return{
        type : RESET
    };
};