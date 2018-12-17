import { SIGNED_IN } from '../constants2'

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
}