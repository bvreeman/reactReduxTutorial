import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
export default function configureStore(
    initialState={
        user: '',
        email: '',
        phone: '',
        facebook: '',
        twitter: '',
        website: '',
        businessName: '',
        businessDescription: '',
    }) {
 return createStore(
  rootReducer,
   applyMiddleware(thunk)
 );
}