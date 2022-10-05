import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
//import rootReducer from './reducers'
import rootSaga from './sagas'
import { reducer as user } from './User'
import fetchUserSaga from './User/sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    user,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(fetchUserSaga)

export default store
