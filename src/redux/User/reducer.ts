import { User } from "./types";
import { AnyAction } from 'redux';

export type UserState = Readonly<{
    user:User | null ;
}>

export const initialState: UserState = {
    user: null
}

const  reducer = (state = initialState, action: AnyAction) =>{
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                user: null
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
}
export default reducer;
