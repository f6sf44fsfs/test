import { makeGetRequest } from "../../services/networking/request";
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserSuccess, FETCH_USER_REQUEST } from "./actions";

function* fetchUser(action: any) {
    console.log('fetchUser', action);
    const endpoint = `/${action.payload.userId}`;

    try {
         const response:ResponseGenerator = yield call(makeGetRequest,endpoint);
         yield put(fetchUserSuccess(response.body));
    } catch (e: any) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
        console.log(e.message);
    }
}

export interface ResponseGenerator { 
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string,
body?: any }


export default function* fetchUserSaga() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}