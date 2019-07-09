import { SIGNED_IN } from '../constants2'

let user = {
    email: null
}

// export default (state = {}, action) => {
//     switch (action.type) {
//      case 'SIMPLE_ACTION':
//       return {
//        result: action.payload
//       }
//      default:
//       return state
//     }
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
            return state
    }
}