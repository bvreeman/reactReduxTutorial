import { SIGNED_IN } from '../constants2'

let user = {
    email: null
}

// export const simpleAction = () => dispatch => {
//     dispatch({
//      type: 'SIMPLE_ACTION',
//      payload: 'result_of_simple_action'
//     })
//    }

export default (state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { email } = action;
            user = {
                email
            }
            return user;
        default:
            return state;
    }
}