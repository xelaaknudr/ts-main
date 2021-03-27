import { UserActionTypes, UserState, UserAction} from '../../types/userReducerTypes'

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, users: action.payload, loading: false}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}
